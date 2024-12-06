import CallToAction from '../CallToAction/CallToAction';

import './Hero.css';
import '../../../../index.css';

import HeroImg from '../../../../assets/logo.png';

const Hero = () => {
  const renderIntro = () => {
    return (
      <>
        <h3>My name is James Huff.</h3>
        <p>
          I am inclined to prioritize functionality and simplicity, as they
          offer a more straightforward and effective approach compared to the
          unnecessary complications of complexity.
        </p>
        <CallToAction />
      </>
    );
  };

  return (
    <div id="hero-container" className="container">
      <img src={HeroImg} alt="An image of James." id="heroImg" />
      {renderIntro()}
    </div>
  );
};

export default Hero;
