import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';
import cv from '../ExportData';

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [allSkills, setAllSkills] = useState(() => {
    // Load skills data from local storage on component mount
    const storedData = localStorage.getItem('skills_data');
    return storedData ? JSON.parse(storedData).allSkills || [] : [
      'Teamwork',
      'Time Management',
      'Ability to Multitask',
      'Fast Learner',
      'Communication',
      'Microsoft Office',
      'Adaptability',
      'Communication Skills',
      'Ability to Work Under Pressure',
    ];
  });

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedSkills(selectedOptions);
  };

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill) {
      setAllSkills([...allSkills, newSkill]);
      setDisplayedSkills([...displayedSkills, newSkill]);
      setNewSkill('');

      // Save skills data to local storage
      saveDataToLocalStorage({ displayedSkills, allSkills: [...allSkills, newSkill] });
    }
  };

  const handleRemoveSkill = (index) => {
    const removedSkill = displayedSkills[index];
    const updatedDisplayedSkills = displayedSkills.filter((_, i) => i !== index);

    // Add the removed skill back to the list of available skills
    setAllSkills([...allSkills, removedSkill]);

    setSelectedSkills(selectedSkills.filter((skill) => skill !== removedSkill));
    setDisplayedSkills(updatedDisplayedSkills);

    // Save skills data to local storage
    saveDataToLocalStorage({ displayedSkills, allSkills: [...allSkills, removedSkill] });
  };

  const handleAddSelectedSkill = () => {
    if (selectedSkills.length > 0) {
      // Combine selected skills with currently displayed skills
      const newDisplayedSkills = [...displayedSkills, ...selectedSkills];
  
      // Update displayed skills and filter out selected skills from all skills
      setDisplayedSkills(newDisplayedSkills);
      setAllSkills(allSkills.filter((skill) => !selectedSkills.includes(skill)));
  
      // Clear the selected skills array
      setSelectedSkills([]);
  
      // Save skills data to local storage
      saveDataToLocalStorage({ displayedSkills: newDisplayedSkills, allSkills });
    }
  };

  // Function to save data to local storage
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem('skills_data', JSON.stringify(data));
    setTimeout(() => {
      
      console.log(localStorage.getItem('skills_data'))
    }, 5000);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Select your skills:</Form.Label>
          <Form.Control
            as="select"
            multiple
            value={selectedSkills}
            onChange={handleSelectChange}
          >
            {allSkills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* Display selected skills above the list */}
        {displayedSkills.length > 0 && (
          <div className="mb-3">
            <strong>Selected Skills:</strong>
            <ul>
              {displayedSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Add a new skill:</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={newSkill}
              onChange={handleNewSkillChange}
              placeholder="New skill"
            />
            <Button variant="outline-dark" onClick={handleAddSkill} className="ms-2">
              <FaPlus />
            </Button>
          </InputGroup>
        </Form.Group>

        {/* Display selected skills with remove button */}
        <div className="mt-4">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <span>{skill}</span>
              <Button
                variant="outline-dark"
                onClick={() => handleRemoveSkill(index)}
                className="ms-2"
              >
                <FaTimes />
              </Button>
            </div>
          ))}
        </div>

        {/* Button to add selected skills */}
        <Button
          variant="outline-dark"
          onClick={handleAddSelectedSkill}
          className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 mb-3"
        >
          Add Selected Skills
        </Button>
      </Form>

      <cv.Language />
      <cv.References />
    </div>
  );
};

export default Skills;