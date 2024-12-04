import '../../index.css';
import '../../globalComponents/Nav/Nav.css';

import Certifications from './components/Certifications/Certifications.jsx';
import Mission from './components/Mission/Mission.jsx';
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills.jsx';
import SoftSkills from './components/SoftSkills/SoftSkills.jsx';

const About = () => {
  return (
    <div className="page">
      <Certifications />
      <Mission />
      <TechnicalSkills />
      <SoftSkills />
    </div>
  );
};

export default About;
