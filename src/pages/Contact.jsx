import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';
import '../css/Contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container id="contact-page" className="page">
      <Card className="card">
        <Card.Title className="container-title">
          Let's build something great!
        </Card.Title>
        <Card.Subtitle className="text-center">
          Send me an emails via the form below to reach out 👇
        </Card.Subtitle>
        <Form
          id="form-container"
          onSubmit={handleSubmit}
          className="card-alt border-0"
        >
          <Form.Group controlId="name" className="d-flex flex-column">
            <Form.Control
              type="text"
              placeholder="First Name"
              maxLength={25}
              className="mb-3"
            />
            <Form.Control
              type="text"
              placeholder="Last Name"
              maxLength={25}
              className="mb-3"
            />
          </Form.Group>

          <Form.Control
            id="message-input"
            as="textarea"
            rows={3}
            maxLength={250}
            placeholder="250 character maximum message here..."
          />
          <Button variant="primary" type="submit" id="contact-submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Contact;
