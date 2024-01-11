import React, { useState } from 'react';
import cv from '../ExportData'
import { Row, Button } from 'react-bootstrap';
import { AiOutlinePrinter } from 'react-icons/ai';
import './model.css';
import HeadingStyle from '../../extensions/HeadingStyle';
import html2pdf from 'html2pdf.js';

const ViewCv = () => {
  const [backgroundColor, setBackgroundColor] = useState(''); // Initial color

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
      color: '#636c54',
      nameColor: 'Blue',
    },
  ];

  const handleColorSwitch = () => {
    const newColor = deriveColor(backgroundColor);
    setBackgroundColor(newColor);
  };

  const deriveColor = (baseColor) => {
    const currentIndex = palett.findIndex((color) => color.color === baseColor);
    return palett[(currentIndex+1) % palett.length].color;
  };

  return (
    <div>
      <HeadingStyle title="View CV" />
      <Row>
        <h2 className="display-6 text-uppercase text-center">Palette Color</h2>
      </Row>
      <Row className="justify-content-center">
        <div className='d-flex'
          style={{
            backgroundColor,
            padding: '20px',
            textAlign: 'center',
            width: '50px',
            marginTop: '10px',
            marginBottom: '130px',
            height: '30px',
          }}
        >
          <p>Background Color: {backgroundColor}</p>
          {palett.map((color, id) => (
            <div key={id}>
                <input type="color"  name="" onClick={handleColorSwitch} value={color.color} id="" />
            </div>
          ))}
        </div>
      </Row>
      <div>
        <Button
          variant="outline-dark"
          type="button"
          onClick={handlePrint}
          className="btn btn-outline-dark border-dark rounded-5 d-flex align-items-center justify-content-center"
          style={{
            marginTop: '20px',
            marginLeft: '45%',
            marginBottom: '55px',
            padding: '10px 30px',
            textTransform: 'uppercase',
          }}
        >
          <AiOutlinePrinter style={{ fontSize: '22px' }} /> &ensp;Print your Cv
        </Button>
      </div>
      <Row className="wrapper" id="cv-print">
        <cv.Content />
        <cv.SideBar bgstyle={backgroundColor}/>
      </Row>
    </div>
  );
};

export default ViewCv;
