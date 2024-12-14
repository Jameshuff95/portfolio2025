import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

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
    <Card>
      <Card.Title>Contact Me</Card.Title>
      <Card.Body>
        <Container>
          <Row
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {links.map((link, index) => (
              <Col
                xs={12}
                md={4}
                key={index}
                className="d-flex justify-content-center mb-3"
              >
                <Link
                  to={link.href}
                  style={{
                    color: link.color,
                    height: '8rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <i
                    className={link.icon}
                    style={{
                      fontSize: '2.5rem',
                      overflow: 'hidden',
                    }}
                  />
                  <legend
                    style={{
                      color: 'var(--card-text)',
                      overflow: 'hidden',
                      fontSize: '1.25rem',
                      textAlign: 'center',
                    }}
                  >
                    {link.legend}
                  </legend>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ContactInformation;
