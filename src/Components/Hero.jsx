import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../assets/me.png';

import '../css/About.css';
import '../index.css';
import '../App.css';

const Hero = () => {
  return (
    <Card>
      <Row className="justify-content-center">
        <Col xs={8} md={4}>
          <Card.Img
            src={MeImg}
            alt="An image of James."
            id="heroImg"
            className="img-fluid"
            style={{
              borderRadius: '50%',
              backgroundColor: 'var(--nav-bg)',
              border: '1px solid var(--nav-bg)',
              boxShadow: 'inset 0 0 1rem var(--card-text)',
              margin: '1rem auto 0',
            }}
          />
        </Col>
      </Row>

      <Card.Body>
        <Card.Title>My name is James Huff.</Card.Title>
        <Card.Text>
          I am inclined to prioritize functionality and simplicity, as they
          offer a more straightforward and effective approach compared to the
          unnecessary complications of complexity.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Hero;
