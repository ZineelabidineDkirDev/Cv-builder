import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Content = () => {
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
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.{' '}
                            </p>
                            <span className="blockquote-footer">
                                ISMAGI <cite title="Source Title">Rabat</cite>
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