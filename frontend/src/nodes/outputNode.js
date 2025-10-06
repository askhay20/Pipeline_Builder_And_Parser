// outputNode.js

import { useState } from 'react';
import { GenericNode } from './genericNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  return (
    <GenericNode id={id} data={data} title="Output" leftHandles={[{id:'value'}]} rightHandles={[]}>
      <label style={{display:'block'}}>Name:
        <input type="text" value={currName} onChange={handleNameChange} />
      </label>
      <label style={{display:'block'}}>Type:
        <select value={outputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </GenericNode>
  );
}
