import { useState, useEffect } from 'react';
import {
  Card,
  Container,
  Carousel,
  Row,
  Col,
  Button,
  ListGroup,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

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

  const recentPosts = [
    {
      id: 1,
      title: 'Recent Post 1',
      excerpt: 'Excerpt from recent post 1...',
    },
    {
      id: 2,
      title: 'Recent Post 2',
      excerpt: 'Excerpt from recent post 2...',
    },
    {
      id: 3,
      title: 'Recent Post 3',
      excerpt: 'Excerpt from recent post 3...',
    },
  ];

  const categories = ['JavaScript', 'React', 'CSS', 'Web Development'];

  const [categoryIndex, setCategoryIndex] = useState(0);

  const category = () => {
    listGroupItems.map((item) => {
      item.addEventListner('click', () => {
        useEffect(() => {
          setCategoryIndex(() => {
            (prevCategoryIndex) =>
              (prevCategoryIndex + 1) % listGroupItems.length;
          });
        });
      });
    });
  };

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
    <Container>
      <ListGroup
        className="d-flex flex-row gap-1"
        style={{
          height: '3rem',
          border: '1px solid gold',
        }}
      >
        <ListGroup.Item
          className="d-flex align-items-center justify-content-center"
          style={{ flex: '1', borderRadius: '0' }}
        >
          Category 1
        </ListGroup.Item>
        <ListGroup.Item
          className="d-flex align-items-center justify-content-center"
          style={{ flex: '1', borderRadius: '0' }}
        >
          Category 2
        </ListGroup.Item>
        <ListGroup.Item
          className="d-flex align-items-center justify-content-center"
          style={{ flex: '1', borderRadius: '0' }}
        >
          Category 3
        </ListGroup.Item>
      </ListGroup>

      <Card>
        <Card.Title className="container-title">Featured Posts</Card.Title>

        <Carousel
          activeIndex={currentFeaturedPost}
          onSelect={(selectedIndex) => setCurrentFeaturedPost(selectedIndex)}
        >
          {highlightedPosts.map((post, index) => (
            <Carousel.Item key={index} className="card-alt p-2">
              <Card
                className="d-flex flex-column justify-content-evenly"
                style={{
                  width: '95%',
                  margin: 'auto',
                  padding: '2%',
                  height: '40vh',
                }}
              >
                <Card.Body style={{ borderRadius: '10px' }}>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text
                    style={{
                      height: '70%',
                      textAlign: 'left',
                    }}
                  >{`"${post.text}."`}</Card.Text>
                </Card.Body>
                <Button variant="primary" /*href={`/post/${index}`}*/>
                  Read More
                </Button>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>

        <Row className="mt-4">
          <Col md={8}>
            <Card className="d-flex gap-4">
              <Card.Title className="container-title">Recent Posts</Card.Title>
              {recentPosts.map((post, index) => (
                <Card
                  key={index}
                  className="card-alt"
                  style={{
                    height: '40vh',
                  }}
                >
                  <Card.Body
                    className="recent-post"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Card.Title className="text-center">
                      {post.title}
                    </Card.Title>
                    <Card.Text className="card-text-alt">{`"${post.excerpt}"`}</Card.Text>
                    <Button variant="primary" href={`/post/${post.id}`}>
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Blog;
