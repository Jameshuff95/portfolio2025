import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DeskOrLaptopView = ({ featuredProjects }) => {
  return (
    <Container>
      <Row>
        {featuredProjects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="card-alt">
              <Card.Img variant="top" src={project.img} alt={project.imgAlt} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-space-evenly">
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle>{project.technology}</Card.Subtitle>
                <Card.Text
                  style={{
                    textAlign: 'left',
                    border: '1px solid var(--card-text)',
                    color: 'var(--card-text)',
                    width: '95%',
                    height: '5rem',
                    borderRadius: '5px',
                    padding: '2%',
                  }}
                >
                  {project.description}
                </Card.Text>
                <Row className="d-flex">
                  <Button
                    variant="dark"
                    style={{
                      height: '4rem',
                      fontSize: '2rem',
                      background: 'var(--card-text)',
                      color: 'var(--card-bg)',
                    }}
                  >
                    Learn More
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DeskOrLaptopView;
