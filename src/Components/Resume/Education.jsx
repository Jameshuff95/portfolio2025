import '../../index.css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, ListGroup } from 'react-bootstrap';

const Education = () => {
  const schools = [
    {
      name: 'school 1',
      degree: 'degree 1',
      start: 'start 1',
      end: 'end 1',
    },
    {
      name: 'school 2',
      degree: 'degree 2',
      start: 'start 2',
      end: 'end 2',
    },
  ];

  return (
    <Card>
      <Card.Title>Education</Card.Title>
      <ListGroup>
        {schools.map((school, index) => (
          <ListGroup.Item
            key={index}
            className="mb-3"
            style={{
              border: '0',
              background: '0',
              fontSize: '1.3rem',
              color: 'var(--card-text)',
            }}
          >
            <Card.Text
              style={{ textAlign: 'left', fontSize: '1.3rem', fontWeight: 500 }}
            >
              {school.name}
            </Card.Text>
            <Card.Text style={{ fontSize: '1.3rem', textAlign: 'left' }}>
              {school.degree}
            </Card.Text>
            <Card.Text style={{ fontSize: '1.3rem', textAlign: 'left' }}>
              {school.start} - {school.end}
            </Card.Text>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Education;
