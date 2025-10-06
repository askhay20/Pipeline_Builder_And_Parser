import React, {useState} from 'react';
import { GenericNode } from './genericNode';

export const NumberNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || 0);
  return (
    <GenericNode id={id} data={data} title="Number" leftHandles={[]} rightHandles={[{id:'value'}]}>
      <label>Value: <input type="number" value={value} onChange={e=>setValue(e.target.value)} /></label>
    </GenericNode>
  );
};
