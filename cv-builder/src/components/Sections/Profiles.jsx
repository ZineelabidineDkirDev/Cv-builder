
import React, { useState, useEffect } from 'react'

import ProfileImageUpload from './ProfileImageUploader';


//import file system fs to store data inside json file 
// import { saveJson } from './saveData';
const filee = '../../data/ProfilsData.json';


const Profiles = () => {
  const [src, setSrc] = useState('');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    phone: '',
    adress: '',
    country: '',
    city: '',
    codePostall: '',
    imgProfile: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      imgProfile: file,
    }));
  };

  const handleSubmit = () => {
    const jsonData = JSON.stringify(formData);
    // console.log(jsonData);
    localStorage.setItem('profileData', jsonData);
    console.log('JSON Data:', jsonData);
    // saveJson(filee,formData);
  };

  // save data inside json file using fs node js module
  // useEffect(() => {
  //   console.log('Updated src:', src);
  // }, [src]);
  // const clickme = () => {
  //   const storedValue = JSON.parse(localStorage.getItem('profileData'));
  //   if (storedValue && storedValue.imgProfile) {
  //     setSrc(storedValue.imgProfile);
  //   }
  // };

  return (

    <form className="row g-3 ">

      <div className="col-lg-12">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-4 d-flex align-items-center justify-content-center">
            <ProfileImageUpload onFileChange={handleFileChange} />
          </div>


          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="nom" className="form-label">Nom :</label>
                <input type="text" className="form-control" id="nom" name="nom" value={formData.nom}
                  onChange={handleChange} />
              </div>
              <div className="col-lg-6">
                <label htmlFor="prenom" className="form-label">Prénom :</label>
                <input type="text" className="form-control" id="prenom" name='prenom' value={formData.prenom} onChange={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="email" className="form-label">Email :</label>
                <input type="email" className="form-control" id="email" name='email' value={formData.email} onChange={handleChange} />
              </div>
              <div className="col-lg-6">
                <label htmlFor="phone" className="form-label">Phone :</label>
                <input type="number" className="form-control" id="phone" name='phone' value={formData.phone} onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-6">
        <label htmlFor="inputEmail4" className="form-label">Country :</label>
        <input type="text" className="form-control" id="inputEmail4" name='country' value={formData.country} onChange={handleChange} />
      </div>
      <div className="col-lg-6">
        <label htmlFor="inputPassword4" className="form-label">City :</label>
        <input type="text" className="form-control" id="inputPassword4" name='city' value={formData.city} onChange={handleChange} />
      </div>
      <div className="col-8">
        <label htmlFor="adress" className="form-label">Address :</label>
        <input type="text" className="form-control" id="adress" name='adress' value={formData.adress} onChange={handleChange} />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputCity" className="form-label">Zip :</label>
        <input type="text" className="form-control" id="zip" name='codePostall' value={formData.codePostall} onChange={handleChange} />
      </div>

      {/* {src && <img src={src} alt="" />} */}

      <div className="col-12">
        <button type="button" onClick={handleSubmit} className="btn btn-primary">next Step </button>
        {/* <button type="button" onClick={clickme}>cllll</button> */}
      </div>

    </form>
  )
    
};


export default Profiles