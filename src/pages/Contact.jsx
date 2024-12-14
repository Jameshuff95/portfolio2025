import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer.jsx';

import '../index.css';
import '../App.css';
import '../css/Contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container className="page">
      <Form id="form-container" onSubmit={handleSubmit} className="card-alt">
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Control
          id="message-input"
          as="textarea"
          rows={3}
          placeholder="Your message here..."
        />
        <Button variant="primary" type="submit" id="contact-submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </Container>
  );
};

export default Contact;
