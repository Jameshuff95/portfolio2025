import React, { useEffect } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EducationMobile = ({
  schools,
  currentEducation,
  setCurrentEducation,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEducation(
        (prevEducation) => (prevEducation + 1) % schools.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentEducation, setCurrentEducation]);

  return (
    <Card>
      <Card.Title>Education</Card.Title>
      <Carousel
        activeIndex={currentEducation}
        onSelect={(selectedIndex) => setCurrentEducation(selectedIndex)}
      >
        {schools.map((school, index) => (
          <Carousel.Item key={index}>
            <Card
              className="card-alt d-flex flex-column justify-content-evenly"
              style={{
                width: '95%',
                margin: 'auto',
                padding: '2%',
                height: '80vh',
              }}
            >
              <Card.Title>{school.degree}</Card.Title>
              <Card.Text>{school.name}</Card.Text>
              <Card.Text>
                {school.start} - {school.end}
              </Card.Text>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default EducationMobile;
