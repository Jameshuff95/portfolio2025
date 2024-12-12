import { useState, useEffect } from 'react';

import { Carousel, Card, Button } from 'react-bootstrap';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject(
        (prevProject) => (prevProject + 1) % featuredProjects.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <Card className="card">
      <Card.Title className="container-title">Featured Work</Card.Title>
      <Carousel
        activeIndex={currentProject}
        onSelect={(selectedIndex) => setCurrentProject(selectedIndex)}
      >
        {featuredProjects.map((project, index) => (
          <Carousel.Item key={index}>
            <Card className="featured-project">
              <Card.Img variant="top" src={project.img} alt={project.imgAlt} />
              <Card.Title className="container-title-alt">
                {project.title}
              </Card.Title>
              <Card.Subtitle className="container-title-alt">
                {project.technology}
              </Card.Subtitle>
              <Card className="card featured-description">
                <Card.Text className="card-text-alt-2 featured-message">
                  {project.description}
                </Card.Text>
              </Card>
              <Button variant="primary">Learn More</Button>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default FeaturedWork;
