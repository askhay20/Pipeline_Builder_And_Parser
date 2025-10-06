// textNode.js

import React, { useState, useEffect, useRef } from 'react';
import { GenericNode } from './genericNode';
import { useStore } from '../store';

const VAR_RE = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [vars, setVars] = useState(data?.vars || []);
  const inputRef = useRef(null);
  const updateNodeField = useStore((s) => s.updateNodeField);

  useEffect(() => {
    // detect variables and persist
    const found = new Set();
    let m; VAR_RE.lastIndex = 0;
    while ((m = VAR_RE.exec(currText)) !== null) {
      found.add(m[1]);
    }

    const varList = Array.from(found);
    setVars(varList);
    try {
      if (updateNodeField) updateNodeField(id, 'vars', varList);
      if (updateNodeField) updateNodeField(id, 'text', currText);
    } catch(e) {
      // ignore
    }
  }, [currText, id, updateNodeField]);

  // auto-resize the input width/height based on content
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    // approximate width/height by character count
    const lines = currText.split('\n');
    const maxLine = lines.reduce((a,b)=> Math.max(a,b.length), 0);
    el.style.width = Math.min(320, Math.max(120, maxLine * 8 + 20)) + 'px';
    el.style.height = Math.min(200, Math.max(28, lines.length * 20)) + 'px';
  }, [currText]);

  return (
    <GenericNode id={id} data={data} title="Text" leftHandles={vars.map(v=>({id:v}))} rightHandles={[{id:'output'}]}>
      <textarea
        ref={inputRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder={'Type text. Use {{variable}} to create inputs.'}
        style={{ resize: 'none', minWidth: 120 }}
      />
      <div style={{marginTop:6, fontSize:12, color:'#666'}}>
        Variables: {vars.length ? vars.join(', ') : 'none'}
      </div>
    </GenericNode>
  );
}
