import React from 'react'
import {Card,Image,Badge} from 'react-bootstrap'
import { AiFillHome, AiFillMail,AiFillPhone } from 'react-icons/ai'
const SideBar = () => {
    const profil = "https://viberatecdn.blob.core.windows.net/entity/artist/moha-k-WinxY"
    const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'];
    const languages = [
        { name: 'English', level: 5 }, 
        { name: 'Spanish', level: 3 },
      ];
    const socialink = [
        'fb.com','github.com','behance.com'
    ]

  return (
        <Card className="sidebar-card">
      <Card.Body className='sidebar-body'>
      <Image src={profil} alt="Profile" roundedCircle className="profile-image" />
        <Card.Title>
          <h3 className='text-center'>Mohammed <br /><b>AIT ELKAID</b></h3>
          <br></br>
          <p className='bg-light w-[100%] p-3 '><b>Contact Information</b></p>
        </Card.Title>
        <Card.Text className='sidebar-info'>
          <p><AiFillMail/> moha.k@example.com</p>
          <p><AiFillPhone/> (212) 646-710890</p>
          <p><AiFillHome/>  Rabat,10020 Morocco</p>
        </Card.Text>
        <Card.Title>
          <p className='bg-light w-[100%] p-3 '><b>Skills</b></p>
        </Card.Title>
        <Card.Text className='sidebar-info'>
        {skills.map((skill, index) => (
            <Badge key={index} className="skill-badge">
              {skill}
            </Badge>
          ))}
        </Card.Text>
        <Card.Title>
          <p className='bg-light w-[100%] p-3 '><b>Languages</b></p>
        </Card.Title>
        <Card.Text className='sidebar-info'>
        {languages.map((language, index) => (
            <div key={index} className="language">
              <span><b>{language.name}</b></span>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`star ${i < language.level ? 'filled' : ''}`}></span>
                ))}
              </div>
            </div>
          ))}
        </Card.Text>
        <Card.Title>
          <p className='bg-light w-[100%] p-3 '><b>Social Link</b></p>
        </Card.Title>
        <Card.Text className='sidebar-info'>
        {socialink.map((sl, index) => (
            <div key={index} className="links">
              <span><b>{sl}</b></span>
            </div>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SideBar