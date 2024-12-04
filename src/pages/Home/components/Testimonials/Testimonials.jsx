import './Testimonials.css';
import { useState } from 'react';

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

  const nextTestimonial = () => {
    setCurrentTestimonial(
      (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prevTestimonial) =>
        (prevTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div id="testimonials-container" className="container">
      <h3>Testimonials</h3>

      <div className="testimonial">
        <h3 className="author"></h3>
        <div className="message">
          <p className="message-top">
            " {testimonials[currentTestimonial].message} "
          </p>
          <div className="message-bottom">
            <p className="testimonial-author">
              {testimonials[currentTestimonial].author}
            </p>
            <p className="testimonial-date">
              {testimonials[currentTestimonial].date}
            </p>
          </div>
        </div>
      </div>
      <div id="arrow-container">
        <i className="bi bi-arrow-left" onClick={prevTestimonial} />
        <i className="bi bi-arrow-right" onClick={nextTestimonial} />
      </div>
    </div>
  );
};

export default Testimonials;
