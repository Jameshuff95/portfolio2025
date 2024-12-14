import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../css/Footer.css';

const Footer = () => {
  return (
    <Container id="footer">
      <Card.Text>&copy; 2024 James Huff. All rights reserved.</Card.Text>
    </Container>
  );
};

export default Footer;
