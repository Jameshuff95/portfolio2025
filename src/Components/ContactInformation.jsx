import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

const ContactInformation = () => {
  return (
    <Card className="card-general">
      <Card.Title className="container-title">Contact Me</Card.Title>

      <Card className="contact-grid">
        <Link to="#" className="home-social">
          <i id="github" className="bi bi-github" />
          <legend>Github</legend>
        </Link>

        <Link to="#" className="home-social">
          <i id="linkedin" className="bi bi-linkedin" />
          <legend>Linkedin</legend>
        </Link>

        <Link to="#" className="home-social">
          <i id="facebook" className="bi bi-facebook" />
          <legend>Facebook</legend>
        </Link>
        <Link to="#" className="home-social">
          <i id="instagram" className="bi bi-instagram" />
          <legend>Instagram</legend>
        </Link>

        <Link to="#" className="home-social">
          <i id="reddit" className="bi bi-reddit" />
          <legend>Reddit</legend>
        </Link>

        <Link to="#" className="home-social">
          <i id="dribbble" className="bi bi-dribbble" />
          <legend>Dribbble</legend>
        </Link>
        <Link to="#" className="home-social">
          <i id="youtube" className="bi bi-youtube" />
          <legend>Youtube</legend>
        </Link>

        <Link to="#" className="home-social">
          <i id="stack-overflow" className="bi bi-stack-overflow" />
          <legend>Stack Overflow</legend>
        </Link>

        <Link to="#" className="home-social">
          <i id="x2" className="bi bi-twitter-x" />
          <legend>X</legend>
        </Link>
      </Card>
    </Card>
  );
};

export default ContactInformation;
