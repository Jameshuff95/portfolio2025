import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer.jsx';

import '../index.css';
import '../App.css';
import '../css/Nav.css';

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

  return (
    <Container className="page">
      <Card>
        <Card.Title>Blog</Card.Title>
        {highlightedPosts.map((post, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Card>
      {/* Add more BlogPost components here */}
      <Footer />
    </Container>
  );
};

export default Blog;
