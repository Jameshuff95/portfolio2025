import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../index.css';
import '../../App.css';

const WorkExperience = () => {
  const workExperience = [
    {
      title: 'Job 1',
      company: 'Company 1',
      responsibilities: [
        'responsibility 1',
        'responsibility 2',
        'responsibility 3',
      ],
      achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
    },
    {
      title: 'Job 2',
      company: 'Company 2',
      responsibilities: [
        'responsibility 1',
        'responsibility 2',
        'responsibility 3',
      ],
      achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
    },
    {
      title: 'Job 3',
      company: 'Company 3',
      responsibilities: [
        'responsibility 1',
        'responsibility 2',
        'responsibility 3',
      ],
      achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
    },
  ];

  return (
    <Card>
      <Card.Title>Professional Summary</Card.Title>
      {workExperience.map((job, jobIndex) => (
        <Card key={jobIndex} className="mb-3">
          <Card.Text
            style={{ textAlign: 'left', fontWeight: '500', fontSize: '1.3rem' }}
          >
            {job.title}
          </Card.Text>
          <Card.Text
            style={{ textAlign: 'left', fontWeight: '500', fontSize: '1.3rem' }}
          >
            {job.company}
          </Card.Text>
          <ListGroup>
            {job.responsibilities.map((responsibility, respIndex) => (
              <ListGroupItem
                className="border-0 mb-1"
                key={respIndex}
                style={{
                  background: 'none',
                  color: 'var(--card-text)',
                  fontSize: '1.3rem',
                }}
              >
                - {responsibility}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card>
      ))}
    </Card>
  );
};

export default WorkExperience;
