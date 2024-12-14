/*

Provides a more detailed background about you, your journey, your philosophy, and what sets you apart. This helps to build a personal connection.

*/
import { Container } from 'react-bootstrap';

import '../index.css';
import '../App.css';

import Achievements from '../Components/Achievements.jsx';
import Certifications from '../Components/Certifications.jsx';
import Education from '../Components/Education.jsx';
import Experience from '../Components/Experience.jsx';
import Intro from '../Components/Intro.jsx';
import Mission from '../Components/Mission.jsx';
import PersonalInterests from '../Components/PersonalInterests.jsx';
import Footer from '../Components/Footer.jsx';

const About = () => {
  return (
    <Container className="page">
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
