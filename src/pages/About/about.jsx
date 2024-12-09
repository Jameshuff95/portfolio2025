/*

Provides a more detailed background about you, your journey, your philosophy, and what sets you apart. This helps to build a personal connection.

*/

import './About.css';
import '../../index.css';
import '../../globalComponents/Nav/Nav.css';

import Certifications from './components/Certifications/Certifications.jsx';
import Mission from './components/Mission/Mission.jsx';
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills.jsx';
import SoftSkills from './components/SoftSkills/SoftSkills.jsx';

const About = () => {
  return (
    <div id="about" className="page">
      <Certifications />
      <Mission />
      <TechnicalSkills />
      <SoftSkills />
    </div>
  );
};

export default About;
