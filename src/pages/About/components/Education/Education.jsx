import { useState, useEffect } from 'react';
import { Carousel, Card, Container, Button } from 'react-bootstrap';

import '../../../../index.css';
import '../../../../App.css';
import './Education.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import test from '../../../../assets/logo.png';

const Education = () => {
  const schools = [
    {
      name: 'Capella University - Online',
      degree: 'B.S. Web Development',
      start: 'start 1',
      end: 'End 1',
    },
    {
      name: 'Southern New Hampshire University',
      degree: 'B.S. Software Engineering',
      start: 'start 2',
      end: 'End 2',
    },
  ];

  return (
    <Card>
      <Card.Body>
        <Card.Title className="container-title-alt">Education</Card.Title>
        {schools.map((school, index) => {
          return (
            <Card key={index}>
              <Card.Title>{school.name}</Card.Title>
              <Card.Subtitle>{school.name}</Card.Subtitle>
              <Card.Text>
                {school.start} - {school.end}
              </Card.Text>
            </Card>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default Education;
