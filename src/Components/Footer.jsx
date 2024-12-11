import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../css/Footer.css';

const Footer = () => {
  return (
    <Container>
      <Card className="card-alt">
        <Card.Title className="container-title">Contact</Card.Title>
        <Row className="footer-contact-row">
          <i className="bi bi-envelope" />
          <Card.Text className="footer-contact-text">
            jameshuffdev@gmail.com
          </Card.Text>
        </Row>
        <Row className="footer-contact-row">
          <i className="bi bi-phone" />
          <Card.Text className="footer-contact-text">+1-859-377-0700</Card.Text>
        </Row>
        <Row>
          <Card.Title className="container-title">Quick Links</Card.Title>
          <Col className="footer-quick-links-col">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </Col>
          <Col className="footer-quick-links-col">
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resumé</Link>
            <Link to="/services">Services</Link>
          </Col>
        </Row>
        <Row>
          <Card.Title className="container-title">Follow Me</Card.Title>
          <Col className="footer-follow-me-col">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </Col>
          <Col className="footer-follow-me-col">
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resumé</Link>
            <Link to="/services">Services</Link>
          </Col>
        </Row>
        <Row>
          <Card.Text>&copy; 2024 James Huff. All rights reserved.</Card.Text>
        </Row>
      </Card>
    </Container>
  );
};

export default Footer;
