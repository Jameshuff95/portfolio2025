import '../../index.css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';

const Awards = () => {
  const awards = [
    {
      title: 'award 1',
      date: 'date 1',
      description: 'desc 1',
    },
    {
      title: 'award 2',
      date: 'date 2',
      description: 'desc 2',
    },
    {
      title: 'award 3',
      date: 'date 3',
      description: 'desc 3',
    },
  ];

  return (
    <Card>
      <Card.Title>Awards</Card.Title>
      <ListGroup>
        {awards.map((award, index) => (
          <ListGroup.Item key={index} style={{ border: '0', background: '0' }}>
            <Card.Text
              style={{
                textAlign: 'left',
                fontSize: '1.3rem',
                fontWeight: '500',
              }}
            >
              {award.title}
            </Card.Text>
            <Card.Text style={{ textAlign: 'left', fontSize: '1.3rem' }}>
              {award.date}
            </Card.Text>
            <Card.Text style={{ textAlign: 'left', fontSize: '1.3rem' }}>
              {award.description}
            </Card.Text>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Awards;
