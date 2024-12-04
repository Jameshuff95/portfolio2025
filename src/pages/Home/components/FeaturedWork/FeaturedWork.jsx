import { useState } from 'react';
import './FeaturedWork.css';

import Img from '../../../../assets/logo.png';

const FeaturedWork = () => {
  const featuredProjects = [
    {
      title: 'Project 1',
      technology: 'Tech 1',
      img: Img,
      imgAlt: 'image alt 1',
      description: 'Description 1',
    },
    {
      title: 'Project 2',
      technology: 'Tech 2',
      img: Img,
      imgAlt: 'image alt 2',
      description: 'Description 2',
    },
    {
      title: 'Project 3',
      technology: 'Tech 3',
      img: Img,
      imgAlt: 'image alt 3',
      description: 'Description 3',
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const previousProject = () => {
    setCurrentProject(
      (prevProject) =>
        (prevProject - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  const nextProject = () => {
    setCurrentProject(
      (prevProject) => (prevProject + 1) % featuredProjects.length
    );
  };

  return (
    <div id="featured-work-container" className="container">
      <h3>Featured Work</h3>
      <div className="featuredProject" key={currentProject}>
        <img
          src={featuredProjects[currentProject].img}
          alt={featuredProjects[currentProject].imgAlt}
          className="thumbnail"
        />
        <p>Title: {featuredProjects[currentProject].title}</p>
        <p>Technology: {featuredProjects[currentProject].technology}</p>
        <p className="projectDescription">
          {featuredProjects[currentProject].description}
        </p>
      </div>
      <div id="arrow-container">
        <i
          id="left-arrow"
          className="bi bi-arrow-left"
          onClick={previousProject}
        />
        <i
          id="right-arrow"
          className="bi bi-arrow-right"
          onClick={nextProject}
        />
      </div>
    </div>
  );
};

export default FeaturedWork;
