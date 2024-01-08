import React, { useState, useEffect } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"


import { FaTrash, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTasks, FaTrophy, FaUsers, FaCertificate, FaTools, FaBuilding, FaSortNumericDown, FaPlus } from "react-icons/fa"
const Experiences = () => {

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [employmentDates, setEmploymentDates] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [skillsUtilized, setSkillsUtilized] = useState([""]);
  const [accomplishments, setAccomplishments] = useState([""]);
  const [promotions, setPromotions] = useState("");
  const [employmentType, setEmploymentType] = useState([""]);
  const [teamCollaboration, setTeamCollaboration] = useState([""]);
  const [certifications, setCertifications] = useState([""]);
  const [toolsTechnologies, setToolsTechnologies] = useState([""]);
  const [industryExperience, setIndustryExperience] = useState("");
  const [professionalDevelopment, setProfessionalDevelopment] = useState("");
  const [references, setReferences] = useState([""]);
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("experienceData")) || [];
    setExperienceData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("experienceData", JSON.stringify(experienceData));
  }, [experienceData]);

  const handleSaveToFile = () => {

    const jsonData = JSON.stringify(experienceData);

    console.log(jsonData);

    // const blob = new Blob([jsonData], { type: "application/json" });

    // const link = document.createElement("a");
    // link.href = URL.createObjectURL(blob);
    // link.download = "experienceData.json";

    // link.click();
  };

  const handleNewData = (e) => {
    e.preventDefault();

    const data = {
      jobTitle,
      companyName,
      address,
      employmentDates,
      responsibilities,
      skillsUtilized: skillsUtilized.filter(skill => skill.trim() !== ""),
      accomplishments: accomplishments.filter(accomplishment => accomplishment.trim() !== ""),
      promotions,
      employmentType: employmentType.filter(type => type.trim() !== ""),
      teamCollaboration: teamCollaboration.filter(team => team.trim() !== ""),
      certifications: certifications.filter(certification => certification.trim() !== ""),
      toolsTechnologies: toolsTechnologies.filter(tool => tool.trim() !== ""),
      industryExperience,
      professionalDevelopment,
      references: references.filter(reference => reference.trim() !== ""),
    };

    if (!(data.jobTitle === "")) {
      setExperienceData((prevData) => [...prevData, data]);
    }

    console.log(experienceData);

    setJobTitle("");
    setCompanyName("");
    setAddress("");
    setEmploymentDates("");
    setResponsibilities("");
    setSkillsUtilized([""]);
    setAccomplishments([""]);
    setPromotions("");
    setEmploymentType([""]);
    setTeamCollaboration([""]);
    setCertifications([""]);
    setToolsTechnologies([""]);
    setIndustryExperience("");
    setProfessionalDevelopment("");
    setReferences([""]);


  };

  const handleAddSkill = () => {
    setSkillsUtilized((prevSkills) => [...prevSkills, ""]);
  };
  const handleRemoveSkill = (index) => {
    setSkillsUtilized((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const handleAddAccomplishment = () => {
    setAccomplishments((prevAccomplishments) => [...prevAccomplishments, ""]);
  };
  const handleRemoveAccomplishment = (index) => {
    setAccomplishments((prevAccomplishments) => prevAccomplishments.filter((_, i) => i !== index));
  };

  const handleAddEmploymentType = () => {
    setEmploymentType((prevType) => [...prevType, ""]);
  };
  const handleRemoveEmploymentType = (index) => {
    setEmploymentType((prevType) => prevType.filter((_, i) => i !== index));
  };

  const handleAddTeamCollaboration = () => {
    setTeamCollaboration((prevTeam) => [...prevTeam, ""]);
  };
  const handleRemoveTeamCollaboration = (index) => {
    setTeamCollaboration((prevTeam) => prevTeam.filter((_, i) => i !== index));
  };

  const handleAddCertification = () => {
    setCertifications((prevCertification) => [...prevCertification, ""]);
  };
  const handleRemoveCertification = (index) => {
    setCertifications((prevCertification) => prevCertification.filter((_, i) => i !== index));
  };

  const handleAddToolTechnology = () => {
    setToolsTechnologies((prevTool) => [...prevTool, ""]);
  };
  const handleRemoveToolTechnology = (index) => {
    setToolsTechnologies((prevTool) => prevTool.filter((_, i) => i !== index));
  };

  const handleAddReference = () => {
    setReferences((prevReference) => [...prevReference, ""]);
  };
  const handleRemoveReference = (index) => {
    setReferences((prevReference) => prevReference.filter((_, i) => i !== index));
  };
  return (
    <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="jobTitle">
              <Form.Label><FaBriefcase /> Job Title</Form.Label>
              <Form.Control type="text" placeholder="Enter your job title" onChange={(e) => setJobTitle(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="companyName">
              <Form.Label><FaBuilding /> Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter the company name" onChange={(e) => setCompanyName(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="address">
              <Form.Label><FaMapMarkerAlt /> Address</Form.Label>
              <Form.Control type="text" placeholder="Enter the address" onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="employmentDates">
              <Form.Label><FaCalendarAlt /> Dates of Employment</Form.Label>
              <Form.Control type="date" placeholder="MM/YYYY - MM/YYYY" onChange={(e) => setEmploymentDates(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="responsibilities">
          <Form.Label><FaTasks /> Responsibilities and Achievements</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="List your main responsibilities and achievements" onChange={(e) => setResponsibilities(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="skillsUtilized">
          <Form.Label>
            <FaSortNumericDown /> Skills Utilized
          </Form.Label>
          <Row>
            <Col>
              {skillsUtilized.map((skill, index) => (
                <div key={index} className={`mb-2 d-flex align-items-center ${index !== 0 ? 'mt-2' : ''}`}>
                  <Form.Control
                    type="text"
                    placeholder="Enter relevant skills"
                    value={skill}
                    onChange={(e) => {
                      const updatedSkills = [...skillsUtilized];
                      updatedSkills[index] = e.target.value;
                      setSkillsUtilized(updatedSkills);
                    }}
                  />
                  {index !== 0 && (
                    <Button
                      variant="outline-dark"
                      className="ml-2 mx-4"
                      onClick={() => handleRemoveSkill(index)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </div>
              ))}
            </Col>
            <Col lg={1}>
              <Button variant="outline-dark" onClick={handleAddSkill} className="ml-2">
                <FaPlus />
              </Button>
            </Col>
          </Row>
        </Form.Group>



        <Form.Group className="mb-3" controlId="accomplishments">
          <Form.Label>
            <FaTrophy /> Accomplishments
          </Form.Label>
          <Row>
            <Col>
              {accomplishments.map((accomplishment, index) => (
                <div key={index} className={`mb-2 d-flex align-items-center ${index !== 0 ? 'mt-2' : ''}`}>
                  <Form.Control
                    type="text"
                    placeholder="Highlight specific accomplishments"
                    value={accomplishment}
                    onChange={(e) => {
                      const updatedAccomplishments = [...accomplishments];
                      updatedAccomplishments[index] = e.target.value;
                      setAccomplishments(updatedAccomplishments);
                    }}
                  />
                  {index !== 0 && (
                    <Button
                      variant="outline-dark"
                      className="ml-2 mx-4"
                      onClick={() => handleRemoveAccomplishment(index)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </div>
              ))}
            </Col>
            <Col lg={1}>
              <Button variant="outline-dark" onClick={handleAddAccomplishment} className="ml-2">
                <FaPlus />
              </Button>
            </Col>
          </Row>
        </Form.Group>




        <Form.Group className="mb-3" controlId="promotions">
          <Form.Label><FaSortNumericDown /> Promotions</Form.Label>
          <Form.Control type="text" placeholder="Specify any promotions received" onChange={(e) => setPromotions(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="employmentType">
          <Form.Label>
            <FaSortNumericDown /> Employment Type
          </Form.Label>
          <Row>
            <Col>
              {employmentType.map((type, index) => (
                <div key={index} className={`mb-2 d-flex align-items-center ${index !== 0 ? 'mt-2' : ''}`}>
                  <Form.Control
                    type="text"
                    placeholder="Full-time, Part-time, etc."
                    value={type}
                    onChange={(e) => {
                      const updatedEmploymentType = [...employmentType];
                      updatedEmploymentType[index] = e.target.value;
                      setEmploymentType(updatedEmploymentType);
                    }}
                  />
                  {index !== 0 && (
                    <Button
                      variant="outline-dark"
                      className="ml-2 mx-4"
                      onClick={() => handleRemoveEmploymentType(index)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </div>
              ))}
            </Col>
            <Col lg={1}>
              <Button variant="outline-dark" onClick={handleAddEmploymentType} className="ml-2">
                <FaPlus />
              </Button>
            </Col>
          </Row>
        </Form.Group>




        <Form.Group className="mb-3" controlId="teamCollaboration">
          <Form.Label>
            <FaUsers /> Team Collaboration
          </Form.Label>
          <Row>
            <Col>
              {teamCollaboration.map((team, index) => (
                <div key={index} className={`mb-2 d-flex align-items-center ${index !== 0 ? 'mt-2' : ''}`}>
                  <Form.Control
                    type="text"
                    placeholder="Describe collaboration with colleagues and teams"
                    value={team}
                    onChange={(e) => {
                      const updatedTeamCollaboration = [...teamCollaboration];
                      updatedTeamCollaboration[index] = e.target.value;
                      setTeamCollaboration(updatedTeamCollaboration);
                    }}
                  />
                  {index !== 0 && (
                    <Button
                      variant="outline-dark"
                      className="ml-2 mx-4"
                      onClick={() => handleRemoveTeamCollaboration(index)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </div>
              ))}
            </Col>
            <Col lg={1}>
              <Button variant="outline-dark" onClick={handleAddTeamCollaboration} className="ml-2">
                <FaPlus />
              </Button>
            </Col>
          </Row>
        </Form.Group>




        <Form.Group className="mb-3" controlId="certifications">
          <Form.Label>
            <FaCertificate /> Training or Certifications
          </Form.Label>
          <Row>
            <Col>
              {certifications.map((certification, index) => (
                <div key={index} className={`mb-2 d-flex align-items-center ${index !== 0 ? 'mt-2' : ''}`}>
                  <Form.Control
                    type="text"
                    placeholder="List relevant certifications or training"
                    value={certification}
                    onChange={(e) => {
                      const updatedCertifications = [...certifications];
                      updatedCertifications[index] = e.target.value;
                      setCertifications(updatedCertifications);
                    }}
                  />
                  {index !== 0 && (
                    <Button
                      variant="outline-dark"
                      className="ml-2 mx-4"
                      onClick={() => handleRemoveCertification(index)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </div>
              ))}
            </Col>
            <Col lg={1}>
              <Button variant="outline-dark" onClick={handleAddCertification} className="ml-2">
                <FaPlus />
              </Button>
            </Col>
          </Row>
        </Form.Group>




        <Form.Group className="mb-3" controlId="toolsTechnologies">
          <Form.Label>
            <FaTools /> Tools and Technologies
          </Form.Label>
          <Row>
            <Col>
              {toolsTechnologies.map((tool, index) => (
                <div key={index} className={`mb-2 d-flex align-items-center ${index !== 0 ? 'mt-2' : ''}`}>
                  <Form.Control
                    type="text"
                    placeholder="List tools, software, or technologies used"
                    value={tool}
                    onChange={(e) => {
                      const updatedTools = [...toolsTechnologies];
                      updatedTools[index] = e.target.value;
                      setToolsTechnologies(updatedTools);
                    }}
                  />
                  {index !== 0 && (
                    <Button
                      variant="outline-dark"
                      className="ml-2 mx-4"
                      onClick={() => handleRemoveToolTechnology(index)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </div>
              ))}
            </Col>
            <Col lg={1}>
              <Button variant="outline-dark" onClick={handleAddToolTechnology} className="ml-2">
                <FaPlus />
              </Button>
            </Col>
          </Row>
        </Form.Group>



        <Form.Group className="mb-3" controlId="industryExperience">
          <Form.Label><FaBuilding /> Industry Experience</Form.Label>
          <Form.Control type="text" placeholder="Specify the industry or sector" onChange={(e) => setIndustryExperience(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="professionalDevelopment">
          <Form.Label><FaSortNumericDown /> Professional Development</Form.Label>
          <Form.Control type="text" placeholder="Mention any courses or activities for skill enhancement" onChange={(e) => setProfessionalDevelopment(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="references">
          <Form.Label>
            <FaSortNumericDown /> References
          </Form.Label>
          <Row>
            <Col>
              {references.map((reference, index) => (
                <div key={index} className={`mb-2 d-flex align-items-center ${index !== 0 ? 'mt-2' : ''}`}>
                  <Form.Control
                    type="text"
                    placeholder="Available upon request"
                    value={reference}
                    onChange={(e) => {
                      const updatedReferences = [...references];
                      updatedReferences[index] = e.target.value;
                      setReferences(updatedReferences);
                    }}
                  />
                  {index !== 0 && (
                    <Button
                      variant="outline-dark"
                      className="ml-2 mx-4"
                      onClick={() => handleRemoveReference(index)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </div>
              ))}
            </Col>
            <Col lg={1}>
              <Button variant="outline-dark" onClick={handleAddReference} className="ml-2">
                <FaPlus />
              </Button>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="text-center mx-auto my-3">
          <Button variant="outline-dark" onClick={(e) => handleNewData(e)} className="ml-2">
            <FaPlus /> Add new experience
          </Button>
        </Form.Group>

        <Form.Group>
          <Button variant="outline" className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 mx-2">
            Previous Step
          </Button>
          <Button
            variant="outline"
            className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 mx-2"
            onClick={handleSaveToFile}
          >
            Save to File
          </Button>
          <Button variant="outline" className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 mx-2">
            Next Step
          </Button>

        
        </Form.Group>
      </Form>
    
  );
}

export default Experiences