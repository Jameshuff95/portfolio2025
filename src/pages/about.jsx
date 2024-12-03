import Certifications from '../components/Certifications/Certifications.jsx';
import Mission from '../components/Mission/Mission.jsx';
/*
import SoftSkills from '../components/SoftSkills/softSkills.jsx';
import TechnicalSkills from '../components/TechnicalSkills/TechnicalSkills.jsx';
*/
const About = () => {
  return (
    <div className="page">
      <Certifications />
      <Mission />
      {/*
        <SoftSkills />
        <TechnicalSkills />
      */}
    </div>
  );
};

export default About;
