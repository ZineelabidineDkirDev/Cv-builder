import React from 'react'
import Cards from './Cards'
import {Row} from 'react-bootstrap'
import ServiceData from './ServiceData'


const Service = () => {
  return (

      <Row xl={'11'} className='m-5 w-100 d-flex'>
                    {
                        ServiceData.map((card,id)=>(
                        <Cards key={id} title={card.title} desc={card.desc} link={card.link} image={card.image}/>
                    ))}
      </Row>

  )
}

export default Service