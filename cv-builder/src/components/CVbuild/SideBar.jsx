import React,{useState,useEffect} from 'react'
import {Card,Image,Badge} from 'react-bootstrap'
import { AiFillChrome, AiFillHome, AiFillMail,AiFillPhone, AiOutlineHome } from 'react-icons/ai'
const SideBar = () => {
    // const profil = "https://viberatecdn.blob.core.windows.net/entity/artist/moha-k-WinxY"
    // const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'];
    // const languages = [
    //     { name: 'English', level: 5 }, 
    //     { name: 'Spanish', level: 3 },
    //   ];
    // const socialink = [
    //     'fb.com','github.com','behance.com'
    // ]
    // profile Data

    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
      const storeProfileData = JSON.parse(localStorage.getItem("profileData")) || [];
      setProfileData([storeProfileData]);
      console.log("Profile Data", storeProfileData);
    }, []);
  
    // Check if profileData is an array before using map
    if (!Array.isArray(profileData)) {
      console.error("Profile data is not an array:", profileData);
      return null; // or handle the error in some other way
    }

    //Skills 

    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
      const storeExpData = JSON.parse(localStorage.getItem("experienceData")) || [];
      setExperienceData([storeExpData]);
      console.log("Experience Data", storeExpData);
    }, []);
  
    // Check if profileData is an array before using map
    if (!Array.isArray(experienceData)) {
      console.error("Experience data is not an array:", experienceData);
      return null; 
    }

  // {"nom":"DKIR",
    // "prenom":"ZINE El ABIDINE",
    // "email":"zainmawada@gmail.com",
    // "phone":"0638965033",
    // "adress":"Qamra du Nord C.Y.M. RABAT",
    // "country":"Maroc",
    // "city":"RABAT",
    // "codePostall":"10120",
    // "imgProfile":""}
  return (
        <Card className="sidebar-card">
          
          
      <Card.Body  className='sidebar-body'>
        
        {profileData.map((profil, id) => (
          <div className='profiledata'>
      <Image key={id} src={profil.imgProfile} alt="Profile" roundedCircle className="profile-image" />
        <Card.Title>
          <h3 className='text-center'>{profil.nom} <br /><b>{profil.prenom}</b></h3>
          <br></br>
          <p className='bg-light w-[100%] p-3 '><b>Contact Information</b></p>
        </Card.Title>
        <Card.Text className='sidebar-info'>
          <p><AiFillMail/> {profil.email}</p>
          <p><AiFillPhone/> {profil.phone}</p>
          <p><AiFillHome/>  {profil.adress}</p>
          <p><AiOutlineHome/>  {profil.city}, <span>{profil.codePostall}</span></p>
        </Card.Text>
        </div>
        ))}
        
          
        <div>
        <Card.Title>
          
          <p className='bg-light w-[100%] p-3 '><b>Skills</b></p>
        </Card.Title>
        <Card.Text className='sidebar-info'>
        {/* {skills.map((skill, index) => ( */}
            <Badge  className="skill-badge">
              Php
            </Badge>
          {/*  */}
        </Card.Text>
        </div>
        <Card.Title>
          <p className='bg-light w-[100%] p-3 '><b>Languages</b></p>
        </Card.Title>
        <Card.Text className='sidebar-info'>
        {/* {languages.map((language, index) => ( */}
            <div className="language">
              <span><b>dotnet</b></span>
              <div className="stars">
                {/* {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`star ${i < language.level ? 'filled' : ''}`}></span>
                ))} */}
              </div>
            </div>
          {/* ))} */}
        </Card.Text>
        <Card.Title>
          <p className='bg-light w-[100%] p-3 '><b>Social Link</b></p>
        </Card.Title>
        <Card.Text className='sidebar-info'>
        {/* {socialink.map((sl, index) => ( */}
            <div className="links">
              <span><b>facebook</b></span>
            </div>
          {/* ))} */}
        </Card.Text>
      </Card.Body>
      
    </Card>
  )
}

export default SideBar