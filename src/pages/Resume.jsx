import { Card, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Components/Nav.jsx';
import Footer from '../Components/Footer.jsx';

import '../index.css';
import '../App.css';

const resume = () => {
  return (
    //prettier-ignore
    <Container className="page">
      <Button 
        variant="primary" 
        href="#" 
        id="download-resume"
      >
        Download
      </Button>
      <Card id="resume-container" className="border-0">
        <Card.Body>
          <Card.Title>
            James Huff
          </Card.Title>
          <Card.Subtitle>
            Web Developer / Software Engineering Student
          </Card.Subtitle>
          <Card.Text id="contact-information-phone">
            859-377-0700
          </Card.Text>
          <Card.Text id="contact-information-email">
            jameshuffdev@gmail.com
          </Card.Text>
        </Card.Body>

        <Card.Body id="work-experience">
          <Card.Title>
            Professional Summary
          </Card.Title>
          <Card.Title className="job-title">
            Job Title
          </Card.Title>
          <Card.Subtitle className="company-name">
            Company Name
          </Card.Subtitle>
          <Card.Text className="responsibilities">
            Responsibilities and Achievements
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title id="degree">
            Degree
          </Card.Title>
          <Card.Subtitle id="institution-dates">
            Institution and Dates
          </Card.Subtitle>
          <Card.Text id="honors">
            Coursework Honors
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Text className="skill">
            Skill 1
          </Card.Text>
          <Card.Text className="skill">
            Skill 2
          </Card.Text>
          <Card.Text className="skill">
            Skill 3
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            Certification
          </Card.Title>
          <Card.Subtitle>
            Issuing organization and Date
          </Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            Project Name
          </Card.Title>
          <Card.Subtitle>
            Technologies Used
          </Card.Subtitle>
          <Card.Text>
            Project Description
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            Award Name
          </Card.Title>
          <Card.Subtitle>
            Issuing Organization and Date
          </Card.Subtitle>
        </Card.Body>

        </Card>
        <Footer />
    </Container>
  );
};

export default resume;
