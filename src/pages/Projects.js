import React from 'react';
import SubTitle from '../components/SubTitle';
import Intro from '../components/Intro';
import './Projects.css';

function Projects() {
  return (
    <div className="project">
      <SubTitle title="Projects" />
      <div className="projects-content">
        <Intro text="Coming Soon..." />
      </div>
    </div>
  );
}

export default Projects;
