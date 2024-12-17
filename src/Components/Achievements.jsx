import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'Developed a Personal Portfolio Website',
      description:
        'Created a professional and visually appealing personal portfolio website using HTML, CSS, and JavaScript. Showcased various projects, skills, and experience, effectively demonstrating my capabilities to potential employers.',
    },
    {
      title: 'Managing GitHub Repositories',
      description:
        'Maintained several active repositories on GitHub, contributing to open-source projects and collaborating with other developers. Implemented version control practices, resolved issues, and regularly updated documentation to ensure project clarity and continuity.',
    },
    {
      title: 'Obtained Certifications',
      description:
        'Earned industry-recognized certifications from platforms like Coursera and Udemy, covering front-end and back-end technologies. Demonstrated commitment to continuous learning and staying current with the latest web development trends and practices.',
    },
  ];
  return (
    <Card>
      <Card.Title className="container-title">Achievements</Card.Title>
      <Card.Body
        id="achievements-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {achievements.map((achievement, index) => (
          <Card key={index} className="card-general card-alt">
            <Card.Title className="card-text-alt">
              {achievement.title}
            </Card.Title>
            <Card.Text className="card-text-alt">
              {achievement.description}
            </Card.Text>
          </Card>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Achievements;
