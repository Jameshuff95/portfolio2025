import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../index.css';
import '../../App.css';

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
    <Card
      id="hobbies-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Card.Title>Personal Interests</Card.Title>
      {interests.map((interest, index) => {
        return (
          <Card key={index} className="card-alt">
            <Card.Title className="card-title-alt">{interest.name}</Card.Title>
            <Card.Text className="card-text-alt">
              {interest.description}
            </Card.Text>
          </Card>
        );
      })}
    </Card>
  );
};

export default PersonalInterests;
