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
      {featuredProjects.map((project, index) =>
        //prettier-ignore
        <Carousel.Item key={index}>
          <Card className="card-alt" style={{ marginTop: '2rem' }}>
            <Row className="justify-content-center">
              <Col xs={12} sm={12} style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
                <Card.Img variant="top" src={project.img} alt={project.imgAlt} className="featured-image" style={{height: '10rem'}} />
                <Card.Body className="d-flex flex-column align-items-center justify-content-space-evenly">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle>{project.technology}</Card.Subtitle>
                  <Card.Text style={{ textAlign: 'left', border:'1px solid var(--card-text)', color: 'var(--card-text)', width: '95%', height: '5rem', borderRadius: '5px', padding: '2%'}}>{project.description}</Card.Text>
                  <Row className="d-flex">
                  <Button variant="dark" style={{ height: '4rem', fontSize: '2rem', background: 'var(--card-text)' , color: 'var(--card-bg)'}}>Learn More</Button>
                  </Row>
                  
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default MobileOrTabletView;
