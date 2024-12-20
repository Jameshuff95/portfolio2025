import { Card, Container, ListGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

const Services = () => {
  // prettier-ignore
  const tiers = [
    {
      name: 'Tier 1',
      includes: [
        "Perk 1",
        "Perk 2",
        "Perk 3",
      ],
      price: 'Price 1',
    },
    {
      name: 'Tier 2',
      includes: [
        "Perk 1",
        "Perk 2",
        "Perk 3",
        "Perk 4",
        "Perk 5",
        "Perk 6",
      ],
      price: 'Price 2',
    },
    {
      name: 'Tier 3',
      includes: [
        "Perk 1",
        "Perk 2",
        "Perk 3",
        "Perk 4",
        "Perk 5",
        "Perk 6",
        "Perk 7",
        "Perk 8",
        "Perk 9",
      ],
      price: 'Price 3',
    },
  ];

  return (
    <Container>
      {tiers.map((tier, index) => (
        <Card key={index} className="card-alt p-2 m-2">
          <Card.Title>{tier.name}</Card.Title>
          <Card.Text>Price: {tier.price}</Card.Text>
          <ListGroup className="border-0 p-0">
            {tier.includes.map((item, idx) => (
              <ListGroup.Item
                key={idx}
                style={{
                  border: '0',
                  background: '0',
                  color: 'var(--card-text)',
                }}
              >
                <Row className="d-flex align-items-center">
                  <i
                    className="bi bi-check p-0"
                    style={{ color: 'lime', width: '25%' }}
                  />
                  <Card.Text
                    className="d-flex justify-content-start"
                    style={{
                      width: '75%',
                      padding: '0',
                    }}
                  >
                    {item}
                  </Card.Text>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ))}
    </Container>
  );
};

export default Services;
