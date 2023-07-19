import React from 'react';
import './Band.css';

const Intro = (props) => {
    return (
        <div className="band">
            <p className="band-text">
                {props.text}
            </p>
        </div>
    );
};

export default Intro;
