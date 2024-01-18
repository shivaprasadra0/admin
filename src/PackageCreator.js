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

        <div style={{ display: 'flex', marginTop: '10px' }}>
          <button>Package</button>
          <button>Pricing</button>
          <button>Discount</button>
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
            {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />}
            <p>Title: {packageTitle}</p>
            <p>Details: {packageDetails}</p>
            <p>Benefits: {benefits}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCreator;
