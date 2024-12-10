import { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

import '../../../../index.css';
import '../../../../App.css';
import './Achievements.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import test from '../../../../assets/logo.png';

const Achievements = () => {
  const achievements = [
    {
      title: 'Developed a Personal Portfolio Website',
      description:
        'Created a professional and visually appealing personal portfolio website using HTML, CSS, and JavaScript. Showcased various projects, skills, and experience, effectively demonstrating my capabilities to potential employers.',
    },
    {
      title: 'Managing GitHub Repositories',
      description:
        'Maintained several active repositories on GitHub, contributing to open-source projects and collaborating with other developers. Implemented version control practices, resolved issues, and regularly updated documentation to ensure project clarity and continuity.',
    },
    {
      title: 'Obtained Certifications',
      description:
        'Earned industry-recognized certifications from platforms like Coursera and Udemy, covering front-end and back-end technologies. Demonstrated commitment to continuous learning and staying current with the latest web development trends and practices.',
    },
  ];
  return (
    <Card id="achievements-container" className="container border-0">
      <Card.Body id="achievement-body">
        <Card.Title className="container-title">Achievements</Card.Title>
        {achievements.map((achievement, index) => (
          <Card key={index} className="achievement-card">
            <Card.Title>{achievement.title}</Card.Title>
            <Card.Text>{achievement.description}</Card.Text>
          </Card>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Achievements;
