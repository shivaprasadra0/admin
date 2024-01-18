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
    
    // <div className="image-uploader">
    //   <input type="file" accept="image/*" onChange={handleImageChange} />
    //   {selectedImageFile && (
    //     <img src={URL.createObjectURL(selectedImageFile)} alt="Uploaded" />
    //   )}
    // </div>
<>
  {/* component */}
  <link
    rel="stylesheet"
    href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
  />
  {/* This is an example component */}
  <div className="max-w-2xl mx-auto">
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" onChange={handleImageChange} type="file" className="hidden" />
       
      </label>
    </div>
  </div>
</>

  );
};

export default ImageUploader;
