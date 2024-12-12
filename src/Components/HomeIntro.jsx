import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

const HomeIntro = () => {
  return (
    <Card className="card-alt">
      <Card.Title className="container-title-alt">
        Driven by Curiosity, Empowered by MERN:
      </Card.Title>
      <Card.Text className="card-text-alt">
        Hello! I'm James, a passionate self-taught web developer with a strong
        focus on the MERN stack (MongoDB, Express.js, React, Node.js).
      </Card.Text>
      <Card.Text className="card-text-alt">
        My journey into the world of web development started with a thirst for
        knowledge and an insatiable curiosity.
      </Card.Text>
      <Card.Text className="card-text-alt">
        Through rigorous self-study and hands-on practice, I have honed my
        skills in building dynamic, responsive web applications.
      </Card.Text>
      <Card.Text className="card-text-alt">
        I thrive in environments where creativity and problem-solving are at the
        forefront, and I'm eager to contribute to innovative teams and projects.
      </Card.Text>
      <Card.Text className="card-text-alt">
        Let's create something amazing together!
      </Card.Text>
    </Card>
  );
};

export default HomeIntro;
