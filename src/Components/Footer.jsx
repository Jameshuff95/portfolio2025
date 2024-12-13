import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';

const Footer = () => {
  return (
    <Container id="footer">
      <Row id="footer-top">
        <Row className="footer-top-section">
          <i className="bi bi-envelope" />
          <Card.Text className="card-text-alt">
            jameshuffdev@gmail.com
          </Card.Text>
        </Row>
        <Row className="footer-top-section">
          <i className="bi bi-phone" />
          <Card.Text className="card-text-alt">+1-859-377-0700</Card.Text>
        </Row>
      </Row>

      <hr />
      <Col>
        <Row>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resume">Resumé</Link>
          <Link to="/services">Services</Link>
        </Row>
      </Col>
      <hr />
      <Card.Text className="card-text-alt text-center">
        &copy; 2024 James Huff. All rights reserved.
      </Card.Text>
    </Container>
  );
};

export default Footer;
