import { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

import '../../../../index.css';
import '../../../../App.css';
import './Intro.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import test from '../../../../assets/logo.png';

const Intro = () => {
  return (
    <div id="intro" className="container">
      <Card id="intro-card" className="border-0">
        <Card.Title className="container-title">More about who I am</Card.Title>
        <Card.Text>
          Hi there! I'm [Your Name], a passionate [Your Profession, e.g., web
          developer, graphic designer, etc.] with a love for creating innovative
          and impactful solutions. With [X] years of experience in the industry,
          I specialize in [mention your key skills or technologies, e.g.,
          React.js, graphic design, UX/UI, etc.]. My journey in [your field]
          began when [share a brief story about how you got started]. Since
          then, I've had the pleasure of working on a variety of exciting
          projects that have allowed me to hone my skills and push the
          boundaries of creativity and technology. When I'm not [your
          professional activity], you can find me [mention a hobby or personal
          interest], which helps me stay inspired and bring fresh ideas to my
          work. I'm always eager to collaborate on new projects and bring
          innovative ideas to life. Feel free to explore my portfolio and get in
          touch if you'd like to work together or just say hello!
        </Card.Text>
      </Card>
    </div>
  );
};

export default Intro;
