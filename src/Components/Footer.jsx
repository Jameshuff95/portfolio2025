import '../index.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Footer.css';

const Footer = () => {
  return (
    <Container id="footer-container">
      <Card id="footer-card">
        <Card.Body id="footer-card-body">
          <Row id="footer-top">
            <Col id="footer-contact" className="footer-column">
              <Card.Title className="footer-column-title">Contact</Card.Title>
              <Col
                id="footer-contact-icon-container"
                className="footer-column-bottom"
              >
                <span>
                  <i className="bi bi-envelope" />
                  <Card.Text>Email</Card.Text>
                </span>
                <span>
                  <i className="bi bi-phone" />
                  <Card.Text>Phone</Card.Text>
                </span>
              </Col>
            </Col>

            <Col id="footer-quick-links" className="footer-column">
              <Card.Title className="footer-column-title">
                Quick Links
              </Card.Title>
              <Col className="footer-column-bottom">
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
            </Col>

            <Col id="footer-follow-me" className="footer-column">
              <Card.Title className="footer-column-title">Follow Me</Card.Title>
              <Col className="footer-column-bottom">
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
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Card.Text>
                &copy; 2024 James Huff. All rights reserved.
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Footer;
