/*

Provides a more detailed background about you, your journey, your philosophy, and what sets you apart. This helps to build a personal connection.

*/
import { Container } from 'react-bootstrap';

import '../index.css';
import '../App.css';

import Achievements from '../Components/About/Achievements.jsx';
import Certifications from '../Components/About/Certifications.jsx';
import Education from '../Components/About/Education.jsx';
import Experience from '../Components/About/Experience.jsx';
import Intro from '../Components/About/Intro.jsx';
import Mission from '../Components/About/Mission.jsx';
import PersonalInterests from '../Components/About/PersonalInterests.jsx';

const About = () => {
  return (
    <Container>
      <Intro />
      <Mission />
      <Education />
      <Certifications />
      <Achievements />
      <Experience />
      <PersonalInterests />
    </Container>
  );
};

export default About;
