import React, {useState} from 'react';
import { GenericNode } from './genericNode';

export const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(data?.date || new Date().toISOString().slice(0,10));
  return (
    <GenericNode id={id} data={data} title="Date" leftHandles={[]} rightHandles={[{id:'date'}]}>
      <label>Date: <input type="date" value={date} onChange={e=>setDate(e.target.value)} /></label>
    </GenericNode>
  );
};
