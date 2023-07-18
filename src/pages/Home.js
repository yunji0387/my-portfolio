import React from 'react';
import Name from '../partials/Name';
import Intro from '../components/Intro';
import './Home.css';

function Home() {
    const introText = "I am a recent Computer Science graduates with a strong passion for coding and and a keen interest in web and software development. While I may not have prior professional experience in the field, I am highly motivated to pursue a career in coding, willing to learn new skills, and contribute to a dynamic team.";
    return (
        <div className="home">
            <Name />
            <Intro text={introText}/>
        </div>
    );
}

export default Home;