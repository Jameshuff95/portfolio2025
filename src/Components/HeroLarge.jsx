import { Container, Row, Col, Card } from 'react-bootstrap';

import MeImg from '../assets/me.png';

const HeroLarge = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={4}>
          <Card.Img
            src={MeImg}
            alt="An image of James."
            className="img-fluid"
            style={{
              margin: '2%',
              borderRadius: '50%',
              backgroundColor: 'var(--nav-bg)',
              border: '1px solid var(--nav-bg)',
              boxShadow: 'inset 0 0 1rem var(--card-text)',
              outline: '4px double var(--card-text)',
            }}
          />
        </Col>
        <Col>
          <Card.Title>My name is James Huff.</Card.Title>
          <Card.Text style={{ fontSize: '1.5rem' }}>
            I am a web developer inclined to prioritize functionality and
            simplicity, as they offer a more straightforward and effective
            approach.
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroLarge;
