import React, {useState} from 'react';
import { GenericNode } from './genericNode';

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.ms || 1000);
  return (
    <GenericNode id={id} data={data} title="Delay" leftHandles={[{id:'in'}]} rightHandles={[{id:'out'}]}>
      <label>ms: <input type="number" value={ms} onChange={e=>setMs(e.target.value)} /></label>
    </GenericNode>
  );
};
