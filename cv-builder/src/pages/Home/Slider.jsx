import React from 'react'

const Slider = ({text,imageUrl}) => {

  return (
  
      <div>
        <img src={imageUrl} alt={`Carousel Image for ${text}`} style={{ width: '100%', height: '550px' , backgroundPosition: 'cover'}} />
  
        <h3 style={{ textAlign: 'left', fontWeight: 'bold', position: 'relative',display: 'none' }}>{text}</h3>
      </div>
    );
}

export default Slider