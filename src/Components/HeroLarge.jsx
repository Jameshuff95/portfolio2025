import { Container, Row, Col, Card } from 'react-bootstrap';

import MeImg from '../assets/me.png';

const HeroLarge = () => {
  return (
    <Container>
      <Card.Title style={{ margin: '0 0 .5rem', fontSize: '3rem' }}>
        My name is James Huff.
      </Card.Title>

      <Row
        className="align-items-center"
        style={{ border: '1px solid red', height: '70vh' }}
      >
        <Col md={5}>
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
          <Card.Text style={{ fontSize: '2.25rem' }}>
            I am inclined to prioritize functionality and simplicity, as they
            offer a more straightforward and effective approach.
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroLarge;
