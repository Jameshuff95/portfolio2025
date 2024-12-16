import { Card, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../assets/me.png';

const HeroSmall = () => {
  return (
    <Container style={{ padding: '2%' }}>
      <Col className="d-flex flex-column align-items-center">
        {/*prettier-ignore */}
        <Card.Img src={MeImg} alt="An image of James." id="heroImg" className="img-fluid"
            style={{
              borderRadius: '50%',
              backgroundColor: 'var(--nav-bg)',
              border: '1px solid var(--nav-bg)',
              boxShadow: 'inset 0 0 1rem var(--card-text)',
              width: '75%'
            }}
        />
        <Card.Title>My name is James Huff.</Card.Title>
        <Card.Text>
          I am inclined to prioritize functionality and simplicity, as they
          offer a more straightforward and effective approach compared to the
          unnecessary complications of complexity.
        </Card.Text>
      </Col>
    </Container>
  );
};

export default HeroSmall;
