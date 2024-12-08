import './Hero.css';
import '../../../../index.css';
import MeImg from '../../../../assets/me.png';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div id="hero-container" className="container">
      <Card id="hero" className="border-0">
        <Card.Img
          variant="top"
          src={MeImg}
          alt="An image of James."
          id="heroImg"
        />
        <Card.Body id="hero-body">
          <Card.Title id="hero-title">My name is James Huff.</Card.Title>
          <Card.Text id="intro-statement">
            I am inclined to prioritize functionality and simplicity, as they
            offer a more straightforward and effective approach compared to the
            unnecessary complications of complexity.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Hero;
