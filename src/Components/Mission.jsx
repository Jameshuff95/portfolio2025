import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

const Mission = () => {
  return (
    //prettier-ignore
    <Card className="card-general card">
      <Card.Title className="container-title">
        My Mission
      </Card.Title>
      <Card.Text className="card-text-general">
        My mission is to create innovative and impactful solutions that blend creativity with technology.
      </Card.Text>
      <Card.Text className="card-text-general">
        I am dedicated to leveraging my skills and experience in web development to deliver high-quality, user-centric projects that exceed expectations.
      </Card.Text>
      <Card.Text className="card-text-general">
        I believe in continuous learning and adaptability, striving to push the boundaries of what's possible while maintaining a commitment to excellence and integrity.
      </Card.Text>
      <Card.Text className="card-text-general">
        My goal is to collaborate with like-minded individuals and organizations to bring visionary ideas to life, making a positive and meaningful difference in the digital landscape.
      </Card.Text>
    </Card>
  );
};

export default Mission;
