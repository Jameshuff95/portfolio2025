import { Card, Container, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Components/Nav.jsx';
import Footer from '../Components/Footer.jsx';

import '../index.css';
import '../App.css';
import '../css/Resume.css';

const resume = () => {
  const workExperience = [
    {
      title: 'Job 1',
      company: 'Company 1',
      responsibilities: [
        'responsibility 1',
        'responsibility 2',
        'responsibility 3',
      ],
      achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
    },
    {
      title: 'Job 2',
      company: 'Company 2',
      responsibilities: [
        'responsibility 1',
        'responsibility 2',
        'responsibility 3',
      ],
      achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
    },
    {
      title: 'Job 3',
      company: 'Company 3',
      responsibilities: [
        'responsibility 1',
        'responsibility 2',
        'responsibility 3',
      ],
      achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
    },
  ];

  return (
    <Container className="page">
      <Button variant="primary" href="#" id="download-resume">
        Download
      </Button>
      <Card id="resume-container" className="card-alt">
        <Card.Body id="resume-top">
          <Card.Title className="text-center">James Huff</Card.Title>
          <Card.Subtitle>
            Web Developer / Software Engineering Student
          </Card.Subtitle>
          <Card.Text>859-377-0700</Card.Text>
          <Card.Text>jameshuffdev@gmail.com</Card.Text>
        </Card.Body>

        <Card.Body id="work-experience">
          <Card.Title className="text-center">Professional Summary</Card.Title>
          <Card.Title>Job Title</Card.Title>
          <Card.Subtitle className="company-name">Company Name</Card.Subtitle>
          <Card>
            <Card.Text>Responsibilities and Achievements</Card.Text>
          </Card>
        </Card.Body>

        <Card.Body>
          <Card.Title id="degree">Degree</Card.Title>
          <Card.Subtitle id="institution-dates">
            Institution and Dates
          </Card.Subtitle>
          <Card.Text id="honors">Coursework Honors</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Text className="skill">Skill 1</Card.Text>
          <Card.Text className="skill">Skill 2</Card.Text>
          <Card.Text className="skill">Skill 3</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>Certification</Card.Title>
          <Card.Subtitle>Issuing organization and Date</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <Card.Title>Project Name</Card.Title>
          <Card.Subtitle>Technologies Used</Card.Subtitle>
          <Card.Text>Project Description</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>Award Name</Card.Title>
          <Card.Subtitle>Issuing Organization and Date</Card.Subtitle>
        </Card.Body>
      </Card>
      <Footer />
    </Container>
  );
};

export default resume;
