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
    if (newLanguage.trim() !== '' && !selectedLanguages.includes(newLanguage.trim())) {
      setDisplayedLanguages([...displayedLanguages, newLanguage.trim()]);
      setNewLanguage('');

      // Remove the language from the list of available languages
      setAvailableLanguages(availableLanguages.filter((language) => language !== newLanguage.trim()));

      // Save language data to local storage
      saveDataToLocalStorage({ displayedLanguages, availableLanguages: [...availableLanguages, newLanguage.trim()] });
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
      setDisplayedLanguages([...displayedLanguages, ...selectedLanguages]);
      setAvailableLanguages(
        availableLanguages.filter((language) => !selectedLanguages.includes(language))
      );
      setSelectedLanguages([]);

      // Save language data to local storage
      saveDataToLocalStorage({ displayedLanguages, availableLanguages });
    }
  };

  // Function to save data to local storage
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem('language_data', JSON.stringify(data));
  };

  return (
    <div>
      <Form>
        {/* ... (Rest of the form components remain unchanged) */}

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