import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './Content.css'
import Rating from '../Rating'
import Cards from '../../pages/Service/Cards'

const Content = () => {
    const datacv =[
        {
            degree:'IT & Artificial intelligence',
            start_date:'22-03-2022',
            end_date:'12-04-2022',
            description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante',
            school:'UIR',
            city:'Rabat'

        },
        {
            degree:'IT  Managment',
            start_date:'22-03-2022',
            end_date:'12-04-2023',
            description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante',
            school:'Ensa',
            city:'Salé'
        },
        {
            degree:'IT  AWS Cloud computing degree',
            start_date:'22-03-2022',
            end_date:'12-04-2023',
            description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante',
            school:'Ensa',
            city:'Salé'
        }
    ];

    const expcv =[
        {
            JobTitle:'IT Business intelligence',
            start_date:'22-03-2022',
            end_date:'12-04-2022',
            description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante',
            Joblocation:'ISMAGI',
            city:'Rabat',
            technology:[
                'dotnet','javsacript','java '
            ]
        }, {
            JobTitle:'IT Business intelligence',
            start_date:'22-03-2022',
            end_date:'12-04-2022',
            description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante',
            Joblocation:'ISMAGI',
            city:'Rabat',
            technology:[
                'dotnet','wp',
            ]
        },
        
    ];
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
        
        {
            datacv.map((education,id)=>(
        <Row key={id}>
            <Col>
                <Row >
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
                </Row>
            </Col>
        </Row>
        ))}
        <br />
        
         <h3 className='title-cv'>Professional Experiences</h3>
         <Row className='card-flex'>
         {
            expcv.map((exp,id)=>
            (
            <Col key={id} className='model-exp'>
                <Card className='card-model-exp'>
                      <Card.Body>
                            <blockquote className="blockquote-exp mb-0">
                            <h3>{exp.JobTitle}</h3>
                        <Card.Title>
                            <p>{exp.start_date}</p> 
                            <span className='hr-model'>-</span>
                            <p>{exp.end_date}</p>
                        </Card.Title>
                            <p>
                                {' '}
                                {exp.description}
                                {' '}
                            </p>
                            <span className="blockquote-footer">
                                {exp.Joblocation} <cite title="Source Title">| {exp.city}</cite>
                            </span>
                            </blockquote>
                        </Card.Body>
                        
                        
                        <Card.Footer>
                            <span className='tag-content'>
                                
                                    {exp.technology.join(' / ')}
                                
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