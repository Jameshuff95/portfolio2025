/*

Provides a more detailed background about you, your journey, your philosophy, and what sets you apart. This helps to build a personal connection.

*/

import '../index.css';
import '../App.css';
import '../Components/Nav.jsx';
import '../Components/Footer.jsx';

import { Container } from 'react-bootstrap';

import Achievements from '../Components/Achievements.jsx';

import Certifications from '../Components/Certifications.jsx';

import Education from '../Components/Education.jsx';

import Experience from '../Components/Experience.jsx';

import Intro from '../Components/HeroIntro.jsx';

import Mission from '../Components/Mission.jsx';

import PersonalInterests from '../Components/PersonalInterests.jsx';

import Footer from '../Components/Footer.jsx';

const About = () => {
  return (
    <Container id="about" className="page">
      <Intro />
      <Mission />
      <Education />
      <Certifications />
      <Achievements />
      <Experience />
      <PersonalInterests />
      <Footer />
    </Container>
  );
};

export default About;
