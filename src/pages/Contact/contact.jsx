/*

  Provides a dedicated space for visitors to reach out, whether through a contact form, email, or social media links. It makes it easy for potential clients or collaborators to get in touch.
  
*/

import './Contact.css';
import '../../index.css';
import '../../globalComponents/Nav/Nav.css';

import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../../globalComponents/Footer/Footer.jsx';

const Contact = () => {
  return (
    <Container className="page">
      <Card className="text-center">
        <Card.Title>Contact Me</Card.Title>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Card>
      <Footer />
    </Container>
  );
};

export default Contact;
