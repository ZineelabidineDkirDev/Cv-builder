import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import {
  FaTrash,
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSortNumericDown,
  FaCertificate,
  FaTools,
  FaPlus,
} from "react-icons/fa";
import "./Experience.css";

const Experiences = () => {
  const [experienceData, setExperienceData] = useState([
    {
      jobTitle: [''],
      companyName: [''],
      address: [''],
      startDate: [''],
      endDate: [''],
      skillsUtilized: [''],
      experienceType: [''],
      certifications: [''],
      toolsTechnologies: [''],
      projectLinks: [''],
      fadeIn: true,
    },
  ]);

  const [showGoToFirstButton, setShowGoToFirstButton] = useState(false);

  useEffect(() => {
    localStorage.setItem("experienceData", JSON.stringify(experienceData));
  }, [experienceData]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("experienceData")) || [];
    setExperienceData(storedData);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
  
    try {
      const hasNonEmptyData = experienceData.every(item => Object.values(item).every(value => value !== ''));
      if (hasNonEmptyData) {
        const jsonData = JSON.stringify(experienceData);
        console.log(jsonData);
     
      } else {
       alert('Please fill in all fields before proceeding to the next step .' )
      }
    } catch (error) {
      console.error('Error saving data to local file:', error);
    }
  };
  const handleArrayFieldChange = (experienceIndex, field, subIndex, value) => {
    const updatedData = [...experienceData];
    updatedData[experienceIndex][field][subIndex] = value;
    setExperienceData(updatedData);
  };

  const handleAddArrayField = (experienceIndex, field) => {
    const updatedData = [...experienceData];
    updatedData[experienceIndex][field].push('');
    setExperienceData(updatedData);
  };

  const handleRemoveArrayField = (experienceIndex, field, subIndex) => {
    const updatedData = [...experienceData];
    updatedData[experienceIndex][field].splice(subIndex, 1);
    setExperienceData(updatedData);
  };

  const handleNewData = () => {
    const newData = {
      jobTitle: [''],
      companyName: [''],
      address: [''],
      startDate: [''],
      endDate: [''],
      skillsUtilized: [''],
      experienceType: [''],
      certifications: [''],
      toolsTechnologies: [''],
      projectLinks: [''],
      fadeIn: true,
    };
    setExperienceData([...experienceData, newData]);
    setShowGoToFirstButton(true);
  };

  const handleGoToFirstExperience = () => {
    setExperienceData([
      {
        jobTitle: [''],
        companyName: [''],
        address: [''],
        startDate: [''],
        endDate: [''],
        skillsUtilized: [''],
        experienceType: [''],
        certifications: [''],
        toolsTechnologies: [''],
        projectLinks: [''],
        fadeIn: true,
      },
    ]);
    setShowGoToFirstButton(false);
  };

  return (
    <Form>
      {experienceData.map((experience, index) => (
        <div key={index} className={`fade-in ${experience.fadeIn ? 'active' : ''}  `} style={{ marginTop: '25px', borderBlockEnd: '1.5px solid black ', paddingBottom: '20px' }}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId={`jobTitle-${index}`}>
                <Form.Label><FaBriefcase /> Job Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your job title"
                  onChange={(e) => handleArrayFieldChange(index, "jobTitle", 0, e.target.value)}
                  value={experience.jobTitle[0]}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`companyName-${index}`}>
                <Form.Label><FaBuilding /> Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the company name"
                  onChange={(e) => handleArrayFieldChange(index, "companyName", 0, e.target.value)}
                  value={experience.companyName[0]}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Address */}
          <Form.Group controlId={`address-${index}`}>
            <Form.Label><FaMapMarkerAlt /> Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the address"
              onChange={(e) => handleArrayFieldChange(index, "address", 0, e.target.value)}
              value={experience.address[0]}
            />
          </Form.Group>

          {/* Date Range */}
          <Row className="mb-3">
            <Col>
              <Form.Group controlId={`startDate-${index}`}>
                <Form.Label><FaCalendarAlt /> Start Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="MM/YYYY - MM/YYYY"
                  onChange={(e) => handleArrayFieldChange(index, "startDate", 0, e.target.value)}
                  value={experience.startDate[0]}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`endDate-${index}`}>
                <Form.Label><FaCalendarAlt /> End Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="MM/YYYY - MM/YYYY"
                  onChange={(e) => handleArrayFieldChange(index, "endDate", 0, e.target.value)}
                  value={experience.endDate[0]}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Skills Utilized */}
          <Form.Group className="mb-3" controlId={`skillsUtilized-${index}`}>
            <Form.Label><FaSortNumericDown /> Skills Utilized</Form.Label>
            <Row>
              <Col>
                {experience.skillsUtilized.map((skill, subIndex) => (
                  <div key={subIndex} className={`mb-2 d-flex align-items-center ${subIndex !== 0 ? "mt-2" : ""}`}>
                    <Form.Control
                      type="text"
                      placeholder="Enter relevant skills"
                      value={skill}
                      onChange={(e) => handleArrayFieldChange(index, "skillsUtilized", subIndex, e.target.value)}
                    />
                    {subIndex !== 0 && (
                      <Button
                        variant="outline-dark"
                        className="ml-2 mx-4"
                        onClick={() => handleRemoveArrayField(index, "skillsUtilized", subIndex)}
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </div>
                ))}
              </Col>
              <Col lg={1}>
                <Button variant="outline-dark" onClick={() => handleAddArrayField(index, "skillsUtilized")} className="ml-2">
                  <FaPlus />
                </Button>
              </Col>
            </Row>
          </Form.Group>

          {/* Experience Type */}
          <Form.Group className="mb-3" controlId={`experienceType-${index}`}>
            <Form.Label><FaSortNumericDown /> Experience Type</Form.Label>
            <Row>
              <Col>
                {experience.experienceType.map((type, subIndex) => (
                  <div key={subIndex} className={`mb-2 d-flex align-items-center ${subIndex !== 0 ? "mt-2" : ""}`}>
                    <Form.Control
                      type="text"
                      placeholder="Full-time, Part-time, etc."
                      value={type}
                      onChange={(e) => handleArrayFieldChange(index, "experienceType", subIndex, e.target.value)}
                    />
                    {subIndex !== 0 && (
                      <Button
                        variant="outline-dark"
                        className="ml-2 mx-4"
                        onClick={() => handleRemoveArrayField(index, "experienceType", subIndex)}
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </div>
                ))}
              </Col>
              <Col lg={1}>
                <Button variant="outline-dark" onClick={() => handleAddArrayField(index, "experienceType")} className="ml-2">
                  <FaPlus />
                </Button>
              </Col>
            </Row>
          </Form.Group>

          {/* Certifications */}
          <Form.Group className="mb-3" controlId={`certifications-${index}`}>
            <Form.Label><FaCertificate /> Training or Certifications</Form.Label>
            <Row>
              <Col>
                {experience.certifications.map((certification, subIndex) => (
                  <div key={subIndex} className={`mb-2 d-flex align-items-center ${subIndex !== 0 ? "mt-2" : ""}`}>
                    <Form.Control
                      type="text"
                      placeholder="List relevant certifications or training"
                      value={certification}
                      onChange={(e) => handleArrayFieldChange(index, "certifications", subIndex, e.target.value)}
                    />
                    {subIndex !== 0 && (
                      <Button
                        variant="outline-dark"
                        className="ml-2 mx-4"
                        onClick={() => handleRemoveArrayField(index, "certifications", subIndex)}
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </div>
                ))}
              </Col>
              <Col lg={1}>
                <Button variant="outline-dark" onClick={() => handleAddArrayField(index, "certifications")} className="ml-2">
                  <FaPlus />
                </Button>
              </Col>
            </Row>
          </Form.Group>

          {/* Tools and Technologies */}
          <Form.Group className="mb-3" controlId={`toolsTechnologies-${index}`}>
            <Form.Label><FaTools /> Tools and Technologies</Form.Label>
            <Row>
              <Col>
                {experience.toolsTechnologies.map((tool, subIndex) => (
                  <div key={subIndex} className={`mb-2 d-flex align-items-center ${subIndex !== 0 ? "mt-2" : ""}`}>
                    <Form.Control
                      type="text"
                      placeholder="List tools, software, or technologies used"
                      value={tool}
                      onChange={(e) => handleArrayFieldChange(index, "toolsTechnologies", subIndex, e.target.value)}
                    />
                    {subIndex !== 0 && (
                      <Button
                        variant="outline-dark"
                        className="ml-2 mx-4"
                        onClick={() => handleRemoveArrayField(index, "toolsTechnologies", subIndex)}
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </div>
                ))}
              </Col>
              <Col lg={1}>
                <Button variant="outline-dark" onClick={() => handleAddArrayField(index, "toolsTechnologies")} className="ml-2">
                  <FaPlus />
                </Button>
              </Col>
            </Row>
          </Form.Group>

          {/* Project Links */}
          <Form.Group className="mb-3" controlId={`projectLinks-${index}`}>
            <Form.Label><FaSortNumericDown /> Project Links</Form.Label>
            <Row>
              <Col>
                {experience.projectLinks.map((link, subIndex) => (
                  <div key={subIndex} className={`mb-2 d-flex align-items-center ${subIndex !== 0 ? "mt-2" : ""}`}>
                    <Form.Control
                      type="text"
                      placeholder="Paste Link of the project"
                      value={link}
                      onChange={(e) => handleArrayFieldChange(index, "projectLinks", subIndex, e.target.value)}
                    />
                    {subIndex !== 0 && (
                      <Button
                        variant="outline-dark"
                        className="ml-2 mx-4"
                        onClick={() => handleRemoveArrayField(index, "projectLinks", subIndex)}
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </div>
                ))}
              </Col>
              <Col lg={1}>
                <Button variant="outline-dark" onClick={() => handleAddArrayField(index, "projectLinks")} className="ml-2">
                  <FaPlus />
                </Button>
              </Col>
            </Row>
          </Form.Group>

        </div>
      ))}

      <Form.Group>
        <Button variant="outline" className="btn btn-outline-dark border-dark rounded-5 px-4 py-2"  style={{marginTop:'20px'}}>
          Previous Step
        </Button>
        <Button variant="outline" className="btn btn-outline-dark border-dark rounded-5 px-4 py-2"  style={{marginTop:'20px' , marginLeft:'10px'}} onClick={handleClick}>
          Next Step
        </Button>

        <Button
          className="button-transition btn btn-outline-dark border-dark rounded-5"
          variant="outline"
          style={{ marginTop: "20px", position: "absolute", right: "200px" }}
          onClick={handleNewData}
        >
          <FaPlus style={{ marginRight: "5px" }} />
          Add Another Experience
        </Button>

        {showGoToFirstButton && (
          <Button
            className="button-transition btn btn-outline-dark border-dark rounded-5"
            variant="outline"
            style={{ marginTop: "20px", position: "absolute", right: "450px" }}
            onClick={handleGoToFirstExperience}
          >
            <FaTrash style={{ marginRight: "5px" }} />
            Back
          </Button>
        )}
      </Form.Group>
    </Form>
  );
};

export default Experiences;
