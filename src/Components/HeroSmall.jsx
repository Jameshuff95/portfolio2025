import { Card, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../assets/me.png';

const HeroSmall = () => {
  return (
    <Container
      style={{
        overflow: 'visible',
        padding: '2%',
        height: '85vh',
        margin: '1rem auto',
      }}
    >
      <Col style={{ height: '100%', overflow: 'visible' }}>
        <Col
          xs={8}
          style={{
            margin: 'auto',
            overflow: 'visible',
            margin: '0 auto',
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
            height: '60%',
          }}
        >
          <Row
            style={{
              margin: 'auto',
            }}
          >
            <Card.Subtitle style={{ margin: '0', padding: '0' }}>
              My name is
            </Card.Subtitle>
            <Card.Title style={{ margin: '0', padding: '0' }}>
              James Huff
            </Card.Title>
          </Row>
          <Card.Text>
            I am inclined to prioritize functionality and simplicity, as they
            offer a more straightforward and effective approach.
          </Card.Text>
        </Row>
      </Col>
    </Container>
  );
};

export default HeroSmall;
