import { useState, useEffect } from 'react';

import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
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
      <Card.Title>Featured Work</Card.Title>
      <Carousel
        activeIndex={currentProject}
        onSelect={(selectedIndex) => setCurrentProject(selectedIndex)}
      >
        {featuredProjects.map((project, index) => (
          <Carousel.Item key={index}>
            <Card
              className="card-alt"
              style={{
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              <Row className="justify-content-center">
                <Col xs={10} md={4}>
                  <Card.Img
                    variant="top"
                    src={project.img}
                    alt={project.imgAlt}
                    className="featured-image"
                  />
                </Col>
              </Row>

              <Card.Title className="card-title-alt">
                {project.title}
              </Card.Title>
              <Card.Subtitle className="card-title-alt text-center">
                {project.technology}
              </Card.Subtitle>
              <Card>
                <Card.Text
                  style={{
                    textAlign: 'left',
                    padding: '2%',
                    height: '5rem',
                  }}
                >
                  {project.description}
                </Card.Text>
              </Card>
              <Button variant="dark">Learn More</Button>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default FeaturedWork;
