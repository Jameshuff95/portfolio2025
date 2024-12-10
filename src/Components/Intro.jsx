import { useState, useEffect } from 'react';
import { Carousel, Card, Container, Button } from 'react-bootstrap';

import '../index.css';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
  return (
    <Container className="container">
      <Card className="card">
        <Card.Title className="container-title">More about who I am</Card.Title>
        <Card.Text>
          Hi there! I'm James Huff, a passionate web developer with a love for
          creating innovative and impactful solutions.
        </Card.Text>
        <Card.Text>
          With 3 years of experience in the industry, I specialize in MERN stack
          web applications.
        </Card.Text>
        <Card.Text>
          My journey in web development began when I styarted learning html as a
          hobby.
        </Card.Text>
        <Card.Text>
          Since then, I've had the pleasure of working on a variety of exciting
          projects that have allowed me to hone my skills and push the
          boundaries of creativity and technology.
        </Card.Text>
        <Card.Text>
          When I'm not developing webapps, you can find me listening to an
          audiobook, which help me stay inspired and bring fresh ideas to my
          work.
        </Card.Text>
        <Card.Text>
          I'm always eager to collaborate on new projects and bring innovative
          ideas to life.
        </Card.Text>
        <Card.Text>
          Feel free to explore my portfolio and get in touch if you'd like to
          work together or just say hello!
        </Card.Text>
      </Card>
    </Container>
  );
};

export default Intro;
