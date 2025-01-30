import { useState } from 'react';

const FileBase64 = ({ multiple = false, onDone }) => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const files = e.target.files;
    const allFiles = [];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        };

        allFiles.push(fileInfo);

        if (allFiles.length === files.length) {
          onDone(multiple ? allFiles : allFiles[0]);
        }
      };
    });
  };

  return (
    <input
      type="file"
      onChange={handleChange}
      multiple={multiple}
    />
  );
};

export default FileBase64;
