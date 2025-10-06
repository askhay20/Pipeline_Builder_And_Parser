import { useStore } from './store';
import toast from 'react-hot-toast';

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);

  const onSubmit = async () => {
    try {
      const resp = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!resp.ok) {
        throw new Error(`Server responded with status ${resp.status}`);
      }

      const json = await resp.json();

      toast.success(
        `✅ Pipeline parsed successfully!\n\nNodes: ${json.num_nodes}\nEdges: ${json.num_edges}\nIs DAG: ${json.is_dag}`,
        {
          duration: 5000,
          style: {
            whiteSpace: 'pre-line', // to keep newlines
            background: '#333',
            color: '#fff',
            borderRadius: '8px',
          },
        }
      );
    } catch (e) {
      toast.error(`❌ Error submitting pipeline:\n${e.message}`, {
        duration: 5000,
        style: {
          whiteSpace: 'pre-line',
          background: '#ff4d4f',
          color: '#fff',
          borderRadius: '8px',
        },
      });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
      }}
    >
      <button
        onClick={onSubmit}
        style={{
          padding: '8px 16px',
          borderRadius: 6,
          backgroundColor: '#2563eb',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
};
