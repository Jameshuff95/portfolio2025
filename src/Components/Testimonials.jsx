import { useState, useEffect } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../css/About.css';

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

  return (
    <Card className="card">
      <Card.Title className="container-title">Testimonials</Card.Title>
      <Carousel
        activeIndex={currentTestimonial}
        onSelect={(selectedIndex) => setCurrentTestimonial(selectedIndex)}
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <Card className="card testimonial-card">
              <Card.Text className="card-text-alt">{`"${testimonial.message}"`}</Card.Text>
              <Card.Text className="card-text-alt">
                {testimonial.author}
              </Card.Text>
              <Card.Text className="card-text-alt">{`- ${testimonial.date}`}</Card.Text>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default Testimonials;
