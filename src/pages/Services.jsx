import Footer from '../Components/Footer.jsx';

import { Card, Container } from 'react-bootstrap';
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
    <Container id="services-container" className="page">
      {tiers.map((tier, index) => (
        <Card key={index} className="card-alt">
          <Card.Title className="text-center">{tier.name}</Card.Title>
          <Card.Text className="text-center">Price: {tier.price}</Card.Text>
          <ul id="perk-list">
            {tier.includes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Card>
      ))}
      <Footer />
    </Container>
  );
};

export default Services;
