import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';

const Footer = () => {
  return (
    <Container id="footer">
      <Card.Text>&copy; 2024 James Huff. All rights reserved.</Card.Text>
    </Container>
  );
};

export default Footer;
