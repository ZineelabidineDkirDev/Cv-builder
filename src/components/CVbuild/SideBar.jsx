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
        
    const [referencesData, setReferencesData] = useState([]);
    const [languageData, setLanguageData] = useState([]);
    const [skillsData, setSkillsData] = useState([]);
    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
      const storeReferencesData = JSON.parse(localStorage.getItem("references_data")) || [];
       setReferencesData(storeReferencesData);
       console.log("references", storeReferencesData);
      const storeProfileData = JSON.parse(localStorage.getItem("profileData")) || [];
      setProfileData([storeProfileData]);
      console.log("Profile Data", storeProfileData);
      const storeSkillData = JSON.parse(localStorage.getItem("skills_data")) || [];
      setSkillsData([storeSkillData]);
      console.log("Skill Data", storeSkillData);
      const storeLanguageData = JSON.parse(localStorage.getItem("language_data")) || [];
     setLanguageData([storeLanguageData]);
     console.log("language", storeLanguageData);
    }, []);
  
    if (!Array.isArray(profileData)) {
      console.error("Profile Data:", profileData);
      return null; // or handle the error in some other way
    }

    
    if (!Array.isArray(skillsData)) {
      console.error("Skill Data:", skillsData);
      return null; // or handle the error in some other way
    }


   
   if (!Array.isArray(languageData)) {
     console.error("language:", languageData);
     return null; // or handle the error in some other way
   }
    //References 
    
    if (!Array.isArray(referencesData)) {
      console.error("References Data:", referencesData);
      return null; // or handle the error in some other way
    }
 
    
    
   return (
         <Card className="sidebar-card">
           
           
       <Card.Body  className='sidebar-body'>
         
         {profileData.map((profil) => {
           return <div className='profiledata'>
       <Image src={profil.imgProfile} alt="Profile" roundedCircle className="profile-image flex justify-content-center" />
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
         })}
         
           
         <div>
         <Card.Title>
           
           <p className='bg-light w-[100%] p-3 '><b>Skills</b></p>
         </Card.Title>
        
         <Card.Text className='sidebar-info'>
           {skillsData.length <= 2 && skillsData.map((skill) => {
             return <div>
               
               {skill.displayedSkills.map((individualSkill) => (
                 <Badge className="skill-badge">
                   {individualSkill}
                 </Badge>
               ))}
             </div>
           })}
         </Card.Text>
 
         </div>
 
 
         <Card.Title>
           <p className='bg-light w-[100%] p-3 '><b>Languages</b></p>
         </Card.Title>
         <Card.Text className='sidebar-info'>
             <div className="language">
               <div className="stars">
                 
               {languageData.map((language, index) => (
   <div key={index}>
     
     {language.displayedLanguages.map((lang)=>{
      return <div> <AiOutlineFlag style={{ fontSize: '22px' }} /> {lang}</div>
     })}
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
         
             
         {referencesData.map((refe)=>{  
          return <div className="links" >
              <p><AiFillTwitterSquare style={{fontSize:'22px'}}/> {refe.twitter}</p>
              <p><AiFillLinkedin style={{fontSize:'22px'}}/> {refe.linkedIn}</p>
              <p><AiFillGithub style={{fontSize:'22px'}}/> {refe.github}</p>
          </div>
          
         })
        }
             
         
         </Card.Text>
       </Card.Body>
       
     </Card>
   )
 
}

export default SideBar