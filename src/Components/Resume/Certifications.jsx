import '../../index.css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';

const Certifications = () => {
  const certifications = [
    {
      title: 'certification 1',
      date: 'date 1',
      authority: 'Issuing Authority 1',
    },
    {
      title: 'certification 2',
      date: 'date 2',
      authority: 'Issuing Authority 2',
    },
    {
      title: 'certification 3',
      date: 'date 3',
      authority: 'Issuing Authority 3',
    },
  ];

  return (
    <Card>
      <Card.Title>Certifications</Card.Title>
      <ListGroup>
        {certifications.map((certification, index) => (
          <ListGroup.Item key={index} style={{ border: '0', background: '0' }}>
            <Card.Text
              style={{
                textAlign: 'left',
                fontSize: '1.3rem',
                fontWeight: '500',
              }}
            >
              {certification.title}
            </Card.Text>
            <Card.Text style={{ textAlign: 'left', fontSize: '1.3rem' }}>
              {certification.date}
            </Card.Text>
            <Card.Text style={{ textAlign: 'left', fontSize: '1.3rem' }}>
              {certification.authority}
            </Card.Text>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Certifications;
