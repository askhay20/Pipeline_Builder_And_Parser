// inputNode.js

import { useState } from 'react';
import { GenericNode } from './genericNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <GenericNode id={id} data={data} title="Input" leftHandles={[]} rightHandles={[{id: 'value'}]}>
      <label style={{display:'block'}}>Name:
        <input type="text" value={currName} onChange={handleNameChange} />
      </label>
      <label style={{display:'block'}}>Type:
        <select value={inputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </GenericNode>
  );
}
