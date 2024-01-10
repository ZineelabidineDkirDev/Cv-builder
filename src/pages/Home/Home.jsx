import React from 'react';
import { Carousel, Nav, Button, Row } from 'react-bootstrap';
import Slider from './Slider';
import Cards from '../Service/Cards';
import dataService from '../Service/ServiceData';
import Service from '../Service/Service';
import ImageB from '../../assets/b.png'
import ImageA from '../../assets/io.png'
import './Home.css';

const Home = () => {
  const imageSlider1 = 'https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=sph';
  const imageSlider2 = 'https://img.freepik.com/premium-photo/blurred-abstract-gradient-background-with-noise-textur_391867-3.jpg';
  const imageSlider3 = 'https://img.freepik.com/premium-photo/blue-background-with-purple-background-purple-background-with-white-circle-word-cloud_786688-5322.jpg';

  return (
    <div className=''>

      <Carousel className='overflow-hidden'>
        <Carousel.Item>
          <Slider text="First slide" imageUrl={imageSlider1} />
          <Carousel.Caption style={{ top: '200px', textAlign: 'left',color:'#333' }}>
            <h1 className='display-4'>Cv for job </h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <br />
            <button className="btn-model btn-outline-dark border-dark rounded-5 px-4 py-2">
              <Nav.Link  href="/builder">Builder your Cv for free</Nav.Link>
            </button>
            <Row className='d-flex p-4' style={{marginLeft:'50%',marginTop:'-300px'}}>
                <img src={ImageB} alt='' className='object-contain-cover' style={{minWidth:'700px',minHeight:'400px'}} />
            </Row>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Slider text="First slide" imageUrl={imageSlider2} />
          <Carousel.Caption style={{ top: '200px', textAlign: 'left',color:'#333' }}>
            <h1 className='display-4'>Cv Builder Free </h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <br />
            <button className="btn-model btn-outline-dark border-dark rounded-5 px-4 py-2">
              <Nav.Link  href="/builder">Builder your Cv for free</Nav.Link>
            </button>
            <Row className='d-flex p-4' style={{marginLeft:'50%',marginTop:'-300px'}}>
                <img src={ImageA} alt='' className='object-contain-cover' style={{minWidth:'700px',minHeight:'400px'}} />
            </Row>


          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      <Service />

      {/* Scrolling text */}
      <div className="scrolling-text">
        <p>Scrolling text goes here. Customize as needed.</p>
      </div>
    </div>
  );
}

export default Home;
