/*

  If you have one, it's a space to share your thoughts, expertise, and updates. It keeps your content fresh and can improve your site's SEO.
  
*/

import './Blog.css';
import '../../index.css';
import '../../globalComponents/Nav/Nav.css';

import { useState, useEffect } from 'react';
import { Card, Container, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import FeaturedPosts from './FeaturedPosts/FeaturedPosts';

const Blog = () => {
  return (
    <Container className="page">
      <Card>
        <Card.Title>Blog</Card.Title>
        <FeaturedPosts />
      </Card>
      {/* Add more BlogPost components here */}
    </Container>
  );
};

export default Blog;
