import { Card, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../assets/me.png';

const HeroSmall = () => {
  return (
    <Container style={{ padding: '2%', height: '84vh' }}>
      <Col
        className=" d-flex flex-column justify-content-evenly align-items-center"
        style={{ height: '100%' }}
      >
        {/*prettier-ignore */}
        <Card.Img src={MeImg} alt="An image of James." className="img-fluid"
            style={{
              borderRadius: '50%',
              backgroundColor: 'var(--nav-bg)',
              border: '1px solid var(--nav-bg)',
              boxShadow: 'inset 0 0 1rem var(--card-text)',
              width: '75%',
              margin: '0 auto',
            }}
        />

        <Row>
          <Card.Subtitle style={{ fontSize: '1.5rem' }}>
            My name is
          </Card.Subtitle>
          <Card.Title style={{ fontSize: '2.75rem' }}>James Huff</Card.Title>
        </Row>

        <Card.Text style={{ fontSize: '1.5rem' }}>
          I am inclined to prioritize functionality and simplicity, as they
          offer a more straightforward and effective approach compared to the
          unnecessary complications of complexity.
        </Card.Text>
      </Col>
    </Container>
  );
};

export default HeroSmall;
