import React from 'react';

const ReleaseDataForm = ({ formData, handleInputChange }) => {
  return (
    <form className="release-data-form">
      <div className="form-group">
        <label htmlFor="upc">UPC*</label>
        <input
          type="text"
          name="upc"
          placeholder="Input required data"
          value={formData.upc}
          onChange={handleInputChange}
        />
        <p>If you don’t have one, leave it blank, we’ll generate one for you.</p>
      </div>
      <div className="form-group">
        <label htmlFor="ean">EAN*</label>
        <input
          type="text"
          name="ean"
          placeholder="Input required data"
          value={formData.ean}
          onChange={handleInputChange}
        />
        <p>If you don’t have one, leave it blank, we’ll generate one for you.</p>
      </div>
      <div className="form-group">
        <label htmlFor="releaseTitle">Release Title*</label>
        <input
          type="text"
          name="releaseTitle"
          placeholder="Track title - Artist Name"
          value={formData.releaseTitle}
          onChange={handleInputChange}
        />
        <p>This will be the title of your release.</p>
      </div>
    </form>
  );
};

export default ReleaseDataForm;

