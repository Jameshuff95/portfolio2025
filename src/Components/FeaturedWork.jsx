import { useState } from 'react';

import { Carousel, Card, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';
import '../index.css';

import FeaturedImg1 from '../assets/logo-1.png';
import FeaturedImg2 from '../assets/logo-2.png';
import FeaturedImg3 from '../assets/logo-3.png';

const FeaturedWork = () => {
  const featuredProjects = [
    {
      title: 'Project 1',
      technology: 'Tech 1',
      img: FeaturedImg1,
      imgAlt: 'image alt 1',
      description: 'Description 1',
    },
    {
      title: 'Project 2',
      technology: 'Tech 2',
      img: FeaturedImg2,
      imgAlt: 'image alt 2',
      description: 'Description 2',
    },
    {
      title: 'Project 3',
      technology: 'Tech 3',
      img: FeaturedImg3,
      imgAlt: 'image alt 3',
      description: 'Description 3',
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  return (
    <Card className="card">
      <Card.Title className="container-title-alt">Featured Work</Card.Title>
      <Carousel
        activeIndex={currentProject}
        onSelect={(selectedIndex) => setCurrentProject(selectedIndex)}
      >
        {featuredProjects.map((project, index) => (
          <Carousel.Item key={index}>
            <Card className="card-alt">
              <Card.Img variant="top" src={project.img} alt={project.imgAlt} />
              <Card.Body>
                <Card.Title className="container-title">
                  {project.title}
                </Card.Title>
                <Card.Subtitle className="container-title">
                  {project.technology}
                </Card.Subtitle>
                <Card className="card-alt-2">
                  <Card.Text className="card-text-alt-2">
                    {project.description}
                  </Card.Text>
                </Card>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
      {/*<CallToAction */}
    </Card>
  );
};

export default FeaturedWork;
