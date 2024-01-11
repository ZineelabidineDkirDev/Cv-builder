import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AiFillExperiment, AiOutlineUser, AiTwotoneProject, AiFillSketchCircle } from 'react-icons/ai'
import './model.css';

const Content = () => {
  // Experiences
  const [expData, setExperienceData] = useState([]);
  useEffect(() => {
    const storeExpData = JSON.parse(localStorage.getItem("experienceData")) || [];
    setExperienceData(storeExpData);
    console.log("Experience Data", storeExpData);
  }, []);

  if (!Array.isArray(expData)) {
    console.error("Experience data is not an array:", expData);
    return null;
  }

  // Profiles
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    const storeProfileData = JSON.parse(localStorage.getItem("profileData")) || [];
    setProfileData(storeProfileData);
    console.log("Profile Data", storeProfileData);
  }, []);

  

 // Education Data
  const [educateData, setEducationData] = useState([]);
  useEffect(() => {
    const storeEducationData = JSON.parse(localStorage.getItem("educationData")) || [];
    setEducationData(storeEducationData);
    console.log("Education Data", storeEducationData);
  }, []);

  if (!Array.isArray(educateData)) {
    console.error("Education Data:", educateData);
    return null;
  }

  return (
    // <Container fluid="lg" className="justify-content-md-center model-content">
    //   <Row>
    //     <h1>Developpeur full Stack</h1>
    //     <Col>
    //       <h3 className='title-cv'>Profils</h3>
    //         <Row style={{ marginLeft: '10px', flexWrap: 'wrap' }}>
    //           <p>
    //             {profileData.description}
    //           </p>
    //         </Row>
    //     </Col>
    //   </Row>

    //   <h3 className='title-cv '>Educations & degrees</h3>

    //   <Row>
    //         <Col>
    //             {educateData.length<=2 && educateData.map((education) => (
    //             <Row >
    //                 <Col className='card-model-content'>
    //                 <p style={{fontSize:"12px"}}>{education.Startdate}</p>
    //                 <span className='hr-model'></span>
    //                 <p style={{fontSize:"12px"}}>{education.Enddate}</p>
    //                 </Col>
    //                 <Col className='card-model'>
    //                 <Card>
    //                     <Card.Body>
    //                     <div className="blockquote mb-0">
    //                         <h3 className='h5'>{education.Degree}</h3>
    //                         <p className='small'>
    //                         {' '}
    //                         {education.Description}
    //                         {' '}
    //                         </p>
    //                         <span className="blockquote-footer">
    //                         {education.Etablissement} <cite style={{fontSize:"12px"}} title="Source Title">| {education.City}</cite>
    //                         </span>
    //                     </div>
    //                     </Card.Body>
    //                 </Card>
    //                 </Col>
    //             </Row>
    //             ))}
    //         </Col>
    //         </Row>

    //   <br />

    //   <h3 className='title-cv'>Professional Experiences</h3>
    //   <Row className='card-flex'>
    //     {expData.map((exp) => (
    //       <Col  className='model-exp'>
    //         <Card className='card-model-exp'>
    //           <Card.Body>
    //             <blockquote className="blockquote-exp mb-0">
    //               <h3>{exp.jobTitle}</h3>
    //               <Card.Title>
    //                 <p>{exp.startDate}</p>
    //                 <span className='hr-model'>-</span>
    //                 <p>{exp.endDate}</p>
    //               </Card.Title>
    //               <p>
    //                 {' '}
    //                 {exp.description}
    //                 {' '}
    //               </p>
    //               <br></br>
    //               <span className="blockquote-footer">
    //                 {exp.companyName} <cite title="Source Title">| {exp.city}</cite>
    //               </span>
    //             </blockquote>
    //           </Card.Body>

    //           <Card.Footer>
    //             <span className='tag-content'>
    //               {exp.toolsTechnologies.join(' / ')}
    //             </span>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
    <Col className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title "><span className="icon-holder"><AiOutlineUser /></span>Career Profile</h2>
                <div className="summary">
                    <p>{profileData.description?profileData.description:'-- Nothing to show'}</p>
                </div>
            </section>
            <br />
            
            <Row className="section experiences-section">
                <h2 className="section-title"><span className="icon-holder"><AiFillExperiment/> </span>Experiences</h2>
                {expData?expData.map((exp,id) => (
                <div className="item" key={id}>
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">{exp.jobTitle}</h3>
                            <div className="time"> - Present</div>
                        </div>
                        <div className="company">Startup Hubs, San Francisco</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                           Aenean commodo ligula eget dolor. Aenean massa. 
                           Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                           </p>  
                    </div>
                </div>
                )):"Nothing to show"}
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Senior Software Engineer</h3>
                            <div className="time">2018 - 2022</div>
                        </div>
                        <div className="company">Google, London</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                          Aenean commodo ligula eget dolor. Aenean massa. 
                          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>  
                        
                    </div>
                </div>
                
            </Row>
            
            <Row className="section projects-section">
                <h2 className="section-title"><span className="icon-holder"><AiTwotoneProject/> </span>Projects</h2>
               
                <div className="item">
                    <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/" target="_blank">CoderPro</a></span> - <span className="project-tagline">A responsive website template designed to help developers launch their software projects. </span>
                    
                </div>
                <div className="item">
                    <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-5-template-for-saas-businesses/" target="_blank">Launch</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services.</span>
                </div>
              
            </Row>
            
            <section className="skills-section section">
                <h2 className="section-title"><span className="icon-holder"><AiFillSketchCircle/></span>Skills &amp; Proficiency</h2>
                <Row className="skillset">        
                    <Col className="item">
                        <p className="level-title"><b>Python &amp; Django</b></p>
                                                    
                        <p className="level-title"><b>Javascript</b></p>
                   
                        <p className="level-title"><b>React &amp; Angular</b></p>
                        <p className="level-title"><b>React &amp; Angular</b></p>
                        <p className="level-title"><b>React &amp; Angular</b></p>
                        <p className="level-title"><b>React &amp; Angular</b></p>
                                                   
                    </Col>
                </Row>  
            </section>
            
        </Col>
  );
}

export default Content;
