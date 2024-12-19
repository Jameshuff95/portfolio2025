import { Container } from 'react-bootstrap';
import Achievements from '../Components/About/Achievements/Achievements.jsx';
import Certifications from '../Components/About/Certifications.jsx';
import Education from '../Components/About/Education/Education.jsx';
import Experience from '../Components/About/Experience.jsx';
import Intro from '../Components/About/Intro.jsx';
import Mission from '../Components/About/Mission.jsx';
import Interests from '../Components/About/Interests/Interests.jsx';

import '../index.css';
import '../App.css';

const About = () => {
  return (
    <Container>
      <Intro />
      <Mission />
      <Education />
      <Certifications />
      <Achievements />
      <Experience />
      <Interests />
    </Container>
  );
};

export default About;
