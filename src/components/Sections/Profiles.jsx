
import React, { useState, useEffect } from 'react'
import {Button, Form, Row,Col,Container} from 'react-bootstrap'
import ProfileImageUpload from './ProfileImageUploader';
import Educations from './Educations';
const filee = '../../data/ProfilsData.json';
import cityData from '../../CityLoader/CityData.json';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineCompass, AiOutlineDown, AiOutlineEnvironment, AiOutlineFlag, AiOutlineHome, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';


const Profiles = () => {
  const [validation,setValidation] = useState({
    nom:'The lastName field is required',
    prenom:'The firstName field is required',
    email:'The Email field is required',
    phone:'The Phone field is required',
    adress:'The Address field is required',
    country:'The Country field is required',
    city:'The City field is required',
    codePostall:'The postal Code field is required',
    imgProfile : 'The image is required',
    daten : 'The Birthday is required',
    description: 'The description of profil is required'
  })

  // const [src, setSrc] = useState('');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    phone: '',
    adress: '',
    country: '',
    city: '',
    codePostall: '',
    imgProfile: '',
    description:'',
    daten:''
  });

  
  function handleChange(e) {
    const { name, value } = e.target;
    let errorMessage="";
    if(name==="nom"){
      errorMessage= value.length<5? 'the name modt containe more than five charcters':'';
    }
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    if(validation.nom ==='' && validation.prenom ==='' && validation.email ==='' && validation.phone===''
    && validation.codePostall==='' && validation.adress==='' && validation.country ==='' && validation.daten===''
    && validation.description ==='' && validation.imgProfile ==='')
    {
      let modelValidate = setValidation(validation)
    }
  };

  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      imgProfile: file,
    }));
  };



  useEffect(() => {
    const jsonData = JSON.stringify(formData);
    localStorage.setItem('profileData', jsonData);
  }, [formData]);


  // save data inside json file using fs node js module
  // useEffect(() => {
  // }, [src]);
  // const clickme = () => {
  //   const storedValue = JSON.parse(localStorage.getItem('profileData'));
  //   if (storedValue && storedValue.imgProfile) {
  //     setSrc(storedValue.imgProfile);
  //   }
  // };

  return (

    <Form className="row g-3 ">

      <Container fluid className="col-lg-12">
        <Row className="row d-flex align-items-center justify-content-center">
          <Col className="col-4 d-flex align-items-center justify-content-center mb-3 mt-4">
            <ProfileImageUpload onFileChange={handleFileChange} />
          </Col>
          </Row> 
       
        
            <Row className="row py-4">
              <Col className="col-6">
              <AiOutlineUser  style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  /> 
                <input type="text" className="form-control" style={{paddingLeft:'2.5rem'}}  id="nom" name="nom" value={formData.nom}
                  onChange={handleChange} placeholder='First Name' />
              </Col>
              <Col className="col-6">
              <AiOutlineUser  style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  /> 
                <input type="text" className="form-control" style={{paddingLeft:'2.5rem'}} id="prenom" name='prenom'
                 value={formData.prenom} onChange={handleChange} placeholder='Last Name'  />
              </Col>
            </Row>

            <Row className="row py-4">
              <Col className="col-lg-6">
              <AiOutlineMail  style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  /> 
                <input type="email" className="form-control" style={{paddingLeft:'2.5rem'}} id="email" name='email' value={formData.email}
                 onChange={handleChange} placeholder='Mail'/>
              </Col>
              <Col className="col-lg-6">
              <AiOutlinePhone style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  /> 
                <input type="number" className="form-control" style={{paddingLeft:'2.5rem'}} id="phone" name='phone'
                 value={formData.phone} onChange={handleChange} placeholder='Phone number' />
              </Col>
            </Row>            
            
          
      <Row className="row">
        <Col className="col-lg-6">
            <label htmlFor="daten" className="form-label"></label>
            <input type="date" className="form-control" id="daten" name='daten' value={formData.daten} onChange={handleChange} />
        </Col>
        <Col className="col-lg-3">
        <AiOutlineFlag style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  /> 
          <input type="text" className="form-control" style={{paddingLeft:'2.5rem'}} id="inputEmail4" name='country' value={formData.country} 
          onChange={handleChange} placeholder='Country'/>
        </Col>
        <Col className="col-lg-3">
            <Form.Group className="mb-3" >
              <AiOutlineEnvironment style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  /> 
              <Form.Select
                
                onChange={handleChange}
                style={{paddingLeft:'2.5rem'}}
              >
                <option value={formData.city}>Select City...</option>
                {cityData.map(city => (
                <option key={city.id} value={city.ville}>
                    {city.ville}
                </option>
                ))}
              </Form.Select>
            </Form.Group>

        </Col>
        
      </Row>
     
     <Row className="row py-4">
     <Col className="col-md-8">
     <AiOutlineHome style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  />
        <input type="text" className="form-control" style={{paddingLeft:'2.5rem'}} id="adress" name='adress' 
        value={formData.adress} onChange={handleChange} placeholder='Address'/>
      </Col>
    
      <Col className="col-md-4">
        <AiOutlineDown style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  />
        <input type="text" className="form-control" style={{paddingLeft:'2.5rem'}} id="zip" name='codePostall' value={formData.codePostall} 
        onChange={handleChange} placeholder='PostCode'/>
      </Col>
      </Row>
                  
      <Row className='row mb-4'>
      <Col className="col-md-12 mb-4">
        <textarea className="form-control" id="description" name='description' value={formData.description}
         onChange={handleChange} placeholder='Description of your profil -- Max 200 words ' rows={5}></textarea>
      </Col>
      </Row>
      </Container>

      
      

    </Form>
  )
  
    
};


export default Profiles