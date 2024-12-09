import '../../../../index.css';
import '../../../../App.css';
import './Mission.css';

import { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import test from '../../../../assets/logo.png';

const Mission = () => {
  return (
    <Card className="container">
      <Card.Title className="container-title">My Mission</Card.Title>
      <Card.Text>
        My mission is to create innovative and impactful solutions that blend
        creativity with technology. I am dedicated to leveraging my skills and
        experience in [your field, e.g., web development, graphic design, etc.]
        to deliver high-quality, user-centric projects that exceed expectations.
        I believe in continuous learning and adaptability, striving to push the
        boundaries of what's possible while maintaining a commitment to
        excellence and integrity. My goal is to collaborate with like-minded
        individuals and organizations to bring visionary ideas to life, making a
        positive and meaningful difference in the digital landscape.
      </Card.Text>
    </Card>
  );
};

export default Mission;
