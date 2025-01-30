import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import FileBase64 from './react-file-base64.js';

const App = () => {
  const [files, setFiles] = useState([]);

  const getFiles = (files) => {
    setFiles(files);
  };

  return (
    <div>
      <h1 className="text-center">React File to Base64 Converter</h1>

      <div className="text-center mt-25">
        <p className="text-center"> *) Try To Upload Some Image~</p>
        <FileBase64
          multiple={true}
          onDone={getFiles}
        />
      </div>

      <div className="text-center">
        {files.map((file, i) => (
          <img key={i} src={file.base64} alt={file.name} />
        ))}
      </div>

      {files.length > 0 && (
        <div>
          <h3 className="text-center mt-25">Callback Object</h3>
          <div className="pre-container">
            <pre>{JSON.stringify(files, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
