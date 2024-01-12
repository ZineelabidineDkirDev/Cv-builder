import React from 'react'
import { Container, Row, Col, Button , Card,Image} from 'react-bootstrap';
import HeadingStyle from '../../extensions/HeadingStyle';
import { FaBehance, FaCloudDownloadAlt, FaFacebook, FaFacebookF, FaGithub, FaGithubAlt, FaTwitch } from "react-icons/fa";
import './Template.css';

const Template = () => {
    return (
        // <Container fluid >
        //     <HeadingStyle title="Template"/>
          
        //     {/* <Col md={4} className="sidebar-temp p-3">
        //       <Image src="https://via.placeholder.com/150" roundedCircle />
        //       <h1>Felecia Brown</h1>
        //       <h2>Creative Director</h2>
        //       <hr />
        //       <p><strong>Born:</strong> March 3, 1986</p>
        //       <p><strong>Location:</strong> Beijing, China</p>
        //       <p><strong>Email:</strong> support@email.com</p>
        //       <p><strong>Phone:</strong> +1 (101) 8183-4957</p>
        //       <hr />
        //       <Button variant="primary" size="lg" block>Download CV</Button>
        //     </Col>
        //     <Col md={8} className="main-content p-3">
        //       <h1>About Me</h1>
        //       <p>I'm Creative Director and UX/UI Designer from Sydney Australia - working in web development and print media. I enjoy turning complex problems into simple beautiful and intuitive designs. My job is to build your website so that it is functional an user-friendly but at he same time attractive. Moreover i add personal touch to your product an make sure that is eye-catching an easy to use. My aim is to bring across your message an identity in he most creative way.I worked with big company names tested my skills.</p>
        //       <hr />
        //       <h1>What I'm Doing</h1>
        //       <Row>
        //         <Col md={3}>
        //           <Image src="https://via.placeholder.com/100" roundedCircle />
        //           <h2>Web Design</h2>
        //         </Col>
        //         <Col md={3}>
        //           <Image src="https://via.placeholder.com/100" roundedCircle />
        //           <h2>Web Development</h2>
        //         </Col>
        //         <Col md={3}>
        //           <Image src="https://via.placeholder.com/100" roundedCircle />
        //           <h2>Mobile Apps</h2>
        //         </Col>
        //         <Col md={3}>
        //           <Image src="https://via.placeholder.com/100" roundedCircle />
        //           <h2>Photography</h2>
        //         </Col>
        //       </Row>
        //       <hr />
        //       <h1>Testimonials</h1>
        //       <p>"Thanks to this skill of Felicia we have a dynamic staff who can be proud of." - Jessica Miller</p>
        //       <p>"Felicia creates fresh creative concepts ideas very open creativity with extra sense." - Tanya Ruiz</p>
        //       <hr />
        //       <h1>Clients</h1>
        //       <Row>
        //         <Col md={3}>
        //           <Image src="https://via.placeholder.com/100" />
        //         </Col>
        //         <Col md={3}>
        //           <Image src="https://via.placeholder.com/100" />
        //         </Col>
        //         <Col md={3}>
        //           <Image src="https://via.placeholder.com/100" />
        //         </Col>
        //         <Col md={3}>
        //           <Image src="https://via.placeholder.com/100" />
        //         </Col>
        //       </Row>
        //     </Col>*/}
        //     <Row style={{width:'100%',margin:'120px auto'}} className='justify-content-center'>
        //       <Row className='d-flex'>
        //       {/* sidebar */}
        //       <Row xl={4}>
        //         {/* Info */}
        //         <Card>
        //           <img src="https://via.placeholder.com/150" roundedCircle />
        //           <Card.Title>Felencia</Card.Title>
        //           <Card.Text>
        //             <p>Creative Director</p>
        //           </Card.Text>
        //           <Card.Text className='w-100'>
        //             <div className='d-flex ml-4'>
        //               <p><FaFacebookF/></p>
        //               <p><FaGithub/></p>
        //               <p><FaBehance/></p>
        //             </div>
        //           </Card.Text>
                
        //         <Card.Text>
        //         <p><strong>Born:</strong> March 3, 1986</p>
        //         <p><strong>Location:</strong> Beijing, China</p>
        //         <p><strong>Email:</strong> support@email.com</p>
        //         <p><strong>Phone:</strong> +1 (101) 8183-4957</p>
        //         <Button>
        //           <FaCloudDownloadAlt /> Download CV
        //         </Button>
        //         </Card.Text>
        //         </Card>
        //         {/* sidebar */}

               
        //       </Row>


        //       <Row xl={4}>
        //         <Row>
        //         <div className="card-profile">
        //           <h2>Testimonials</h2>
        //           <p>Thanks to this skill of Felicia we have a dynamic staff who can be proud of." - Jessica Miller
        //             Felicia creates fresh creative concepts ideas very open creativity with extra sense." - Tanya Ruiz</p>
        //         </div>
        //         </Row>
        //         <Row>
        //         <div className="title-cv">
        //           <h3>What i'm doing</h3>
        //         </div>
        //         </Row>
        //         <Row>
        //           <Col>
        //             <Card>
        //               <img src='' alt='' />
        //               <Card.Title>Web Design</Card.Title>
        //               <Card.Text>- Jessica Miller Felicia creates fresh creative concepts ideas very open </Card.Text>
        //             </Card>
        //             <Card>
        //               <img src='' alt='' />
        //               <Card.Title>Web Design</Card.Title>
        //               <Card.Text>- Jessica Miller Felicia creates fresh creative concepts ideas very open </Card.Text>
        //             </Card>
        //             <Card>
        //               <img src='' alt='' />
        //               <Card.Title>Web Design</Card.Title>
        //               <Card.Text>- Jessica Miller Felicia creates fresh creative concepts ideas very open </Card.Text>
        //             </Card>
        //             <Card>
        //               <img src='' alt='' />
        //               <Card.Title>Web Design</Card.Title>
        //               <Card.Text>- Jessica Miller Felicia creates fresh creative concepts ideas very open </Card.Text>
        //             </Card>
        //           </Col>
        //         </Row>
        //         <Row>
        //         <div className="title-cv">
        //           <h3></h3>
        //         </div>
        //           <Col>
        //           <Card>
        //               <img src='' alt='' />
        //               <Card.Title>Web Design</Card.Title>
        //               <Card.Text>- Jessica Miller Felicia creates fresh creative concepts ideas very open </Card.Text>
        //             </Card>
        //             <Card>
        //               <img src='' alt='' />
        //               <Card.Title>Web Design</Card.Title>
        //               <Card.Text>- Jessica Miller Felicia creates fresh creative concepts ideas very open </Card.Text>
        //             </Card>
        //             <Card>
        //               <img src='' alt='' />
        //               <Card.Title>Web Design</Card.Title>
        //               <Card.Text>- Jessica Miller Felicia creates fresh creative concepts ideas very open </Card.Text>
        //             </Card>
        //           </Col>
        //         </Row>

        //       </Row>
        //       </Row>
        //     </Row>


        // </Container>
        <Container fluid className='justify-content-center m-5' >
          <Row>
            <Col md={3} style={{backgroundColor:'purple',color:'#fff',justifyItems:'end',display:'flex',padding:'20px 20px'}}>
              <Row className='d-flex align-items-end flex-column'>
                <div className="info-link mt-auto p-2">
                  <h3 className="title-info">
                    Email
                  </h3>
                  <p className="para-info">
                    support@gmail.com
                  </p>
                  <h3 className="title-info">
                    Phone
                  </h3>
                  <p className="para-info">
                    +212 676828282
                  </p>
                </div>
                <div className="social-link d-flex">
                    <a href="">Github</a>
                    <a href="">Facebook</a>
                    <a href="">LinkedIn</a>
                </div>
              </Row>
            </Col>
            <Col md={9} style={{backgroundColor:'#fefefe'}}>
              <Row>
                <Col>
                <div>
                  <img src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={300} alt=""/>
                </div>  
                </Col>
                <Col md={8}>
                  <h1>IM</h1>
                  <h3>Ammar Jalal eddin</h3>
                  <h5>Full Stack Developer</h5>
                  <p>Thanks to this skill of Felicia we have a dynamic staff who can be proud of." - Jessica Miller
        //             Felicia creates fresh creative concepts ideas very open creativity with extra sense." - Tanya Ruiz</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
}

export default Template