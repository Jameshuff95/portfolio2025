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
      title: 'Achievement 1',
      date: '01-01-2024',
      description: 'Description 1',
    },
    {
      title: 'Achievement 2',
      date: '01-01-2024',
      description: 'Description 2',
    },
    {
      title: 'Achievement 3',
      date: '01-01-2024',
      description: 'Description 3',
    },
  ];
  return (
    <Card>
      <Card.Body>
        <Card.Title className="container-title-alt">Achievements</Card.Title>
        {achievements.map((achievement, index) => {
          return (
            <Card key={index} className="border-0">
              <Card.Title>{achievement.title}</Card.Title>
              <Card.Text>{achievement.date}</Card.Text>
              <Card.Text>{achievement.description}</Card.Text>
            </Card>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default Achievements;
