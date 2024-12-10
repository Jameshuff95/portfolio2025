import { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

import '../../../../index.css';
import '../../../../App.css';
import './Certifications.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import test from '../../../../assets/logo.png';

const Certfications = () => {
  const certifications = [
    {
      title: 'certification 1',
      img: test,
      alt: 'image alt 1',
    },
    {
      title: 'certification 2',
      img: test,
      alt: 'image alt 2',
    },
    {
      title: 'certification 3',
      img: test,
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
    <Card id="certifications-container" className="border-0">
      <Card.Title className="container-title">Certifications</Card.Title>
      <Carousel
        activeIndex={currentCertification}
        onSelect={(selectedIndex) => setCurrentCertification(selectedIndex)}
      >
        {certifications.map((certification, index) => (
          <Carousel.Item key={index}>
            <Card id="certification-card" className="text-center border-0">
              <Card.Body className="certification-body">
                <Card.Img
                  variant="top"
                  src={certification.img}
                  alt={certification.alt}
                />
                <Card.Title className="container-title">
                  {certification.title}
                </Card.Title>
                <Button variant="primary">View pdf</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default Certfications;
