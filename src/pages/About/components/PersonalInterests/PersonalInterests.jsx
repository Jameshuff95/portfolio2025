import { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

import '../../../../index.css';
import '../../../../App.css';
import './PersonalInterests.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import test from '../../../../assets/logo.png';

const PersonalInterests = () => {
  const interests = [
    {
      name: 'Hobby 1',
      description: 'Hobby Description 1',
    },
    {
      name: 'Hobby 2',
      description: 'Hobby Description 2',
    },
    {
      name: 'Hobby 3',
      description: 'Hobby Description 3',
    },
  ];

  return (
    <Card id="hobby-container" className="border-0">
      <Card.Body id="hobby-body">
        <Card.Title className="container-title">Personal Interests</Card.Title>
        {interests.map((interest, index) => {
          return (
            <Card key={index} className="hobby-card">
              <Card.Title>{interest.name}</Card.Title>
              <Card.Subtitle>{interest.description}</Card.Subtitle>
            </Card>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default PersonalInterests;
