import { Card, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../assets/me.png';

const HeroSmall = () => {
  return (
    <Container
      className="d-flex flex-column align-items-center"
      style={{ padding: '2%' }}
    >
      <Col xs={8} sm={8} md={4} lg={4} xl={10} xxl={8}>
        <Card.Body>
          {/*prettier-ignore */}
          <Card.Img src={MeImg} alt="An image of James." id="heroImg" className="img-fluid"
            style={{
              borderRadius: '50%',
              backgroundColor: 'var(--nav-bg)',
              border: '1px solid var(--nav-bg)',
              boxShadow: 'inset 0 0 1rem var(--card-text)',
              margin: '1rem auto 0',
            }}
          />
          <Card.Title>My name is James Huff.</Card.Title>
          <Card.Text style={{ color: 'var(--card-text)' }}>
            I am inclined to prioritize functionality and simplicity, as they
            offer a more straightforward and effective approach compared to the
            unnecessary complications of complexity.
          </Card.Text>
        </Card.Body>
      </Col>
    </Container>
  );
};

export default HeroSmall;
