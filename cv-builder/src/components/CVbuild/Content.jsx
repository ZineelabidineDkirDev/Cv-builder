import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Content = () => {
    const datacv =[
        {
            degree:'IT Business intelligence',
            start_date:'22-03-2022'
        }
    ];
  return (
    <Container fluid="md" className="justify-content-md-center">
        <Row>
            <Col>
                <Row>
                    <Col>
                       <p>22-02-2022</p> 
                    </Col>
                    <Col>
                      <Card>
                        <Card.Header>Eduction & Formation</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <h3>Degree School - IT</h3>
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.
                                {' '}
                            </p>
                            <span className="blockquote-footer">
                                ISMAGI <cite title="Source Title">| City</cite>
                            </span>
                            </blockquote>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Content