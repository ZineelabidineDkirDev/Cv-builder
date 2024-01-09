import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';

const Language = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState('');
  const [displayedLanguages, setDisplayedLanguages] = useState([]);
  const [availableLanguages, setAvailableLanguages] = useState(() => {
    // Load language data from local storage on component mount
    const storedData = localStorage.getItem('language_data');
    return storedData ? JSON.parse(storedData).availableLanguages || [] : [
      'English',
      'French',
      'Spanish',
      'German',
      'Italian',
      'Chinese',
    ];
  });

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedLanguages(selectedOptions);
  };

  const handleNewLanguageChange = (event) => {
    setNewLanguage(event.target.value);
  };

  const handleAddLanguage = () => {
    const trimmedLanguage = newLanguage.trim();
  
    if (trimmedLanguage !== '' && !selectedLanguages.includes(trimmedLanguage)) {
      // Combine displayed languages with the new language
      const newDisplayedLanguages = [...displayedLanguages, trimmedLanguage];
  
      // Update displayed languages and remove the new language from available languages
      setDisplayedLanguages(newDisplayedLanguages);
      setAvailableLanguages((prevLanguages) => prevLanguages.filter((language) => language !== trimmedLanguage));
  
      // Clear the input for a new language
      setNewLanguage('');
  
      // Save language data to local storage
      saveDataToLocalStorage({ displayedLanguages: newDisplayedLanguages, availableLanguages: [...availableLanguages, trimmedLanguage] });
    }
  };
  const handleRemoveLanguage = (index) => {
    const removedLanguage = displayedLanguages[index];
    const updatedDisplayedLanguages = displayedLanguages.filter((_, i) => i !== index);

    // Add the removed language back to the list of available languages
    setAvailableLanguages([...availableLanguages, removedLanguage]);

    setSelectedLanguages(selectedLanguages.filter((language) => language !== removedLanguage));
    setDisplayedLanguages(updatedDisplayedLanguages);

    // Save language data to local storage
    saveDataToLocalStorage({ displayedLanguages, availableLanguages: [...availableLanguages, removedLanguage] });
  };

  const handleAddSelectedLanguages = () => {
  if (selectedLanguages.length > 0) {
    // Combine selected languages with currently displayed languages
    const newDisplayedLanguages = [...displayedLanguages, ...selectedLanguages];

    // Update displayed languages and filter out selected languages from available languages
    setDisplayedLanguages(newDisplayedLanguages);
    setAvailableLanguages((prevLanguages) =>
      prevLanguages.filter((language) => !selectedLanguages.includes(language))
    );

    // Clear the selected languages array
    setSelectedLanguages([]);

    // Save language data to local storage
    saveDataToLocalStorage({ displayedLanguages: newDisplayedLanguages, availableLanguages });
  }
};

  // Function to save data to local storage
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem('language_data', JSON.stringify(data));
    setTimeout(() => {
      console.log(localStorage.getItem('language_data'))
    }, 2000);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Select your languages:</Form.Label>
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

        {/* Display selected languages above the list */}
        {displayedLanguages.length > 0 && (
          <div className="mb-3">
            <strong>Selected Languages:</strong>
            <ul>
              {displayedLanguages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Add a new language:</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="text"
              value={newLanguage}
              onChange={handleNewLanguageChange}
              placeholder="New language"
            />
            <Button variant="outline-dark" onClick={handleAddLanguage} className="ms-2">
              <FaPlus />
            </Button>
          </div>
        </Form.Group>

        {/* Display selected languages */}
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

        {/* Button to add selected languages */}
        <Button
          variant="outline-dark"
          onClick={handleAddSelectedLanguages}
          className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 mt-3"
        >
          Add Selected Languages
        </Button>
      </Form>
    </div>
  );
};

export default Language;