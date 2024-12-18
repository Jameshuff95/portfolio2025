import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../../../assets/me.png';

const HeroSmall = () => {
  return (
    <Card
      className="d-flex flex-column justify-content-evenly"
      style={{ padding: '0 0 2%', height: '100%' }}
    >
      <Row className="d-flex justify-content-center align-items-center">
        <Card.Subtitle style={{ padding: '0' }}>
          Hello, my name is
        </Card.Subtitle>
        <Card.Title style={{ padding: '0 0 2%' }}>James Huff</Card.Title>
      </Row>

      <Col
        xs={10}
        sm={8}
        md={8}
        style={{
          margin: '0 auto',
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
      <Row>
        <Card.Text>
          I am a web developer inclined to prioritize functionality and
          simplicity, as they offer a more straightforward and effective
          approach.
        </Card.Text>
      </Row>
    </Card>
  );
};

export default HeroSmall;
