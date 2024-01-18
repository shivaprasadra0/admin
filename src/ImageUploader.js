// ImageUploader.js
import React, { useState } from 'react';


const ImageUploader = ({ setSelectedImage }) => {
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImageFile(file);
    setSelectedImage(file); // Set the selected image in the parent component
  };

  return (
    
    <div className="image-uploader">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImageFile && (
        <img src={URL.createObjectURL(selectedImageFile)} alt="Uploaded" />
      )}
    </div>
  );
};

export default ImageUploader;
