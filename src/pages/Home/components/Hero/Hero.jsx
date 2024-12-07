import CallToAction from '../CallToAction/CallToAction';
import './Hero.css';
import '../../../../index.css';
import HeroImg from '../../../../assets/logo.png';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  const renderIntro = () => {
    return (
      <Card id="intro-statement">
        <Card.Title id="hero-title">My name is James Huff.</Card.Title>
        <Card.Text id="hero-text">
          I am inclined to prioritize functionality and simplicity, as they
          offer a more straightforward and effective approach compared to the
          unnecessary complications of complexity.
        </Card.Text>
        <CallToAction />
      </Card>
    );
  };

  return (
    <div id="hero-container" className="container">
      <Card id="hero" className="border-0">
        <Card.Img variant="top" src={HeroImg} alt="An image of James." id="heroImg" />
        <Card.Body>
          {renderIntro()}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Hero;
