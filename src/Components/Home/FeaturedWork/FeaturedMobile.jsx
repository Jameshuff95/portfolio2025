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
          <Card>
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
                  style={{ height: '20rem' }}
                />
                <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                  <Col
                    className="d-flex flex-column align-items-center"
                    style={{
                      width: '100%',
                      padding: '2%',
                    }}
                  >
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Subtitle>{project.technology}</Card.Subtitle>
                  </Col>

                  <Card.Text
                    style={{
                      textAlign: 'left',
                      color: 'var(--card-bg-alt)',
                      width: '95%',
                      minHeight: '8rem',
                      borderRadius: '5px',
                      padding: '2%',
                      background: 'var(--card-text)',
                      fontSize: '1.35rem',
                    }}
                  >
                    {project.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      height: '5rem',
                      width: '100%',
                      fontSize: '2rem',
                      marginTop: '1rem',
                    }}
                  >
                    Visit Github Repo
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
