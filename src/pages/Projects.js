import React from 'react';
import { Link } from 'react-router-dom';
import SubTitle from '../components/SubTitle';
import './Projects.css';
import '../components/Band.css';
import dailyWebLogo from '../assets/images/yourDailyWebLogo.png';
import miniGameLogo from '../assets/images/miniShield.png';

function Projects() {
  return (
    <div className="project">
      <SubTitle title="Projects" />
      <div className="projects-section">
        <div className="band">
          <p className="project-description">Hit the box to view the web</p>
          <div className="projects-content">
            <Link to="http://minigames-app-3c6a32fb25e7.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-card ">
              <img src={miniGameLogo} alt="Mini Game Web Logo" className="project-card-img" />
              <div className="project-card-description">
                <p className="project-card-description-title">
                  Mini Games Web
                </p>
                <p className="project-card-description-info">
                  A simple web with collections of mini games.
                </p>
              </div>
            </Link>

            <Link to="https://dailyweb-51c4ca40411a.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-card ">
              <img src={dailyWebLogo} alt="Daily Web Logo" className="project-card-img" style={{ backgroundColor: 'aliceblue' }} />
              <div className="project-card-description">
                <p className="project-card-description-title">
                  Your Daily Web
                </p>
                <p className="project-card-description-info">
                  A website that provides basic information.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
