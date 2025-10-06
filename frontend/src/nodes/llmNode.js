// llmNode.js

import { GenericNode } from './genericNode';

export const LLMNode = ({ id, data }) => {
  return (
    <GenericNode id={id} data={data} title="LLM" leftHandles={[{id:'system'},{id:'prompt'}]} rightHandles={[{id:'response'}]}>
      <div>This node represents a language model.</div>
    </GenericNode>
  );
}
