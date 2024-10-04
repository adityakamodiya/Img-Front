import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [file, setFile] = useState(null);
  const [fileId, setFileId] = useState(null); // Store file ID after upload

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Access the first file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await axios.post('https://imgback.onrender.com/send', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Important for file uploads
          },
        });
        console.log(res.data);
        setFileId(res.data.fileId); // Store the file ID after upload
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          onChange={handleFileChange} 
          placeholder='Upload your document' 
        />
        <button type='submit'>Submit</button>
      </form>

      {/* Display the image after uploading */}
      {fileId && (
        <img 
          src={`https://imgback.onrender.com/file/${fileId}`} // Use the correct path to serve the image
          alt="Uploaded file" 
          style={{ marginTop: '20px', width: '300px', height: 'auto' }}
        />
      )}
    </div>
  );
}

export default Form;
