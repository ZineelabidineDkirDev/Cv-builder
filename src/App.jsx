import React from 'react'
import cv from './components/ExportData'
import { Routes,Route } from 'react-router-dom'
import {Row, Container} from 'react-bootstrap'
<<<<<<< HEAD


function App() {
  

=======
import Routa from './Routa'

function App() {
const islogin=false
>>>>>>> 33fa63cd1b5979dea20ec8dbbd55c3b5cb7b9ef2
  return (
    <div className='background-overlay-style'>
      <Row>
        <cv.CvNavbar />
      </Row>

     <Routes>
        <Route path="/" element={<cv.Home/>}/>
        <Route path="/service" element={<cv.Service/>}/>
        {/* <Route path="/template" element={<cv.Template/>}/> */}
        <Route path="/contact" element={<cv.Contact/>}/>
<<<<<<< HEAD
        <Route path="/builder" element={<cv.Builder/>}/>
        <Route path="/builder#educations" element={<cv.Educations/>}/>
        <Route path="/builder" element={<cv.Builder/>}/>
        <Route path="/builder" element={<cv.Builder/>}/>
=======
        <Route path="/login" element={<cv.Login />} />
          <Route element={<Routa/>}>
          <Route path="/builder" element={<cv.Builder/>} />
        </Route>
        <Route path="/signup" element={<cv.Signup/>}/>
        <Route path="/builder#educations" element={<cv.Educations/>}/>
>>>>>>> 33fa63cd1b5979dea20ec8dbbd55c3b5cb7b9ef2
     </Routes>
   
     <cv.Footer/>
    </div>
    )
}

export default App
