import React from 'react'
import {Carousel, Nav, Button, Row, Form} from 'react-bootstrap';
import Slider from './Slider';
import Cards from '../Service/Cards';
import dataService from '../Service/ServiceData'
import Content from '../../components/CVbuild/Content';
import CityLoader from '../../components/CityLoader/CityLoader';
import cityData from '../../components/CityLoader/CityData.json';

const Home = () => {
    const imageSlider1 = 'https://img.freepik.com/premium-photo/soft-colorful-blurred-satin-pattern-vibrant-web-design-graphic-illustration_336343-431.jpg';
    const imageSlider2 = 'https://www.creativefabrica.com/wp-content/uploads/2020/02/13/Purple-Abstract-Webpage-Background-Graphics-1.jpg';
    const imageSlider3 = 'https://img.freepik.com/premium-photo/blue-background-with-purple-background-purple-background-with-white-circle-word-cloud_786688-5322.jpg';

    // const dataService = [...ServiceData];
  return (
    <>

            <Carousel className='overflow-hidden'>
                <Carousel.Item>
                    <Slider text="First slide" imageUrl={imageSlider1} />
                    <Carousel.Caption style={{top:'200px',textAlign: 'left'}}>
                    <h1>Cv for job </h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="outline-light" className='border border-light-subtle rounded-5 px-4 py-2'>
                        <Nav.Link href="/builder">Builder your Cv for free</Nav.Link>
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Slider text="Second slide" imageUrl={imageSlider2}/>
                    <Carousel.Caption style={{top:'200px',textAlign: 'left'}}>
                    <h1>Cv Builder </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button variant="outline-light" className='border border-light-subtle rounded-5 px-4 py-2'>
                        <Nav.Link href="/builder">Builder your Cv for free</Nav.Link>
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Slider text="Third slide" imageUrl={imageSlider3}/>
                    <Carousel.Caption style={{top:'200px',textAlign: 'left'}}>
                    <h1>Contactez Nous </h1>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <Button variant="outline-light" className='border border-light-subtle rounded-5 px-4 py-2'>
                        <Nav.Link href="/contact">Contact us</Nav.Link>
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

                <Row xl={'11'} className='m-5 w-100 d-flex'>
                    {
                        dataService.map((card,id)=>(
                        <Cards key={id} title={card.title} desc={card.desc} link={card.link} image={card.image}/>
                    ))}
                </Row>

                <Row>
                    <Content />
                    <Form.Select aria-label="Default select example">
                    {cityData.map((city,id) => (
                        <option key={id}>{city.ville}</option>
                    ))}
                    </Form.Select>
                </Row>

    </>
  )
}

export default Home