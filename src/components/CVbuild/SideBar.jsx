import React,{useState,useEffect} from 'react'
import {Card,Image,Badge,Row,Col} from 'react-bootstrap'
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter} from 'react-icons/ai'
import './model.css';
import Language from '../Sections/Language';
const SideBar = (props) => {
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
        
  //   const [referencesData, setReferencesData] = useState([]);
  //   const [languageData, setLanguageData] = useState([]);
  //   const [skillsData, setSkillsData] = useState([]);
  //   const [profileData, setProfileData] = useState([]);

  //   useEffect(() => {
  //     const storeReferencesData = JSON.parse(localStorage.getItem("references_data")) || [];
  //      setReferencesData(storeReferencesData);
  //      console.log("references", storeReferencesData);
  //     const storeProfileData = JSON.parse(localStorage.getItem("profileData")) || [];
  //     setProfileData([storeProfileData]);
  //     console.log("Profile Data", storeProfileData);
  //     const storeSkillData = JSON.parse(localStorage.getItem("skills_data")) || [];
  //     setSkillsData([storeSkillData]);
  //     console.log("Skill Data", storeSkillData);
  //     const storeLanguageData = JSON.parse(localStorage.getItem("language_data")) || [];
  //    setLanguageData([storeLanguageData]);
  //    console.log("language", storeLanguageData);
  //   }, []);
  
  //   if (!Array.isArray(profileData)) {
  //     console.error("Profile Data:", profileData);
  //     return null; // or handle the error in some other way
  //   }

    
  //   if (!Array.isArray(skillsData)) {
  //     console.error("Skill Data:", skillsData);
  //     return null; // or handle the error in some other way
  //   }


   
  //  if (!Array.isArray(languageData)) {
  //    console.error("language:", languageData);
  //    return null; // or handle the error in some other way
  //  }
  //   //References 
    
  //   if (!Array.isArray(referencesData)) {
  //     console.error("References Data:", referencesData);
  //     return null; // or handle the error in some other way
  //   }
 // Profiles
    const [profileData, setProfileData] = useState([]);
    useEffect(() => {
    const storeProfileData = JSON.parse(localStorage.getItem("profileData")) || [];
    setProfileData(storeProfileData);
    console.log("Profile Data", storeProfileData);
    }, []);
    
    
   return (
    //      <Card className="sidebar-card">
           
           
    //    <Card.Body  className='sidebar-body'>
         
    //      {profileData.map((profil) => {
    //        return <div className='profiledata'>
    //    <Image src={profil.imgProfile} alt="Profile" roundedCircle className="profile-image flex justify-content-center" />
    //      <Card.Title>
    //        <h3 className='text-center'>{profil.nom} <br /><b>{profil.prenom}</b></h3>
    //        <br></br>
    //        <p className='bg-light w-[100%] p-3 '><b>Contact Information</b></p>
    //      </Card.Title>
    //      <Card.Text className='sidebar-info'>
    //        <p><AiOutlineMail style={{fontSize:'22px'}}/> {profil.email}</p>
    //        <p><AiOutlinePhone style={{fontSize:'22px'}}/> {profil.phone}</p>
    //        <p><AiOutlineHome style={{fontSize:'22px'}}/>  {profil.adress} {profil.codePostall},{profil.city}</p>
    //        <p><AiOutlineCarryOut style={{fontSize:'22px'}}/>  {profil.daten}</p>
    //      </Card.Text>
    //      </div>
    //      })}
         
           
    //      <div>
    //      <Card.Title>
           
    //        <p className='bg-light w-[100%] p-3 '><b>Skills</b></p>
    //      </Card.Title>
        
    //      <Card.Text className='sidebar-info'>
    //        {skillsData.map((skill) => {
    //          return <div>
               
    //            {skill.length > 0 ? skill.displayedSkills.map((individualSkill) => (
    //              <Badge className="skill-badge">
    //                {individualSkill}
    //              </Badge>
    //           )):"Skils Not found"}
    //          </div>
    //            })}
    //      </Card.Text>
 
    //      </div>
 
 
    //      <Card.Title>
    //        <p className='bg-light w-[100%] p-3 '><b>Languages</b></p>
    //      </Card.Title>
    //      <Card.Text className='sidebar-info'>
    //          <div className="language">
    //            <div className="stars">
                 
    //            {languageData.map((language, index) => {
    //            return <div key={index}>
              
    //           {language.length > 0 ? language.displayedLanguages.map((lang,id)=>(
    //              <div key={id}> <AiOutlineFlag style={{ fontSize: '22px' }} /> {lang}</div>
    //           )):"Language Not found"}
    //         </div>
    //         })}
    //            </div>
    //          </div>
    //        {/* ))} */}
    //      </Card.Text>
    //      <Card.Title>
           
    //        <p className='bg-light w-[100%] p-3 '><b>Social Link</b></p>
    //      </Card.Title>
    //      <Card.Text className='sidebar-info'>
         
             
         
    //      <div className="links" >
    //         {referencesData.map((refe,id)=>(
    //           <div key={id}>
    //           <p><AiFillTwitterSquare style={{fontSize:'22px'}}/> {refe.twitter}</p>
    //           <p><AiFillLinkedin style={{fontSize:'22px'}}/> {refe.linkedIn}</p>
    //           <p><AiFillGithub style={{fontSize:'22px'}}/> {refe.github}</p>
    //           </div>
    //           ))}
    //       </div>
          
         
             
         
    //      </Card.Text>
    //    </Card.Body>
       
    //  </Card>
    <Col className="sidebar-wrapper" style={{background:props.bgstyle}}>

            <Row className="profile-container">
               
                <img className="profile-img" src={profileData.imgProfile} alt="" />
                <h1 className="name">{profileData.nom} {profileData.prenom}</h1>
                <h3 className="tagline">Full Stack Developer</h3>
                
            </Row>

            <Row className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><AiOutlineMail/> <a href="mailto: yourname@email.com">alan@website.com</a></li>
                    <li className="phone"><AiOutlinePhone/> <a href="tel:0123 456 789">0123 456 789</a></li>
                    <li className="linkedin"><AiOutlineLinkedin/> <a href="#" target="_blank">/in/alandoe</a></li>
                    <li className="github"><AiOutlineGithub/> <a href="#" target="_blank">git/username</a></li>
                    <li className="twitter"><AiOutlineTwitter/> <a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>
                </ul>
            </Row>
            <Row className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                <div className="item">
                    <h4 className="degree">MSc in Computer Science</h4>
                    <h5 className="meta">University of London</h5>
	                    <div className="time">2016 - 2018</div>
                </div>
                <div className="item">
                    <h4 className="degree">BSc in Applied Mathematics</h4>
                    <h5 className="meta">Bristol University</h5>
                    <div className="time">2012 - 2016</div>
                </div>
            </Row>
            
            <Row className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    <li>English <span className="lang-desc">(Native)</span></li>
                    <li>French <span className="lang-desc">(Professional)</span></li>
                    <li>Spanish <span className="lang-desc">(Professional)</span></li>
                </ul>
            </Row>
            
            <Row className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    <li>Climbing</li>
                    <li>Snowboarding</li>
                    <li>Cooking</li>
                </ul>
            </Row>
            
        </Col>
    
   )
 
}

export default SideBar