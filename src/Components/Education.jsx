import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

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
    <Card className="container">
      <Card.Title className="container-title">Education</Card.Title>
      {schools.map((school, index) => {
        return (
          <Card key={index} className="card">
            <Card.Title className="card-text">{school.name}</Card.Title>
            <Card.Subtitle className="card-text">{school.name}</Card.Subtitle>
            <Card.Text className="card-text">
              {school.start} - {school.end}
            </Card.Text>
          </Card>
        );
      })}
    </Card>
  );
};

export default Education;
