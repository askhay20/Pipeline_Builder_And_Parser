from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# allow CORS from the frontend dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


class PipelinePayload(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]


def is_dag_kahn(nodes, edges):
    # build adjacency and in-degrees
    adj = {n['id']: [] for n in nodes}
    indeg = {n['id']: 0 for n in nodes}
    for e in edges:
        src = e.get('source')
        tgt = e.get('target')
        if src in adj and tgt in indeg:
            adj[src].append(tgt)
            indeg[tgt] += 1

    queue = [n for n in indeg if indeg[n] == 0]
    visited = 0
    while queue:
        u = queue.pop(0)
        visited += 1
        for v in adj.get(u, []):
            indeg[v] -= 1
            if indeg[v] == 0:
                queue.append(v)

    return visited == len(nodes)


@app.post('/pipelines/parse')
async def parse_pipeline(payload: PipelinePayload):
    nodes = payload.nodes or []
    edges = payload.edges or []
    num_nodes = len(nodes)
    num_edges = len(edges)
    dag = is_dag_kahn(nodes, edges)
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': dag}
