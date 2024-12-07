
import { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeaturedWork.css';

import Img from '../../../../assets/logo.png';

const FeaturedWork = () => {
  const featuredProjects = [
    {
      title: 'Project 1',
      technology: 'Tech 1',
      img: Img,
      imgAlt: 'image alt 1',
      description: 'Description 1',
    },
    {
      title: 'Project 2',
      technology: 'Tech 2',
      img: Img,
      imgAlt: 'image alt 2',
      description: 'Description 2',
    },
    {
      title: 'Project 3',
      technology: 'Tech 3',
      img: Img,
      imgAlt: 'image alt 3',
      description: 'Description 3',
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div id="featured-work-container" className="container">
      <h3 className="container-title">
        Featured Work
      </h3>
      <Carousel 
        activeIndex={currentProject} 
        onSelect={(selectedIndex) => 
          setCurrentProject(selectedIndex)
        }>
        {featuredProjects.map((project, index) => (
          <Carousel.Item key={index}>
            <Card className="project-card text-center border-0">
              <Card.Img 
                variant="top" 
                src={project.img} 
                alt={project.imgAlt} 
              />
              <Card.Body className="featured-item-body border-0">
                <Card.Title className="featured-title border-0">
                  {project.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 card-technology border-0">
                  {project.technology}
                </Card.Subtitle>
                <Card.Text className="project-description border-0">
                  {project.description}
                </Card.Text>
                <Button variant="primary" className="learn-more border-0">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedWork;
