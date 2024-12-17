import { Card, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../assets/me.png';

const HeroSmall = () => {
  return (
    <Container
      style={{
        overflow: 'visible',
        padding: '2%',
      }}
    >
      <Col
        className="d-flex flex-column justify-content-evenly"
        style={{
          height: '100%',
        }}
      >
        <Col xs={10} style={{ margin: 'auto' }}>
          {/*prettier-ignore */}
          <Card.Img src={MeImg} alt="An image of James." className="img-fluid"
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
          style={{
            overflow: 'visible',
            margin: '0',
          }}
        >
          <Col>
            <Row>
              <Card.Subtitle style={{ fontSize: '1.5rem' }}>
                My name is
              </Card.Subtitle>
              <Card.Title style={{ fontSize: '2.75rem' }}>
                James Huff
              </Card.Title>
            </Row>
            <Row>
              <Card.Text style={{ fontSize: '1.5rem' }}>
                I am inclined to prioritize functionality and simplicity, as
                they offer a more straightforward and effective approach.
              </Card.Text>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default HeroSmall;
