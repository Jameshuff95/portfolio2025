import { useState, useEffect } from 'react';
import { Card, Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer.jsx';

import '../index.css';
import '../App.css';
import '../css/Nav.css';
import '../css/Blog.css';

const Blog = () => {
  const highlightedPosts = [
    {
      title: 'featured-1',
      text: 'Text 1',
    },
    {
      title: 'featured-2',
      text: 'Text 2',
    },
    {
      title: 'featured-3',
      text: 'Text 3',
    },
  ];

  const [currentFeaturedPost, setCurrentFeaturedPost] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedPost(
        (prevFeaturedPost) => (prevFeaturedPost + 1) % highlightedPosts.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [highlightedPosts.length]);

  return (
    <Container className="page">
      <Card className="card">
        <Card.Title className="container-title">Blog</Card.Title>
        <Carousel
          activeIndex={currentFeaturedPost}
          onSelect={(selectedIndex) => setCurrentFeaturedPost(selectedIndex)}
        >
          {highlightedPosts.map((post, index) => (
            <Carousel.Item key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.text}</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card>
      {/* Add more BlogPost components here */}
      <Footer />
    </Container>
  );
};

export default Blog;
