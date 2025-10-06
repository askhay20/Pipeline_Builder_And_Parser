import React from 'react';
import { Handle, Position } from 'reactflow';

export const GenericNode = ({ id, data, leftHandles = [], rightHandles = [{id: 'out'}], title = 'Node', children }) => {
  return (
    <div className="vs-node">
      {/* left handles (targets) */}
      {leftHandles.map((h, idx) => (
        <Handle
          key={`left-${h}`}
          type="target"
          position={Position.Left}
          id={`${id}-in-${h}`}
          style={{ top: `${20 + idx * 20}%` }}
        />
        
      ))}

      <div className="vs-node-header">{title}</div>
      <div className="vs-node-content">{children}</div>

      {/* right handles (sources) */}
      {rightHandles.map((h, idx) => (
        <Handle
          key={`right-${h}`}
          type="source"
          position={Position.Right}
          id={`${id}-out-${h}`}
          style={{ top: `${30 + idx * 20}%` }}
        />
      ))}
    </div>
  );
};
