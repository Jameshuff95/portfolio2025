import { useState, useEffect } from 'react';
import { Carousel, Container, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';

import '../index.css';
import '../App.css';

const Certfications = () => {
  const certifications = [
    {
      title: 'certification 1',
      img: cert1,
      alt: 'image alt 1',
    },
    {
      title: 'certification 2',
      img: cert2,
      alt: 'image alt 2',
    },
    {
      title: 'certification 3',
      img: cert3,
      alt: 'image alt 3',
    },
  ];

  const [currentCertification, setCurrentCertification] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertification(
        (prevCertification) => (prevCertification + 1) % certifications.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [certifications.length]);

  return (
    <Container>
      <Card.Title className="text-center">Certifications</Card.Title>
      <Carousel
        activeIndex={currentCertification}
        onSelect={(selectedIndex) => setCurrentCertification(selectedIndex)}
      >
        {certifications.map((certification, index) => (
          <Carousel.Item key={index}>
            <Card style={{ marginTop: '2rem' }}>
              <Card.Img
                variant="top"
                src={certification.img}
                alt={certification.alt}
              />
              <Card.Title className="text-center">
                {certification.title}
              </Card.Title>
              <Button
                variant="dark"
                className="border-white col-10 align-self-center"
                style={{ fontSize: '2rem' }}
              >
                View pdf
              </Button>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Certfications;
