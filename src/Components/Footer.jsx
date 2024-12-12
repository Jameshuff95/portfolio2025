import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../css/Footer.css';

const Footer = () => {
  return (
    <Container className="card-alt">
      <Card className="card">
        <Col className="footer-contact-row">
          <i className="bi bi-envelope" />
          <Card.Text className="card-text-alt">
            jameshuffdev@gmail.com
          </Card.Text>
        </Col>
      </Card>
      <Card className="card">
        <Col className="footer-contact-row">
          <i className="bi bi-phone" />
          <Card.Text className="card-text-alt">+1-859-377-0700</Card.Text>
        </Col>
      </Card>
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
      <Row>
        <Card.Text className="card-text-alt text-center">
          &copy; 2024 James Huff. All rights reserved.
        </Card.Text>
      </Row>
    </Container>
  );
};

export default Footer;
