import React from 'react';
import SubTitle from '../components/SubTitle';
import Content from '../components/Content';
import './About.css';

function About() {
  const introText = "I am a recent Computer Science graduates with a strong passion for coding and and a keen interest in web and software development. While I may not have prior professional experience in the field, I am highly motivated to pursue a career in coding, willing to learn new skills, and contribute to a dynamic team.";
  return (
    <div className="about">
      <SubTitle title="About" />
      <Content text={introText} name="Yun Ji How" />
    </div>
  );
}

export default About;
