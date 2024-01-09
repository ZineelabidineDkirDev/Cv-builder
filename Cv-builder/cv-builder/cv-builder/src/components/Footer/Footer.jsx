import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className='text-center text-white' style={{ backgroundColor: '#f9f9f9',color:'#333' }}>
      <Container className='p-4'></Container>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',color:'#333' }}>
        © 2024 Copyright:
        <a className='text-dark' href='#'>
           &ensp;Repo.CVbuild
        </a>
      </div>
    </div>
  );
}