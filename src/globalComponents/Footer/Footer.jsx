import '../../index.css';
import '../../pages/Home/components/ContactInformation/ContactInformation.css';
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <Container id="footer-container" className="mt-4">
      <Card id="footer-card">
        <Card.Body id="footer-card-body">
          <Row id="footer-top" className="mb-3">
            <Col>
              <Card.Title id="footer-contact-title">Contact</Card.Title>
              <Card.Text>
                <i className="bi bi-email" />
                jameshuffdev@example.com
              </Card.Text>
              <Card.Text>
                <i className="bi bi-phone" />
                Phone: (859) 377-0700
              </Card.Text>
            </Col>
            <Col>
              <Card.Title>Quick Links</Card.Title>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Col>
            <Col>
              <Card.Title>Follow Me</Card.Title>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Card.Text>&copy; 2024 Your Name. All rights reserved.</Card.Text>
              <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
              <Link to="/terms-of-service">Terms of Service</Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Footer;
