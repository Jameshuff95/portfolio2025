import { useState, useEffect } from 'react';
import { Carousel, Card, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../index.css';
import '../../App.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: 'Sarah K., Marketing Director',
      message:
        'Working with James was an absolute pleasure. His expertise transformed our outdated website into a sleek, modern, and user-friendly platform. The attention to detail and responsiveness was top-notch. I highly recommend James for anyone looking to elevate their online presence.',
      date: '01/15/2024',
    },
    {
      id: 2,
      author: 'David L., CEO of Tech Innovators',
      message:
        'James exceeded our expectations with his web development skills. He understood our vision perfectly and delivered a website that is both aesthetically pleasing and highly functional. The project was completed on time and within budget. Truly a professional!',
      date: '05/14/2024',
    },
    {
      id: 3,
      author: 'Emma R., Small Business Owner',
      message:
        'We are thrilled with the website James developed for us. His ability to combine creativity with technical proficiency resulted in a stunning and easy-to-navigate site. Our customer engagement has significantly improved thanks to his work. James is a game-changer!',
      date: '11/24/2024',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 5000); // Changed to 5 seconds for better readability
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [testimonials.length]);

  // prettier-ignore
  return (
    <Container className="d-flex flex-column" style={{ margin: '0 0 1rem' }}>
      <Card.Title>Testimonials</Card.Title>
      <Col className="card-alt d-flex flex-column" style={{ borderRadius: '5px', padding: '6% 2% 0', minHeight: '100%' }} >
        <Carousel activeIndex={currentTestimonial} onSelect={(selectedIndex) => setCurrentTestimonial(selectedIndex)} style={{ height: '82vh' }}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index} style={{ height: '81vh' }}>
              <Col style={{ height: '100%' }}>
                <Col className="d-flex flex-column justify-content-evenly" style={{ height: '80%' }}>
                  <Card.Text>{`"${testimonial.message}"`}</Card.Text>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center" style={{ height: '20%' }}
                >
                  <Card.Text style={{ padding: '0', margin: '0'}}>
                    {testimonial.author}
                  </Card.Text>
                  <Card.Text style={{}}>{`- ${testimonial.date}`}</Card.Text>
                </Col>
              </Col>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Container>
  );
};

export default Testimonials;
