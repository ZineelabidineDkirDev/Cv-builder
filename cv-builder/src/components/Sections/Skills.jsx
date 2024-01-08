import React, { useState, useEffect } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';
import cv from '../ExportData';
 
const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [allSkills, setAllSkills] = useState([
    'Teamwork',
    'Time Management',
    'Ability to Multitask',
    'Fast Learner',
    'Communication',
    'Microsoft Office',
    'Adaptability',
    'Communication Skills',
    'Ability to Work Under Pressure',
  ]);
 
  useEffect(() => {
    // Sauvegarder les données dans un fichier JSON après chaque modification
    saveDataToJson({ displayedSkills, allSkills });
  }, [displayedSkills, allSkills]);
 
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
    }
  };
 
  const handleRemoveSkill = (index) => {
    const removedSkill = displayedSkills[index];
    const updatedDisplayedSkills = displayedSkills.filter((_, i) => i !== index);
 
    // Ajouter la compétence de retour à la liste des compétences disponibles
    setAllSkills([...allSkills, removedSkill]);
 
    setSelectedSkills(selectedSkills.filter((skill) => skill !== removedSkill));
    setDisplayedSkills(updatedDisplayedSkills);
  };
 
  const handleAddSelectedSkill = () => {
    if (selectedSkills.length > 0) {
      setDisplayedSkills([...displayedSkills, ...selectedSkills]);
      setAllSkills(allSkills.filter((skill) => !selectedSkills.includes(skill)));
      setSelectedSkills([]);
    }
  };
 
  // Fonction pour sauvegarder les données dans un fichier JSON
  const saveDataToJson = (data) => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skills_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
 
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Sélectionnez vos compétences :</Form.Label>
          <Form.Control as="select" multiple value={selectedSkills} onChange={handleSelectChange}>
            {allSkills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
 
        {/* Afficher les compétences sélectionnées au-dessus de la liste */}
        {displayedSkills.length > 0 && (
          <div className="mb-3">
            <strong>Compétences sélectionnées :</strong>
            <ul>
              {displayedSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
 
        <Form.Group className="mb-3">
          <Form.Label>Ajouter une nouvelle compétence :</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={newSkill}
              onChange={handleNewSkillChange}
              placeholder="Nouvelle compétence"
            />
            <Button variant="outline-dark" onClick={handleAddSkill} className="ms-2">
              <FaPlus />
            </Button>
          </InputGroup>
        </Form.Group>
 
        {/* Afficher les compétences sélectionnées */}
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
 
        {/* Bouton pour ajouter les compétences sélectionnées */}
        <Button
          variant="outline-dark"
          onClick={handleAddSelectedSkill}
          className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 mt-3"
        >
          Ajouter les compétences sélectionnées
        </Button>
      </Form>
 
      <cv.Language />
      <cv.References />
    </div>
  );
};
 
export default Skills;