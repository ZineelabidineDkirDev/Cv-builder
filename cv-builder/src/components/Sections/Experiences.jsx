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
import cityData from '../../CityLoader/CityData.json';

const Experiences = () => {
  const [experienceData, setExperienceData] = useState([
    {
      jobTitle: [''],
      companyName: [''],
      city: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
      experienceType: [''],
      certifications: [''],
      toolsTechnologies: [''],
      fadeIn: true,
    },
  ]);


  useEffect(() => {
    localStorage.setItem("experienceData", JSON.stringify(experienceData));
  }, [experienceData]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("experienceData")) || [];
    setExperienceData(storedData);
  }, []);

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
      city: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
      experienceType: [''],
      certifications: [''],
      toolsTechnologies: [''],
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
        city: [''],
        description: [''],
        startDate: [''],
        endDate: [''],
        experienceType: [''],
        certifications: [''],
        toolsTechnologies: [''],
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

          {/* city */}
          <Form.Group className="mb-3" controlId={`city-${index}`}>
            <Form.Label><FaMapMarkerAlt /> City</Form.Label>
            <Form.Select
              value={experience.city[0]}
              onChange={(e) => handleArrayFieldChange(index, "city", 0, e.target.value)}
            >
              <option value="">Select...</option>
              {cityData.map(city => (
                <option key={city.id} value={city.ville}>
                  {city.ville}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3" controlId={`description-${index}`}>
            <Form.Label><FaMapMarkerAlt /> Description</Form.Label>
            <Form.Control
              as="textarea"  
              placeholder="Talk here about your experience"
              onChange={(e) => handleArrayFieldChange(index, "description", 0, e.target.value)}
              value={experience.description[0]}
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

          {/* Experience Type */}
          <Form.Group className="mb-3" controlId={`experienceType-${index}`}>
            <Form.Label><FaSortNumericDown /> Experience Type:</Form.Label>
            <Form.Select
              value={experience.experienceType[0]}
              onChange={(e) => handleArrayFieldChange(index, "experienceType", 0, e.target.value)}
            >
              <option value="">Select...</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
            </Form.Select>
            {experience.experienceType.length > 1 && (
              <Button
                variant="outline-dark"
                className="ml-2 mx-4"
                onClick={() => handleRemoveArrayField(index, "experienceType", 1)}
              >
                <FaTrash />
              </Button>
            )}
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

        </div>
      ))}

      <Form.Group>

        <Button
          className="button-transition btn btn-outline-dark border-dark rounded-5"
          variant="outline"
          style={{ marginTop: "20px", marginLeft: '75%', right: "200px" }}
          onClick={handleNewData}
        >
          <FaPlus style={{ marginRight: "5px" }} />
          Add Another Experience
        </Button>

        
      </Form.Group>
    </Form>
  );
};

export default Experiences;