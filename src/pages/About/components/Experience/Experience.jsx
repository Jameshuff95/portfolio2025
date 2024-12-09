import { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

import '../../../../index.css';
import '../../../../App.css';
import './Experience.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import test from '../../../../assets/logo.png';

const Experience = () => {
  return (
    <Card className="container">
      <Card.Title className="container-title">Experience</Card.Title>
      <Card.Text>
        With over [X] years of experience in the [your field, e.g., tech,
        design, etc.] industry, I have developed a robust skill set and a keen
        eye for detail. I have had the privilege of working with diverse clients
        and on various projects, from [mention a specific type of project, e.g.,
        web applications, graphic design campaigns, etc.], to [another type of
        project, e.g., mobile apps, branding initiatives, etc.]. My expertise
        lies in [mention key skills or technologies, e.g., React.js, UX/UI
        design, Python programming], and I am passionate about leveraging these
        skills to create innovative solutions that address client needs and
        exceed expectations. I thrive in dynamic environments and enjoy
        collaborating with cross-functional teams to bring ideas to life.
        Throughout my career, I have been recognized for my ability to [mention
        specific achievements, e.g., deliver high-quality work under tight
        deadlines, lead successful project teams, etc.], and I continuously seek
        opportunities to grow and learn in my field. My commitment to excellence
        and my drive for innovation have been the cornerstone of my professional
        journey.
      </Card.Text>
    </Card>
  );
};

export default Experience;
