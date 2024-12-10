import '../css/HeroIntro.css';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
  return (
    <Card className="text-center border-0" id="intro-container">
      <Card.Body id="intro-body" className="border-0">
        <Card.Title>
          <h3 className="container-title-alt">
            Driven by Curiosity, Empowered by MERN:
          </h3>
        </Card.Title>
        <Card.Text>
          Hello! I'm James, a passionate self-taught web developer with a strong
          focus on the MERN stack (MongoDB, Express.js, React, Node.js).
        </Card.Text>
        <Card.Text>
          My journey into the world of web development started with a thirst for
          knowledge and an insatiable curiosity.
        </Card.Text>
        <Card.Text>
          Through rigorous self-study and hands-on practice, I have honed my
          skills in building dynamic, responsive web applications.
        </Card.Text>
        <Card.Text>
          I thrive in environments where creativity and problem-solving are at
          the forefront, and I'm eager to contribute to innovative teams and
          projects.
        </Card.Text>
        <Card.Text>Let's create something amazing together!</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Intro;
