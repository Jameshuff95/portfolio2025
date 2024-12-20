import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container style={{ marginBottom: '-2.70rem' }}>
      <Card>
        <Card.Title className="container-title">
          Let's build something great!
        </Card.Title>
        <Card.Subtitle className="text-center">
          Send me an email via the form below to reach out 👇
        </Card.Subtitle>
        <Form
          id="form-container"
          onSubmit={handleSubmit}
          className="card-alt border-0"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            borderRadius: '5px',
            gap: '1rem',
            padding: '2%',
            height: '60vh',
          }}
        >
          <Form.Group controlId="name" className="d-flex flex-column">
            <Form.Control
              type="text"
              placeholder="First Name"
              maxLength={25}
              className="mb-3"
              style={{
                borderRadius: '5px',
                height: '2rem',
                padding: '2%',
              }}
            />

            <Form.Control
              type="text"
              placeholder="Last Name"
              maxLength={25}
              className="mb-3"
              style={{
                borderRadius: '5px',
                height: '2rem',
                padding: '2%',
              }}
            />
          </Form.Group>

          <Form.Control
            id="message-input"
            as="textarea"
            rows={3}
            maxLength={250}
            placeholder="250 character maximum message here..."
            style={{
              borderRadius: '5px',
              height: '10rem',
              minWidth: '95%',
              padding: '2%',
            }}
          />
          <Button
            variant="primary"
            type="submit"
            id="contact-submit"
            style={{
              width: '100%',
              height: '4rem',
              fontSize: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Contact;
