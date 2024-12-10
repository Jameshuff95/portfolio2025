import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../css/Nav.css';

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

const FeaturedPosts = () => {
  return (
    <Container className="page">
      {highlightedPosts.map((post, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default FeaturedPosts;
