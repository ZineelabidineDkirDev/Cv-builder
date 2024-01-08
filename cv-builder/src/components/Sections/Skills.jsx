import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

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
      setDisplayedSkills([...displayedSkills, ...selectedSkills]);
      setAllSkills(allSkills.filter((skill) => !selectedSkills.includes(skill)));
      setSelectedSkills([]);

      // Save skills data to local storage
      saveDataToLocalStorage({ displayedSkills, allSkills });
    }
  };

  // Function to save data to local storage
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem('skills_data', JSON.stringify(data));
  };

  return (
    <div>
      <Form>
        {/* ... (Rest of the form components remain unchanged) */}

        {/* Button to add selected skills */}
        <Button
          variant="outline-dark"
          onClick={handleAddSelectedSkill}
          className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 mt-3"
        >
          Add Selected Skills
        </Button>
      </Form>

      {/* ... (Render Language and References components, assuming they are defined elsewhere) */}
    </div>
  );
};

export default Skills;