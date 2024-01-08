import React,{useState,useEffect} from 'react'
import {Card,Image,Badge} from 'react-bootstrap'
import { AiFillChrome, AiFillHome, AiFillMail,AiFillPhone, AiOutlineHome } from 'react-icons/ai'
import Language from '../Sections/Language';
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
  
    if (!Array.isArray(profileData)) {
      console.error("Profile Data:", profileData);
      return null; // or handle the error in some other way
    }

    //Skills 
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
      const storeSkillData = JSON.parse(localStorage.getItem("skills_data")) || [];
      setProfileData([storeSkillData]);
      console.log("Skill Data", storeSkillData);
    }, []);
    
    if (!Array.isArray(skillsData)) {
      console.error("Skill Data:", skillsData);
      return null; // or handle the error in some other way
    }

   //Language 
   const [languageData, setLanguageData] = useState([]);

   useEffect(() => {
     const storeLanguageData = JSON.parse(localStorage.getItem("language_data")) || [];
     setProfileData([storeLanguageData]);
     console.log("Skill Data", storeLanguageData);
   }, []);
   
   if (!Array.isArray(languageData)) {
     console.error("Skill Data:", languageData);
     return null; // or handle the error in some other way
   }

 
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
         {skillsData.map((skill, index) => ( 
            <Badge key={index} className="skill-badge">
              {skill.displayedSkills}
            </Badge>
          ))}
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
                { languageData.map((lang,index)=>(
                  <p>
                    {lang.availableLanguages}
                  </p>
                ))}
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