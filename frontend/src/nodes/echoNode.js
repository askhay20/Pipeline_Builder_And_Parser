import React, {useState} from 'react';
import { GenericNode } from './genericNode';

export const EchoNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || 'hello');
  return (
    <GenericNode id={id} data={data} title="Echo" leftHandles={[{id:'in'}]} rightHandles={[{id:'out'}]}>
      <label>Text: <input value={text} onChange={e=>setText(e.target.value)} /></label>
      <div>{text}</div>
    </GenericNode>
  );
};
