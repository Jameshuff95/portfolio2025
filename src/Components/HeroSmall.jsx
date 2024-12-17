import { Card, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../assets/me.png';

const HeroSmall = () => {
  return (
    <Container
      style={{
        overflow: 'visible',
        padding: '2%',
        height: '84vh',
        overflow: 'visible',
        margin: '1rem auto',
      }}
    >
      <Col
        style={{
          height: '100%',
          border: '1px solid red',
        }}
      >
        <Row
          style={{
            margin: 'auto',
            border: '1px solid red',
            height: '25%',
          }}
        >
          <Card.Subtitle style={{ fontSize: '1.5rem' }}>
            My name is
          </Card.Subtitle>
          <Card.Title style={{ fontSize: '2.75rem' }}>James Huff</Card.Title>
        </Row>
        <Col
          className="d-flex flex-column justify-space-center"
          style={{ border: '1px solid green', height: '75%' }}
        >
          <Col
            xs={8}
            style={{
              margin: 'auto',
              overflow: 'visible',
              margin: '0 auto',
              border: '1px solid blue',
            }}
          >
            <Card.Img
              src={MeImg}
              alt="An image of James."
              className="img-fluid"
              style={{
                borderRadius: '50%',
                backgroundColor: 'var(--nav-bg)',
                border: '1px solid var(--nav-bg)',
                boxShadow: 'inset 0 0 1rem var(--card-text)',
                margin: '0 auto',
              }}
            />
          </Col>

          <Row
            className="d-flex justify-content-center align-items-center"
            style={{
              overflow: 'visible',
              margin: '0',
              padding: '0',
              border: '1px solid blue',
              height: '100%',
              fontSize: '1.25rem',
            }}
          >
            <Card.Text>
              I am inclined to prioritize functionality and simplicity, as they
              offer a more straightforward and effective approach.
            </Card.Text>
          </Row>
        </Col>
      </Col>
    </Container>
  );
};

export default HeroSmall;
