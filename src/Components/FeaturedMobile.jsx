import { Carousel, Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MobileOrTabletView = ({
  featuredProjects,
  currentProject,
  setCurrentProject,
}) => {
  return (
    <Carousel
      activeIndex={currentProject}
      onSelect={(selectedIndex) => setCurrentProject(selectedIndex)}
    >
      {featuredProjects.map((project, index) => (
        <Carousel.Item key={index}>
          <Card className="card-alt" style={{ marginTop: '2rem' }}>
            <Row className="justify-content-center">
              <Col
                xs={10}
                sm={10}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0',
                }}
              >
                <Card.Img
                  variant="top"
                  src={project.img}
                  alt={project.imgAlt}
                  className="featured-image"
                  style={{ height: '10rem', marginTop: '1rem' }}
                />
                <Card.Body
                  className="d-flex flex-column align-items-center justify-content-between"
                  style={{ flex: '1' }}
                >
                  <Row>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Subtitle>{project.technology}</Card.Subtitle>
                  </Row>

                  <Card.Text
                    style={{
                      textAlign: 'left',
                      color: 'var(--card-bg-alt)',
                      width: '100%',
                      borderRadius: '5px',
                      padding: '2%',
                      background: 'var(--card-text)',
                      flex: '1',
                      overflow: 'auto',
                    }}
                  >
                    {project.description}
                  </Card.Text>
                  <Button
                    variant="dark"
                    style={{
                      height: '4rem',
                      width: '100%',
                      fontSize: '2rem',
                      background: 'var(--card-text)',
                      color: 'var(--card-bg-alt)',
                      marginTop: '1rem',
                    }}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MobileOrTabletView;
