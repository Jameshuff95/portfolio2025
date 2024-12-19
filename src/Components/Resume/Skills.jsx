import '../../index.css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Skills = () => {
  const skills = ['skill 1', 'skill 2', 'skill 3'];
  return (
    <Card>
      <Card.Title>Skills</Card.Title>
      <ListGroup>
        {skills.map((skill, index) => (
          <ListGroupItem
            key={index}
            style={{
              border: '0',
              background: '0',
              color: 'var(--card-text)',
              fontSize: '1.3rem',
            }}
          >
            {skill}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Skills;
