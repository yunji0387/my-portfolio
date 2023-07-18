import React from 'react';
import './Intro.css';

const Intro = (props) => {
    return (
        <div className="intro">
            <div className="intro-section">
                <p className="intro-text">
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export default Intro;
