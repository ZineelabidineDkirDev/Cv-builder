import React,{useState,useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './Content.css'
import Rating from '../Rating'
import Cards from '../../pages/Service/Cards'

const Content = () => {

    //Experiences 

    const [expData, setExperienceData] = useState([]);

    useEffect(() => {
      const storeExpData = JSON.parse(localStorage.getItem("experienceData")) || [];
      setExperienceData([storeExpData]);
      console.log("Experience Data", storeExpData);
    }, []);
  
    // Check if profileData is an array before using map
    if (!Array.isArray(expData)) {
      console.error("Experience data is not an array:", expData);
      return null; 
    }

    console.log(expData[0]);
    
  
  return (
    <Container fluid="lg" className="justify-content-md-center model-content">
        <Row>
        <h1>Developpeur full Stack</h1>
        <Col>
        <h3 className='title-cv'>Profils</h3>
        <div>
            <p style={{marginLeft:'10px;flex-wrap:wrap'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante</p>
        </div>
   
        </Col>

        </Row>
            <h3 className='title-cv '>Educations & degrees</h3>
        
        
        <Row>
            <Col>
                {/* <Row >
                    <Col className='card-model-content' >

                       <p>{education.start_date}</p> 
                       <span className='hr-model'></span>
                       <p>{education.end_date}</p>
                       
                    </Col>
                    <Col  className='card-model'>
                      <Card>
                        
                        <Card.Body>
                            <div className="blockquote mb-0">
                            <h3 className='h5'>{education.degree}</h3>
                            <p className='small'>
                                {' '}
                                {education.description}
                                {' '}
                            </p>
                            <span className="blockquote-footer">
                                {education.school} <cite title="Source Title">| {education.city}</cite>
                            </span>
                            </div>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
            </Col>
        </Row>
      
        <br />
        
         <h3 className='title-cv'>Professional Experiences</h3>
         <Row className='card-flex'>
       {expData[0].map((exp,id)=>(
           
            <Col key={id} className='model-exp'>
                <Card className='card-model-exp'>
                      <Card.Body>
                            <blockquote className="blockquote-exp mb-0">
                            <h3>{exp.JobTitle}</h3>
                        <Card.Title>
                            <p>{exp.startDate}</p> 
                            <span className='hr-model'>-</span>
                            <p>{exp.endDate}</p>
                        </Card.Title>
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                                {' '}
                            </p>
                            <span className="blockquote-footer">
                                {exp.companyName} <cite title="Source Title">| {exp.address}</cite>
                            </span>
                            </blockquote>
                        </Card.Body>
                        
                        
                        <Card.Footer>
                            <span className='tag-content'>
                                
                                
                            </span>
                        </Card.Footer>
                </Card>   
            </Col>
        ))}
        </Row>
    </Container>
  )
}

export default Content