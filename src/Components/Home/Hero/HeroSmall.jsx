import { Card, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../../../assets/me.png';

const HeroSmall = () => {
  return (
    <Container
      className="d-flex flex-column"
      style={{
        overflow: 'visible',
        margin: '0',
        padding: '1rem',
        height: '100%',
      }}
    >
      <Row className="d-flex flex-column">
        <Card.Subtitle>Hello, my name is</Card.Subtitle>
        <Card.Title>James Huff</Card.Title>
      </Row>

      <Col
        xs={10}
        sm={8}
        md={8}
        style={{
          margin: 'auto',
          overflow: 'visible',
          margin: '0 auto',
          padding: '1rem',
        }}
      >
        <Card.Img
          src={MeImg}
          alt="An image of James."
          className="img-fluid"
          style={{
            borderRadius: '50%',
            backgroundColor: 'var(--theme-btn-color)',
            border: '1px solid var(--nav-bg)',
            boxShadow: 'inset 0 0 1rem var(--card-text)',
            margin: '0 auto',
          }}
        />
      </Col>
      <Col>
        <Card.Text>
          I am a web developer inclined to prioritize functionality and
          simplicity, as they offer a more straightforward and effective
          approach.
        </Card.Text>
      </Col>
    </Container>
  );
};

export default HeroSmall;
