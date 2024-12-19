import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../index.css';
import '../../App.css';

const ContactInformation = () => {
  const links = [
    // Github
    {
      name: 'github',
      icon: 'bi bi-github',
      href: '#',
      color: 'var(--card-text)',
      legend: 'Github',
    },
    // LinkedIn
    {
      name: 'linkedin',
      icon: 'bi bi-linkedin',
      href: '#',
      color: 'navy',
      legend: 'LinkedIn',
    },
    // Reddit
    {
      name: 'reddit',
      icon: 'bi bi-reddit',
      href: '#',
      color: 'orangered',
      legend: 'Reddit',
    },
    // Stack Overflow
    {
      name: 'stack-overflow',
      icon: 'bi bi-stack-overflow',
      href: '#',
      color: 'orange',
      legend: 'Stack Overflow',
    },
    // X
    {
      name: 'x',
      icon: 'bi bi-twitter-x',
      href: '#',
      color: 'var(--card-text)',
      legend: 'X',
    },
    // Instagram
    {
      name: 'instagram',
      icon: 'bi bi-instagram',
      href: '#',
      color: 'pink',
      legend: 'Instagram',
    },
  ];

  return (
    <Container className="d-flex flex-column" style={{ padding: '2%' }}>
      <Card.Title>Contact Me</Card.Title>
      <Card
        className="card-alt"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          placeItems: 'center',
          width: '100%',
          margin: '0',
          height: '80vh',
        }}
      >
        {links.map((link, index) => (
          <Col
            xs={12}
            md={10}
            key={index}
            className="d-flex justify-content-center align-items-center"
            style={{
              padding: '0',
              height: '50%',
              overflow: 'hidden',
            }}
          >
            <Link
              className="d-flex flex-column justify-content-evenly align-items-center"
              to={link.href}
              style={{
                color: link.color,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
                margin: '1rem',
                overflow: 'visible',
              }}
            >
              <i
                className={link.icon}
                style={{
                  fontSize: '4.5rem',
                  padding: '0',
                }}
              />
              <legend
                style={{
                  color: 'var(--card-text)',
                  fontSize: '1.5rem',
                  margin: '0',
                }}
              >
                {link.legend}
              </legend>
            </Link>
          </Col>
        ))}
      </Card>
    </Container>
  );
};

export default ContactInformation;
