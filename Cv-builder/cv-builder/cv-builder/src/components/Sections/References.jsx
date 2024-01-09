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

    localStorage.setItem('references_data', JSON.stringify(updatedReferences));
  };

  const saveReferences = () => {
    const referencesData = JSON.stringify(references, null, 2);

    const blob = new Blob([referencesData], { type: 'application/json' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'references.json';

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>LinkedIn :</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://www.linkedin.com/in/yourprofile"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Twitter :</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://twitter.com/yourprofile"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>GitHub :</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://github.com/yourprofile"
            value={github}
            onChange={(e) => setGitHub(e.target.value)}
          />
        </Form.Group>

        Button to add reference
        {linkedIn !=='' && github !== '' && twitter !== '' ? <Button  variant="outline-dark" className="btn btn-outline-dark border-dark rounded-5 px-4 py-2"
         onClick={handleAddReference}>
          Add
        </Button> : ''}

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