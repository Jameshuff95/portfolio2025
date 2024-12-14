import { Card, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Footer from '../Components/Footer.jsx';

import '../index.css';
import '../App.css';

import portfolioImage1 from '../assets/portfolio-image-1.png';
import portfolioImage2 from '../assets/portfolio-image-2.png';
import portfolioImage3 from '../assets/portfolio-image-3.png';

const Portfolio = () => {
  // prettier-ignore
  const projects = [
    {
      name: 'Project 1',
      technology: 'Technology 1',
      img: portfolioImage1,
      description: 'Description 1'
    },
    {
      name: 'Project 2',
      technology: 'Technology 2',
      img: portfolioImage2,
      description: 'Description 2'
    },
    {
      name: 'Project 3',
      technology: 'Technology 3',
      img: portfolioImage3,
      description: 'Description 3'
    },
  ];

  // initizes filteredProjects as the projects array
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // uses the event, or option in this case, as a parameter
  const filterProject = (event) => {
    // targets the value attribute of the selected option
    const selectedCategory = event.target.value;

    if (selectedCategory === '0') {
      // show all projects
      setFilteredProjects(projects);
    } else {
      // if (category !== 0) filter the projects array by index
      const filtered = projects.filter((project, index) => {
        // this ensures the selected category string is equal to the project index and the overall effectiveness of the filter
        return String(index + 1) === selectedCategory;
      });
      // set the filteredObjects state to the filtered projects
      setFilteredProjects(filtered);
    }
  };

  return (
    <Container className="page">
      <Card className="card-alt">
        <Form.Group controlId="projectFilter">
          <Form.Label>Filter By Type</Form.Label>
          <Form.Select aria-label="Default" onChange={filterProject}>
            <option value="0">All</option>
            <option value="1">Websites</option>
            <option value="2">Games</option>
            <option value="3">Apps</option>
          </Form.Select>
        </Form.Group>
      </Card>

      {filteredProjects.map((project, index) => (
        <Card key={index} className="card-alt">
          <Card.Body>
            <Card.Img src={project.img} />
            <Card.Title className="text-center">{project.name}</Card.Title>
            <Card.Text>{project.technology}</Card.Text>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Footer />
    </Container>
  );
};

export default Portfolio;
