/*
  Showcases your work in-depth. Here, you can provide detailed case studies, more images, and descriptions of your projects, including challenges and achievements.
*/

import '../index.css';
import '../App.css';
import '../Components/Nav.jsx';

import { Card, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer.jsx';

const Portfolio = () => {
  // prettier-ignore
  const projects = [
    {
      name: 'Project 1',
      technology: 'Technology 1',
      description: 'Description 1'
    },
    {
      name: 'Project 2',
      technology: 'Technology 2',
      description: 'Description 2'
    },
    {
      name: 'Project 3',
      technology: 'Technology 3',
      description: 'Description 3'
    },
  ];

  return (
    <Container className="page">
      {projects.map((project, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>Price: {project.technology}</Card.Text>
            <Card.Text>Price: {project.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Footer />
    </Container>
  );
};

export default Portfolio;
