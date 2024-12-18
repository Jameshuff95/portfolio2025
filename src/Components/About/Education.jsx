import { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../index.css';
import '../../App.css';

const Education = () => {
  const schools = [
    {
      name: 'Capella University - Online',
      degree: 'B.S. Web Development',
      start: 'start 1',
      end: 'End 1',
    },
    {
      name: 'Southern New Hampshire University - Online',
      degree: 'B.S. Software Engineering',
      start: 'start 2',
      end: 'End 2',
    },
  ];

  return (
    <Card
      id="education-container"
      style={{
        gap: '1rem',
      }}
    >
      <Card.Title>Education</Card.Title>
      {schools.map((school, index) => {
        return (
          <Card key={index} className="card-alt">
            <Card.Title className=" card-title-alt">{school.degree}</Card.Title>
            <Card.Subtitle className="card-title-alt">
              {school.name}
            </Card.Subtitle>
            <Card.Text className="card-text-alt">
              {school.start} - {school.end}
            </Card.Text>
          </Card>
        );
      })}
    </Card>
  );
};

export default Education;
