import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

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
    <Card className="container">
      <Card.Body className="body">
        <Card.Title className="container-title">Personal Interests</Card.Title>
        {interests.map((interest, index) => {
          return (
            <Card key={index} className="card">
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
