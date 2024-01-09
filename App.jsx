import React from 'react'
import cv from './components/ExportData'
import { Routes,Route } from 'react-router-dom'
import {Row, Container} from 'react-bootstrap'


function App() {
  

  return (
    <>
      <Row>
        <cv.CvNavbar />
      </Row>

     <Routes>
        <Route path="/" element={<cv.Home/>}/>
        <Route path="/service" element={<cv.Service/>}/>
        {/* <Route path="/template" element={<cv.Template/>}/> */}
        <Route path="/contact" element={<cv.Contact/>}/>
        <Route path="/builder" element={<cv.Builder/>}/>
        <Route path="/builder#educations" element={<cv.Educations/>}/>
        <Route path="/builder" element={<cv.Builder/>}/>
        <Route path="/builder" element={<cv.Builder/>}/>
     </Routes>
   
     <cv.Footer/>
    </>
    )
}

export default App
