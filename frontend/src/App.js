import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { Toaster } from 'react-hot-toast'; 

function App() {
  return (
    <div>
      {/* Pipeline UI components */}
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b', // slate-800
            color: '#f8fafc', // light text
            borderRadius: '8px',
            padding: '12px 16px',
            fontSize: '14px',
          },
        }}
      />
    </div>
  );
}

export default App;
