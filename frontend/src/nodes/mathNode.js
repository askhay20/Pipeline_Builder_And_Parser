import React, {useState} from 'react';
import { GenericNode } from './genericNode';

export const MathNode = ({ id, data }) => {
  const [expr, setExpr] = useState(data?.expr || '1+1');
  let result = '';
  try { result = eval(expr); } catch(e) { result = 'err'; }
  return (
    <GenericNode id={id} data={data} title="Math" leftHandles={[]} rightHandles={[{id:'result'}]}>
      <label>Expr: <input value={expr} onChange={e=>setExpr(e.target.value)} /></label>
      <div>Result: {String(result)}</div>
    </GenericNode>
  );
};
