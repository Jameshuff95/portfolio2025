import CallToAction from '../CallToAction/CallToAction';

import './Hero.css';
import '../../../../index.css';
const Hero = () => {
  return (
    <div className="container">
      <h2>My name is James Huff.</h2>
      <div id="hero-center">
        <img
          src="../../../../assets/logo.png"
          alt="An image of James."
          id="heroImg"
        />
        <CallToAction />
      </div>
      <p>
        I am inclined to prioritize functionality and simplicity, as they offer
        a more straightforward and effective approach compared to the
        unnecessary complications of complexity.
      </p>
    </div>
  );
};

export default Hero;
