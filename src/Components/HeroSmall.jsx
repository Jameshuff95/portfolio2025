import { Card, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeImg from '../assets/me.png';

const HeroSmall = () => {
  return (
    <Container
      style={{ padding: '2%', border: '1px solid red', height: '82vh' }}
    >
      <Col
        className=" d-flex flex-column justify-content-space-evenly "
        style={{ border: '1px solid gold', height: '100%' }}
      >
        {/*prettier-ignore */}
        <Card.Img src={MeImg} alt="An image of James." className="img-fluid"
            style={{
              borderRadius: '50%',
              backgroundColor: 'var(--nav-bg)',
              border: '1px solid var(--nav-bg)',
              boxShadow: 'inset 0 0 1rem var(--card-text)',
              width: '65%',
              margin: '0 auto',
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
