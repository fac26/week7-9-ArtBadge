import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function ImageUploader({ selectedFile, setSelectedFile }) {
  const router = useRouter();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      localStorage.setItem('uploadedFile', reader.result);
    };
    router.push('/reflect-add-details');
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
