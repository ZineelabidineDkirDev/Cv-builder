import React,{useState,useEffect} from 'react'
import {Card,Image,Badge} from 'react-bootstrap'
import { AiFillBuild, AiFillCaretDown, AiFillChrome, AiFillFacebook, AiFillGithub, AiFillHome, AiFillLinkedin,
   AiFillMail,AiFillPhone, AiFillTwitterCircle, AiFillTwitterSquare, AiOutlineBuild, AiOutlineCarryOut, AiOutlineFlag, AiOutlineHome, AiOutlineMail, 
   AiOutlinePhone} from 'react-icons/ai'
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
      setSkillsData([storeSkillData]);
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
     setLanguageData([storeLanguageData]);
     console.log("Skill Data", storeLanguageData);
   }, []);
   
   if (!Array.isArray(languageData)) {
     console.error("Skill Data:", languageData);
     return null; // or handle the error in some other way
   }


    //References 
    const [referencesData, setReferencesData] = useState([]);

    useEffect(() => {
      const storeReferencesData = JSON.parse(localStorage.getItem("references_data")) || [];
      setReferencesData([storeReferencesData]);
      console.log("Skill Data", storeReferencesData);
    }, []);
    
    if (!Array.isArray(referencesData)) {
      console.error("References Data:", referencesData);
      return null; // or handle the error in some other way
    }
 
  return (
        <Card className="sidebar-card">
          
          
      <Card.Body  className='sidebar-body'>
        
        {profileData.map((profil, id) => (
          <div className='profiledata'>
      <Image key={id} src={profil.imgProfile} alt="Profile" roundedCircle className="profile-image flex justify-content-center" />
        <Card.Title>
          <h3 className='text-center'>{profil.nom} <br /><b>{profil.prenom}</b></h3>
          <br></br>
          <p className='bg-light w-[100%] p-3 '><b>Contact Information</b></p>
        </Card.Title>
        <Card.Text className='sidebar-info'>
          <p><AiOutlineMail style={{fontSize:'22px'}}/> {profil.email}</p>
          <p><AiOutlinePhone style={{fontSize:'22px'}}/> {profil.phone}</p>
          <p><AiOutlineHome style={{fontSize:'22px'}}/>  {profil.adress} {profil.codePostall},{profil.city}</p>
          <p><AiOutlineCarryOut style={{fontSize:'22px'}}/>  {profil.daten}</p>
        </Card.Text>
        </div>
        ))}
        
          
        <div>
        <Card.Title>
          
          <p className='bg-light w-[100%] p-3 '><b>Skills</b></p>
        </Card.Title>
       
        <Card.Text className='sidebar-info'>
          {skillsData.length <= 2 && skillsData.map((skill, index) => (
            <div key={index}>
              {skill.displayedSkills.slice(0,3).map((individualSkill, skillIndex) => (
                <Badge key={skillIndex} className="skill-badge">
                  {individualSkill}
                </Badge>
              ))}
            </div>
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
                  <div key={index}>
                  <AiOutlineFlag style={{fontSize:'22px'}}/>  {lang.displayedLanguages}
                  </div>
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
              <p><AiFillTwitterSquare style={{fontSize:'22px'}}/> Twitter</p>
              <p><AiFillLinkedin style={{fontSize:'22px'}}/> LinkedIn</p>
              <p><AiFillGithub style={{fontSize:'22px'}}/> Github</p>
            </div>
          {/* ))} */}
        </Card.Text>
      </Card.Body>
      
    </Card>
  )
}

export default SideBar