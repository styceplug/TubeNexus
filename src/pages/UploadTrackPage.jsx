import React, { useState } from 'react';
import NavbarDashboard from '../components/NavbarDashboard';
import ReleaseDataForm from '../components/ReleaseDataForm';
import ReleaseDetailsForm from '../components/ReleaseDetailsForm';
import AudioAndArtwork from '../components/AudioAndArtwork';

const UploadTrackPage = () => {
  const [currentForm, setCurrentForm] = useState('releaseData'); // Toggle between 'releaseData', 'releaseDetails', and 'audioAndArtwork'
  const [formData, setFormData] = useState({
    upc: '',
    ean: '',
    releaseTitle: '',
    albumTitle: '',
    language: '',
    albumVersion: '',
    artistName: '',
    publishingInformation: '',
    compilationAlbum: '',
    lyrics: '',
    primaryGenre: '',
    secondaryGenre: '',
    explicitContent: '',
    compYear: '',
    recordingYear: '',
    label: '',
    OriginalReleaseDay: '',
    originalReleaseMonth: '',
    originalReleaseYear: '',
  });

  const handleFormSwitch = (formName) => {
    setCurrentForm(formName);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const { files, name } = event.target;
    const file = files[0];
  
    // Check file size (e.g., limit to 5MB)
    const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
    if (file && file.size > maxSize) {
      alert(`File size exceeds the 5 MB limit for ${name}.`);
      return;
    }
  
    // Update formData with the selected file
    setFormData({
      ...formData,
      [name]: file,
    });
  };
  

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();

      // Append text fields
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          formDataToSend.append(key, formData[key]);
        }
      }

      // Append audio and image files (if any)
      if (formData.audioFile) {
        formDataToSend.append('audioFile', formData.audioFile);
      }
      if (formData.imageFile) {
        formDataToSend.append('imageFile', formData.imageFile);
      }

      // Make the POST request
      const response = await fetch('http://localhost/send_email.php', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        console.log('Form data successfully sent to the backend');
      } else {
        console.error('Failed to send form data to the backend');
      }
    } catch (error) {
      console.error('Error sending form data:',   
 error);
    }
  };




  const handleCancel = () => {
    // Reset all fields to initial state
    setFormData({
      upc: '',
      ean: '',
      releaseTitle: '',
      albumTitle: '',
      language: '',
      albumVersion: '',
      artistName: '',
      publishingInformation: '',
      compilationAlbum: '',
      lyrics: '',
      primaryGenre: '',
      secondaryGenre: '',
      explicitContent: '',
      compYear: '',
      recordingYear: '',
      label: '',
      originalReleaseDay: '',
      originalReleaseMonth: '',
      originalReleaseYear: '',

    });
  };

  return (
    <div className='upload-track-page'>
      <NavbarDashboard />

      <div className="button-groups">
        <div className="button-group">
          <button onClick={() => handleFormSwitch('releaseData')}>Release Data Form</button>
          <button onClick={() => handleFormSwitch('releaseDetails')}>Release Details Form</button>
          <button onClick={() => handleFormSwitch('audioAndArtwork')}>Audio and Artwork</button>
        </div>

        <div className="button-group">
          <button className='btn-save' onClick={handleSave}>Save</button>
          <button className='btn-cancel' onClick={handleCancel}>Cancel</button>
        </div>
      </div>

      {currentForm === 'releaseData' && (
        <ReleaseDataForm formData={formData} handleInputChange={handleInputChange} />
      )}
      {currentForm === 'releaseDetails' && (
        <ReleaseDetailsForm formData={formData} handleInputChange={handleInputChange} />
      )}
      {currentForm === 'audioAndArtwork' && (
        <AudioAndArtwork formData={formData} handleInputChange={handleInputChange} handleFileChange={handleFileChange} />
      )}
    </div>
  );
};

export default UploadTrackPage; 


