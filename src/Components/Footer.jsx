import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../css/Footer.css';

const Footer = () => {
  return (
    <Container>
      <Card className="card-alt">
        <Card.Body id="footer-body">
          <Row className="footer-contact-row">
            <i className="bi bi-envelope" />
            <Card.Text className="footer-contact-text">
              jameshuffdev@gmail.com
            </Card.Text>
          </Row>
          <Row className="footer-contact-row">
            <i className="bi bi-phone" />
            <Card.Text className="footer-contact-text">
              +1-859-377-0700
            </Card.Text>
          </Row>
          {/*
          <Row id="footer-socials">
            <i className="bi bi-linkedin" />
            <i className="bi bi-twitter-x" />
            <i className="bi bi-github" />
            <i className="bi bi-reddit" />
            <i className="bi bi-youtube" />
            <i className="bi bi-instagram" />
          </Row>
          */}
          <Col id="footer-nav-link-container">
            <Row>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </Row>
            <Row>
              <Link to="/blog">Blog</Link>
              <Link to="/portfolio">Portfolio</Link>
            </Row>
            <Row>
              <Link to="/resume">Resumé</Link>
              <Link to="/services">Services</Link>
            </Row>
          </Col>
        </Card.Body>

        <Row>
          <Card.Text>&copy; 2024 James Huff. All rights reserved.</Card.Text>
        </Row>
      </Card>
    </Container>
  );
};

export default Footer;
