import React, { useState } from 'react';
import cv from '../ExportData'
import { Row, Button, Col } from 'react-bootstrap';
import { AiOutlinePrinter } from 'react-icons/ai';
import './model.css';
import HeadingStyle from '../../extensions/HeadingStyle';
import html2pdf from 'html2pdf.js';

const ViewCv = () => {
  const [backgroundColor, setBackgroundColor] = useState(''); // Initial color
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handlePrint = () => {
    const cv = document.getElementById('cv-print');
    html2pdf().from(cv).save();
  };

  const palett = [
    {
      color: '#8747f6',
      nameColor: 'Red',
    },
    {
      color: '#fc8266',
      nameColor: 'Green',
    },
    {
      color: '#000000',
      nameColor: 'Black',
    },
    {
      color: '#6dbac0',
      nameColor: 'Blue',
    },
    {
      color: '#6b003a',
      nameColor: 'Blue',
    },
  ];

  const handleColorSwitch = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <div>
      <HeadingStyle title="View CV" />
      <Row>
        <h2 className="display-6 text-uppercase text-center">Choose Color of your CV</h2>
      </Row>
      <Row className="justify-content-center">
        <div
          className='d-flex justify-content-center'
        >
          {palett.map((color, id) => (
            <div key={id}>
              <button
              className='model-palett'
              style={{backgroundColor:color.color}}
                name=""
                onClick={(e) => handleColorSwitch(color.color)}
                value={color.color}
                id=""
              />
            </div>
          ))}
        </div>
      </Row>
      <Row>
        <Col></Col>
        <Col md={2}>
        <Button
          variant="outline-dark"
          type="button"
          onClick={handlePrint}
          className="btn btn-outline-dark border-dark rounded-5 d-flex
          justify-content-center"
          style={{
            marginTop: '20px',
            marginBottom: '55px',
            width:'250px',
            padding: '10px 30px',
            textTransform: 'uppercase',
          }}
        >
          <AiOutlinePrinter style={{ fontSize: '22px' }} /> &ensp;Print your Cv
        </Button>
        </Col>
        <Col></Col>
      </Row>
      <Row className="wrapper" id="cv-print">
        <cv.Content bgstyle={backgroundColor}/>
        <cv.SideBar bgstyle={backgroundColor}/>
      </Row>
    </div>
  );
};

export default ViewCv;
