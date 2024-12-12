import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../assets/me.png';

import '../css/About.css';
import '../index.css';

const Hero = () => {
  return (
    <Card className="card">
      <Card.Img
        variant="top"
        src={MeImg}
        alt="An image of James."
        id="heroImg"
      />
      <Card.Body>
        <Card.Title className="container-title">
          My name is James Huff.
        </Card.Title>
        <Card.Text className="card-text">
          I am inclined to prioritize functionality and simplicity, as they
          offer a more straightforward and effective approach compared to the
          unnecessary complications of complexity.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Hero;
