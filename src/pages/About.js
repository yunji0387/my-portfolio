import React from 'react';
import SubTitle from '../components/SubTitle';
import Content from '../components/Content';
import './About.css';

function About() {
  return (
    <div className="about">
      <SubTitle title="About" />
      <Content />
    </div>
  );
}

export default About;
