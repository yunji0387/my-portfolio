import React from 'react';
import Name from '../partials/Name';
import Intro from '../partials/Intro'
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Name />
            <Intro />
        </div>
    );
}

export default Home;