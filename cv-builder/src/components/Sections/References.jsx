import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const References = () => {
  const [linkedIn, setLinkedIn] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGitHub] = useState('');
  const [references, setReferences] = useState(() => {
    // Load references data from local storage on component mount
    const storedReferences = localStorage.getItem('references_data');
    return storedReferences ? JSON.parse(storedReferences) : [];
  });

  const handleAddReference = () => {
    if ((linkedIn && linkedIn.trim() !== '') || (twitter && twitter.trim() !== '') || (github && github.trim() !== '')) {
      const newReference = {
        linkedIn: linkedIn.trim(),
        twitter: twitter.trim(),
        github: github.trim(),
      };

      setReferences((prevReferences) => [...prevReferences, newReference]);
      setLinkedIn('');
      setTwitter('');
      setGitHub('');

      // Save references to local storage
      localStorage.setItem('references_data', JSON.stringify([...references, newReference]));
    }
  };

  const handleRemoveReference = (index) => {
    const updatedReferences = [...references];
    updatedReferences.splice(index, 1);
    setReferences(updatedReferences);

    // Save updated references to local storage
    localStorage.setItem('references_data', JSON.stringify(updatedReferences));
  };

  const saveReferences = () => {
    const referencesData = JSON.stringify(references, null, 2);

    // Create a Blob object from the JSON data
    const blob = new Blob([referencesData], { type: 'application/json' });

    // Create a URL object from the Blob
    const url = URL.createObjectURL(blob);

    // Create an <a> element to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'references.json';

    // Add the <a> element to the document
    document.body.appendChild(a);

    // Click on the <a> element to trigger the download
    a.click();

    // Remove the <a> element from the document
    document.body.removeChild(a);

    // Revoke the URL to free up resources
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Form>
        {/* ... (Rest of the form components remain unchanged) */}

        {/* Button to add reference */}
        <Button variant="outline-dark" className="btn btn-outline-dark border-dark rounded-5 px-4 py-2" onClick={handleAddReference}>
          Add
        </Button>

        <Row className="mt-3">
          <Col>
            <strong>Saved References:</strong>
            <ul>
              {references.map((reference, index) => (
                <li key={index}>
                  LinkedIn: {reference.linkedIn}, Twitter: {reference.twitter}, GitHub: {reference.github}
                  <Button
                    variant="outline-dark"
                    onClick={() => handleRemoveReference(index)}
                    className="ms-2"
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Button to save references */}
        <Button
          variant="outline-dark"
          className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 mt-3"
          onClick={saveReferences}
        >
          Save References
        </Button>
      </Form>
    </div>
  );
};

export default References;