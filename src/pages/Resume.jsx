import { Card, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Nav/Nav.jsx';
import { Link } from 'react-router-dom';
import '../index.css';
import '../App.css';

import ResumeHead from '../Components/Resume/ResumeHead.jsx';
import WorkExperience from '../Components/Resume/WorkExperience.jsx';
import Education from '../Components/Resume/Education.jsx';
import Skills from '../Components/Resume/Skills.jsx';
import Certifications from '../Components/Resume/Certifications.jsx';
import Projects from '../Components/Resume/Projects.jsx';
import Awards from '../Components/Resume/Awards.jsx';

const Resume = () => {
  return (
    <Container>
      <Card>
        <Button
          variant="primary"
          as={Link}
          to="#"
          className="mt-3 w-25"
          aria-label="download James' Resume"
          style={{ margin: '1rem 0 0 75%' }}
        >
          Download
        </Button>

        <Card>
          <ResumeHead />
          <WorkExperience />
          <Education />
          <Skills />
          <Certifications />
          <Projects />
          <Awards />
        </Card>
      </Card>
    </Container>
  );
};

export default Resume;
