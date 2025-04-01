import React, { useState } from 'react';

const AudioAndArtwork = ({ formData, handleInputChange, handleFileChange }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [audioFileName, setAudioFileName] = useState(''); // State for storing the audio file name

  // Handle file change for audio
  const handleAudioFileChange = (event) => {
    const { target: { files } } = event;
    const audioFile = files[0];

    if (audioFile) {
      setAudioFileName(audioFile.name); // Set the name of the selected audio file
      handleFileChange(event); // Call the parent handler to update formData
    }
  };

  // Handle file change for artwork
  const handleImageFileChange = (event) => {
    const { target: { files } } = event;
    const imageFile = files[0];

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(imageFile);

      // Update formData with the image file
      handleFileChange(event);
    }
  };

  return (
    <div className="audio-and-artwork">
      <form className="audio">
        <ul>
          <li>We allow the following audio file types:</li>
          <li>High Quality MP3 - 320kbps - 44.1khz</li>
          <li>High Quality FLAC - 44.1khz</li>
        </ul>

        <article>
          <h3>Upload Restrictions</h3>
          <p>
            The upload tool is restricted to 15 files per session. Please choose 'Add More Tracks' at the end of the session if your release contains more than 15 tracks.
          </p>
        </article>

        <div className="form-group">
          <label htmlFor="audioFile">Upload Track</label>
          <div>
            <label className='name'>{audioFileName || 'Add audio'}</label> {/* Display the audio file name or a default message */}
            <input
              type="file"
              id="audioFile"
              name="audioFile"
              accept=".mp3,.flac" // Restrict file types to MP3 and FLAC
              onChange={handleAudioFileChange} // Call the handler for file input
              style={{ display: 'none' }} // Hide the default file input
            />

            {/* Custom button to trigger file input */}
            <button
              type="button"
              className="btn-select"
              onClick={() => document.getElementById('audioFile').click()} // Trigger file input click
            >
              Tap to Select
            </button>
          </div>
        </div>
      </form>

      <form className="artwork">
        <div className="header">
          <div className="image-preview">
            {imagePreview && (
              <img src={imagePreview} alt="Image Preview" />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="imageFile">Upload Artwork</label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              accept="image/*"
              onChange={handleImageFileChange}
            />
          </div>
        </div>

        <div className="guidelines">
          <div className="head">
            <h2>STYLE GUIDELINE</h2>
          </div>

          <div className="form-group">
            <p>3000px x 3000px</p>
            <p>RGB Colour Space</p>
            <p>Blurry or pixelated images will be rejected</p>
            <p>Professional quality, product relevant images</p>
          </div>
          <div className="form-group">
            <p>Pricing information shouldn’t be indicated</p>
            <p>Less than 25MB</p>
            <p>Pornographic images not allowed</p>
            <p>Copyrighted images not allowed</p>
          </div>
          <div className="form-group">
            <p>No Contact information (i.e. email address, phone number etc.)</p>
            <p>No Website URL</p>
            <p>No Scan of a CD (must be retail ready artwork)</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AudioAndArtwork





