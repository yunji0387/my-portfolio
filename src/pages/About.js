import React from 'react';
import SubTitle from '../components/SubTitle';
import Content from '../components/Content';
import './About.css';

function About() {
  const introText = "Recent Computer Science graduates with a strong passion for coding and full-stack development. While I may not have prior professional experience in the field, I am highly motivated to pursue a career in full-stack development, willing to learn new skills and contribute to a dynamic team.";
  return (
    <div className="about">
      <SubTitle title="About" />
      <Content text={introText} name="Yun Ji How" />
    </div>
  );
}

export default About;
