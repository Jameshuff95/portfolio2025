import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import '../../index.css';

import MobileOrTabletView from './FeaturedMobile.jsx';
import DeskOrLaptopView from './FeaturedDesktop.jsx';

import FeaturedImg1 from '../../assets/logo-1.png';
import FeaturedImg2 from '../../assets/logo-2.png';
import FeaturedImg3 from '../../assets/logo-3.png';

const featuredProjects = [
  // Tech 1
  {
    title: 'Project 1',
    technology: 'Tech 1',
    img: FeaturedImg1,
    imgAlt: 'image alt 1',
    description: 'Description 1',
  },
  // Tech 2
  {
    title: 'Project 2',
    technology: 'Tech 2',
    img: FeaturedImg2,
    imgAlt: 'image alt 2',
    description: 'Description 2',
  },
  // Tech 3
  {
    title: 'Project 3',
    technology: 'Tech 3',
    img: FeaturedImg3,
    imgAlt: 'image alt 3',
    description: 'Description 3',
  },
];

const FeaturedWork = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject(
        (prevProject) => (prevProject + 1) % featuredProjects.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isMobileOrTablet = useMediaQuery({ maxWidth: 551 });
  const isDeskOrLaptop = useMediaQuery({ minWidth: 551 });

  return (
    <Container style={{ zIndex: '1' }}>
      <Card.Title className="text-center">Featured Work</Card.Title>
      {isMobileOrTablet && (
        <MobileOrTabletView
          featuredProjects={featuredProjects}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      )}
      {isDeskOrLaptop && (
        <DeskOrLaptopView featuredProjects={featuredProjects} />
      )}
    </Container>
  );
};

export default FeaturedWork;
