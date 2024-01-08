import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';
 
const Language = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState('');
  const [displayedLanguages, setDisplayedLanguages] = useState([]);
  const [availableLanguages, setAvailableLanguages] = useState([
    'English',
    'French',
    'Spanish',
    'German',
    'Italian',
    'Chinese',
  ]);
 
  useEffect(() => {
    // Sauvegarder les données dans un fichier JSON après chaque modification
    saveDataToJson({ displayedLanguages, availableLanguages });
  }, [displayedLanguages, availableLanguages]);
 
  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedLanguages(selectedOptions);
  };
 
  const handleNewLanguageChange = (event) => {
    setNewLanguage(event.target.value);
  };
 
  const handleAddLanguage = () => {
    if (newLanguage.trim() !== '' && !selectedLanguages.includes(newLanguage.trim())) {
      setDisplayedLanguages([...displayedLanguages, newLanguage.trim()]);
      setNewLanguage('');
 
      // Retirer la langue de la liste des langues disponibles
      setAvailableLanguages(availableLanguages.filter((language) => language !== newLanguage.trim()));
    }
  };
 
  const handleRemoveLanguage = (index) => {
    const removedLanguage = displayedLanguages[index];
    const updatedDisplayedLanguages = displayedLanguages.filter((_, i) => i !== index);
 
    // Ajouter la langue de retour à la liste des langues disponibles
    setAvailableLanguages([...availableLanguages, removedLanguage]);
 
    setSelectedLanguages(selectedLanguages.filter((language) => language !== removedLanguage));
    setDisplayedLanguages(updatedDisplayedLanguages);
  };
 
  const handleAddSelectedLanguages = () => {
    if (selectedLanguages.length > 0) {
      setDisplayedLanguages([...displayedLanguages, ...selectedLanguages]);
      setAvailableLanguages(
        availableLanguages.filter((language) => !selectedLanguages.includes(language))
      );
      setSelectedLanguages([]);
    }
  };
 
  // Fonction pour sauvegarder les données dans un fichier JSON
  const saveDataToJson = (data) => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'language_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
 
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Sélectionnez vos langues :</Form.Label>
          <Form.Control
            as="select"
            multiple
            value={selectedLanguages}
            onChange={handleSelectChange}
          >
            {availableLanguages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
 
        {/* Afficher les langues sélectionnées au-dessus de la liste */}
        {displayedLanguages.length > 0 && (
          <div className="mb-3">
            <strong>Langues sélectionnées :</strong>
            <ul>
              {displayedLanguages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        )}
 
        <Form.Group className="mb-3">
          <Form.Label>Ajouter une nouvelle langue :</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="text"
              value={newLanguage}
              onChange={handleNewLanguageChange}
              placeholder="Nouvelle langue"
            />
            <Button variant="outline-dark" onClick={handleAddLanguage} className="ms-2">
              <FaPlus />
            </Button>
          </div>
        </Form.Group>
 
        {/* Afficher les langues sélectionnées */}
        <div className="mt-4">
          {displayedLanguages.map((language, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <span>{language}</span>
              <Button
                variant="outline-dark"
                onClick={() => handleRemoveLanguage(index)}
                className="ms-2"
              >
                <FaTimes />
              </Button>
            </div>
          ))}
        </div>
 
        {/* Bouton pour ajouter les langues sélectionnées */}
        <Button
          variant="outline-dark"
          onClick={handleAddSelectedLanguages}
          className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 mt-3"
        >
          Ajouter les langues sélectionnées
        </Button>
      </Form>
    </div>
  );
};
 
export default Language;