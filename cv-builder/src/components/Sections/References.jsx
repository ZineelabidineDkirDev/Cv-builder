import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
 
const References = () => {
  const [linkedIn, setLinkedIn] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGitHub] = useState('');
  const [references, setReferences] = useState([]);
 
  const handleAddReference = () => {
    if ((linkedIn && linkedIn.trim() !== '') || (twitter && twitter.trim() !== '') || (github && github.trim() !== '')) {
      const newReference = {
        linkedIn: linkedIn.trim(),
        twitter: twitter.trim(),
        github: github.trim(),
      };
 
      setReferences([...references, newReference]);
      setLinkedIn('');
      setTwitter('');
      setGitHub('');
    }
  };
 
  const handleRemoveReference = (index) => {
    const updatedReferences = [...references];
    updatedReferences.splice(index, 1);
    setReferences(updatedReferences);
  };
 
  const saveReferences = () => {
    const referencesData = JSON.stringify(references, null, 2);
   
    // Créer un objet Blob à partir des données JSON
    const blob = new Blob([referencesData], { type: 'application/json' });
   
    // Créer un objet URL à partir du Blob
    const url = URL.createObjectURL(blob);
   
    // Créer un élément <a> pour télécharger le fichier
    const a = document.createElement('a');
    a.href = url;
    a.download = 'references.json';
   
    // Ajouter l'élément <a> au document
    document.body.appendChild(a);
   
    // Cliquer sur l'élément <a> pour déclencher le téléchargement
    a.click();
   
    // Retirer l'élément <a> du document
    document.body.removeChild(a);
   
    // Révoquer l'URL pour libérer les ressources
    URL.revokeObjectURL(url);
  };
 
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>LinkedIn :</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://www.linkedin.com/in/votreprofil"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </Form.Group>
 
        <Form.Group className="mb-3">
          <Form.Label>Twitter :</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://twitter.com/votreprofil"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </Form.Group>
 
        <Form.Group className="mb-3">
          <Form.Label>GitHub :</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://github.com/votreprofil"
            value={github}
            onChange={(e) => setGitHub(e.target.value)}
          />
        </Form.Group>
 
        <Button variant="outline-dark" className="btn btn-outline-dark border-dark rounded-5 px-4 py-2" onClick={handleAddReference}>
          Ajouter
        </Button>
 
        <Row className="mt-3">
          <Col>
            <strong>Références enregistrées :</strong>
            <ul>
              {references.map((reference, index) => (
                <li key={index}>
                  LinkedIn: {reference.linkedIn}, Twitter: {reference.twitter}, GitHub: {reference.github}
                  <Button
                    variant="outline-dark"
                    onClick={() => handleRemoveReference(index)}
                    className="ms-2"
                  >
                    Supprimer
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
          Enregistrer References
        </Button>
      </Form>
    </div>
  );
};
 
export default References;