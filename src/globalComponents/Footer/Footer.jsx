import './Footer.css';
import '../../index.css';
import '../../pages/Home/components/ContactInformation/ContactInformation.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <Container id="footer-container" className="border-0 flex-column">
      <Row className="border-0">
        <h3 id="footer-title" className="container-title">
          Dont forget to reach out!
        </h3>
        <Nav id="footer-socials-nav">
          <Col md={6} className="footer-social-column">
            <Nav.Link href="#" className="footer-social">
              <i id="github" className="bi bi-github" />
              <legend>Github</legend>
            </Nav.Link>

            <Nav.Link href="#" className="footer-social">
              <i id="linkedin" className="bi bi-linkedin" />
              <legend>Linkedin</legend>
            </Nav.Link>

            <Nav.Link href="#" className="footer-social">
              <i id="facebook" className="bi bi-facebook" />
              <legend>Facebook</legend>
            </Nav.Link>
          </Col>

          <Col md={6} className="footer-social-column">
            <Nav.Link href="#" className="footer-social">
              <i id="instagram" className="bi bi-instagram" />
              <legend>Instagram</legend>
            </Nav.Link>
            <Nav.Link href="#" className="footer-social">
              <i id="reddit" className="bi bi-reddit" />
              <legend>Reddit</legend>
            </Nav.Link>

            <Nav.Link href="#" className="footer-social">
              <i id="stack-overflow" className="bi bi-stack-overflow" />
              <legend>Stack Overflow</legend>
            </Nav.Link>
          </Col>

          <Col md={6} className="footer-social-column">
            <Nav.Link href="#" className="footer-social">
              <i id="dribbble" className="bi bi-dribbble" />{' '}
              <legend>Dribbble</legend>
            </Nav.Link>

            <Nav.Link href="#" className="footer-social">
              <i id="youtube" className="bi bi-youtube" />
              <legend>Youtube</legend>
            </Nav.Link>

            <Nav.Link href="#" className="footer-social">
              <i id="x2" className="bi bi-twitter-x" />
              <legend>X</legend>
            </Nav.Link>
          </Col>
        </Nav>
      </Row>

      <Row id="footer-bottom">
        <Col className="text-center">
          <p>© James Huff 2024. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
