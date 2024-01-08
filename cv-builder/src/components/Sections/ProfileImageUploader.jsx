import React, { useState } from 'react'
import './Cv.css'




function ProfileImageUpload({ onFileChange }) {
  // const [imgfile, setUploadImagefile] = useState();
  const [preview, setPreview] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = reader.result;
        setPreview(img);
        onFileChange(img);


      };
      reader.readAsDataURL(file);
    }

  };
  return <>
    <div className="profile-container">
      <input type="file" className="profile-input" id="profile-input" accept='imges/*' name='imgProfile' onChange={handleFileChange} />
      <label htmlFor="profile-input" className="d-flex align-items-center justify-content-center bg-light">
        {preview ? (
          <img src={preview} alt="Profile Preview" className="profile-icon" />
        ) : (
          <img
            src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            alt="Profile Icon"
            className="profile-icon"
          />
        )}
      </label>
    </div>
  </>
}
export default ProfileImageUpload;