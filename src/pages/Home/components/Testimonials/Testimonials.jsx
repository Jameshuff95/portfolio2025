import './Testimonials.css';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: 'Author 1',
      message: 'message 1',
      date: '01/01/2024',
    },
    {
      id: 2,
      author: 'Author 2',
      message: 'message 2',
      date: '02/01/2024',
    },
    {
      id: 3,
      author: 'Author 3',
      message: 'message 3',
      date: '03/01/2024',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 3000);
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [testimonials.length]);

  return (
    <div id="testimonials-container" className="container">
      <div className="testimonial">
        <div className="message">
          <p>" {testimonials[currentTestimonial].message} "</p>
        </div>
        <div className="author-date">
          <p className="testimonial-author">
            {testimonials[currentTestimonial].author}
          </p>
          <p className="testimonial-date">
            {testimonials[currentTestimonial].date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
