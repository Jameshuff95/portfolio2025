import '../../index.css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: 'project 1',
      technology: 'tech 1',
      description: 'desc 1',
      link: 'link 1',
    },
    {
      title: 'project 2',
      technology: 'tech 2',
      description: 'desc 2',
      link: 'link 2',
    },
    {
      title: 'project 3',
      technology: 'tech 3',
      description: 'desc 3',
      link: 'link 3',
    },
  ];

  return (
    <Card>
      <Card.Title>Projects</Card.Title>
      <ListGroup>
        {projects.map((project, index) => (
          <ListGroup.Item key={index} style={{ border: '0', background: '0' }}>
            <Card.Text
              style={{
                textAlign: 'left',
                fontSize: '1.3rem',
                fontWeight: '500',
              }}
            >
              {project.title}
            </Card.Text>
            <Card.Text style={{ textAlign: 'left', fontSize: '1.3rem' }}>
              {project.technology}
            </Card.Text>
            <Card.Text style={{ textAlign: 'left', fontSize: '1.3rem' }}>
              {project.description}
            </Card.Text>
            <Card.Text style={{ textAlign: 'left', fontSize: '1.3rem' }}>
              {project.link}
            </Card.Text>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Projects;
