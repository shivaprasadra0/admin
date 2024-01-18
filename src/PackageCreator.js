// PackageCreator.js
import React, { useState } from 'react';
import './pc.css';
import ImageUploader from './ImageUploader'; // Import the ImageUploader component

const PackageCreator = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Add state for the selected image

  const [packageTitle, setPackageTitle] = useState('');
  const [packageDetails, setPackageDetails] = useState('');
  const [benefits, setBenefits] = useState('');

  const [packageCreated, setPackageCreated] = useState(false);

  const createPackage = () => {
    setPackageCreated(true);
  };

  return (
    <div className="package-creator">
      <div className="left-half">
        {/* Use the ImageUploader component */}
        <ImageUploader setSelectedImage={setSelectedImage} />

        <div style={{ display: 'flex', marginTop: '10px' }} className='space-x-4'>
        
          <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
Button Text
</button>
<button class="inline-flex items-center justify-center h-12 px-6 space-x-2 font-medium  text-gray-900 border-2 border-gray-600  rounded-lg">
Button Text
</button>
<button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
Button Text
</button>
        </div>

        <input
          type="text"
          placeholder="Package Title"
          value={packageTitle}
          onChange={(e) => setPackageTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Package Details"
          value={packageDetails}
          onChange={(e) => setPackageDetails(e.target.value)}
        />
        <input
          type="text"
          placeholder="Benefits"
          value={benefits}
          onChange={(e) => setBenefits(e.target.value)}
        />

        <button onClick={createPackage}>Create a Package</button>
      </div>

      <div className="right-half">
        {packageCreated && (
          <div className="created-package">
            <h2>Created Package:</h2>
            {/* Display the selected image */}
            {/* {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />} */}
            <>
  {/* component */}
  <div className="flex flex-row h-screen">
      <div className="w-full max-w-xs   bg-white">
        <img
        width="115" height="140"
          src={URL.createObjectURL(selectedImage)}
          alt="tailwind logo"
          className="rounded-xl"
        />
      </div>
      <div className="w-full bg-white flex flex-col space-y-2 p-3">
        
        <h3 className="font-black text-gray-800 md:text-3xl text-xl">
        Title: {packageTitle}    </h3>
        <h3 className="font-black text-gray-800 md:text-3xl text-xl">
        Details: {packageDetails}      </h3>
        <h3 className="font-black text-gray-800 md:text-3xl text-xl">
        Benefits: {benefits}        </h3>
        
      </div>
    </div>

</>

          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCreator;
