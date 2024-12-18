import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
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
          style={{
            padding: '0',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            borderRadius: '5px',
            gap: '1rem',
            height: '65vh',
            outline: 'none',
            overflow: 'hidden',
            height: '2rem',
            padding: '2%',
          }}
        >
          <Form.Group controlId="name" className="d-flex flex-column">
            <Form.Control
              type="text"
              placeholder="First Name"
              maxLength={25}
              className="mb-3"
              style={{
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: '5px',
                outline: 'none',
                overflow: 'hidden',
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
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: '5px',
                outline: 'none',
                overflow: 'hidden',
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
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: '5px',
              height: '10rem',
              minWidth: '95%',
              outline: 'none',
              overflow: 'hidden',
              height: '2rem',
              padding: '2%',
              minWidth: '100%',
              minHeight: '55%',
            }}
          />
          <Button
            variant="primary"
            type="submit"
            id="contact-submit"
            style={{
              width: '100%',
              height: '4rem',
              alignSelf: 'center',
              fontSize: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              placeItems: 'center',
              overflow: 'hidden',
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
