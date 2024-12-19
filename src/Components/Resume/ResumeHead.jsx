import React from 'react';
import { Card } from 'react-bootstrap';

const ResumeHead = () => {
  const info = {
    name: 'James Huff',
    position: 'Web Developer / Software Engineering Student',
    phone: '+1-859-377-0700',
    email: 'jameshuffdev@gmail.com',
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Subtitle style={{ textAlign: 'center' }}>
          {info.position}
        </Card.Subtitle>
        <Card.Text>{info.phone}</Card.Text>
        <Card.Text>{info.email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResumeHead;
