import { Container, Row, Col, Card } from 'react-bootstrap';

import MeImg from '../assets/me.png';

const HeroLarge = () => {
  return (
    <Container>
      <Card.Title style={{ margin: '0 0 .5rem' }}>
        My name is James Huff.
      </Card.Title>

      <Row className="align-items-center">
        <Col md={6}>
          <Card.Img
            src={MeImg}
            alt="An image of James."
            className="img-fluid"
            style={{
              borderRadius: '50%',
              backgroundColor: 'var(--nav-bg)',
              border: '1px solid var(--nav-bg)',
              boxShadow: 'inset 0 0 1rem var(--card-text)',
            }}
          />
        </Col>
        <Col>
          <Card.Text>
            I am inclined to prioritize functionality and simplicity, as they
            offer a more straightforward and effective approach.
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroLarge;
