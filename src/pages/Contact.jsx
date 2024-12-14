import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
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
    <Container id="contact-page" className="page">
      <Form id="form-container" onSubmit={handleSubmit} className="card-alt">
        <Form.Control type="text" placeholder="First Name" maxLength={25} />
        <Form.Control type="text" placeholder="Last Name" maxLength={25} />
        <Form.Control
          id="message-input"
          as="textarea"
          rows={3}
          maxLength={200}
          placeholder="200 character maximum message here..."
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
