import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../index.css';
import '../../App.css';

const Experience = () => {
  return (
    // prettier-ignore
    <Card>
      <Card.Title>Experience</Card.Title>
      <Card.Body>
        <Card.Text className="text-center">
          With over 2 years of experience in the web development industry, I have developed a robust skill set and a keen eye for detail.
        </Card.Text> 
        <Card.Text className="text-center">
          I have had the privilege of working with diverse clients
          and on various projects, from [mention a specific type of project, e.g., web applications, graphic design campaigns, etc.], to [another type of project, e.g., mobile apps, branding initiatives, etc.].
        </Card.Text>
        <Card.Text className="text-center">
          My expertise lies in MERN stack programming, and I am passionate about leveraging these skills to create innovative solutions that address client needs and exceed expectations. 
        </Card.Text>
        <Card.Text className="text-center">
          I thrive in dynamic environments and enjoy collaborating with cross-functional teams to bring ideas to life.
        </Card.Text>
        <Card.Text className="text-center">
          Throughout my career, I have been recognized for my ability to [mention specific achievements, e.g., deliver high-quality work under tight deadlines, lead successful project teams, etc.], and continuously seek opportunities to grow and learn in my field.
        </Card.Text>
        <Card.Text className="text-center">
          My commitment to excellence and my drive for innovation have been the cornerstone of my professional journey.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Experience;
