/*

  If you have one, it's a space to share your thoughts, expertise, and updates. It keeps your content fresh and can improve your site's SEO.
  
*/

import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';
import '../css/Nav.css';

import FeaturedPosts from '../Components/FeaturedPosts.jsx';
import Footer from '../Components/Footer.jsx';

const Blog = () => {
  return (
    <Container className="page">
      <Card>
        <Card.Title>Blog</Card.Title>
        <FeaturedPosts />
      </Card>
      {/* Add more BlogPost components here */}
      <Footer />
    </Container>
  );
};

export default Blog;
