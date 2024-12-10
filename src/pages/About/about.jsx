/*

Provides a more detailed background about you, your journey, your philosophy, and what sets you apart. This helps to build a personal connection.

*/

import './About.css';
import '../../index.css';
import '../../App.css';
import '../../globalComponents/Nav/Nav.css';
import '../../globalComponents/Footer/Footer.css';

import Achievements from './components/Achievements/Achievements.jsx';

import Certifications from './components/Certifications/Certifications.jsx';

import Education from './components/Education/Education.jsx';

import Experience from './components/Experience/Experience.jsx';

import Intro from './components/Intro/Intro.jsx';

import Mission from './components/Mission/Mission.jsx';

import PersonalInterests from './components/PersonalInterests/PersonalInterests.jsx';

import Footer from '../../globalComponents/Footer/Footer.jsx';

const About = () => {
  return (
    <div id="about" className="page">
      <Intro />
      <Mission />
      <Education />
      <Certifications />
      <Achievements />
      <Experience />
      <PersonalInterests />
      <Footer />
    </div>
  );
};

export default About;
