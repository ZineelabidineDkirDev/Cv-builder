import React from 'react'
import './Rating.css'
import { Form } from 'react-bootstrap';

const Rating = () => {
    
  return (
    
    <div className='containers'>
    <div className="container__items">
      {[5, 4, 3, 2, 1].map((rating) => (
        <Form.Check
          key={`st${rating}`}
          type="radio"
          name="stars"
          id={`st${rating}`}
          label={
            <React.Fragment>
              <div className="star-stroke">
                <div className="star-fill"></div>
              </div>
              <div className="label-description" data-content={getLabelContent(rating)}></div>
            </React.Fragment>
          }
        />
      ))}
    </div>
  </div>
   
  )
}
const getLabelContent = (rating) => {
    switch (rating) {
      case 5:
        return 'Excellent';
      case 4:
        return 'Good';
      case 3:
        return 'OK';
      case 2:
        return 'Bad';
      case 1:
        return 'Terrible';
      default:
        return '';
    }
  };

export default Rating