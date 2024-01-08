import React, { useState } from 'react'
import Cards from './Cards'
import {Row, Pagination} from 'react-bootstrap'
import ServiceData from './ServiceData'
import './Service.css'
import HeadingStyle from '../../extensions/HeadingStyle'

const Service = () => {

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  const currentItem = ServiceData.slice(firstItem, lastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (

        <div>
          <Row className='justify-content-center'>
          <HeadingStyle title="Services" />
          </Row>
          <Row xl={'11'} className='m-5 w-100 d-flex px-4 m-5 '>
                    {
                        currentItem.map((card,id)=>(
                        <Cards key={id} title={card.title} desc={card.description} link="show more" image={card.image_url}/>
                    ))}
        </Row>
        {ServiceData.length > itemsPerPage && (
        <Pagination className="pagination-container">
          {Array.from({ length: Math.ceil(ServiceData.length / itemsPerPage) }).map((_, index) => (
            <Pagination.Item
              key={index}
              className={`pagination-btn ${index + 1 === currentPage ? 'active' : ''}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
        </div>

        

  )
}


export default Service