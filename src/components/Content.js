import React from 'react';
import './Content.css';
import '../components/Band.css';

function Content(props) {
  return (
    <div className="content">
      <div className="band content-section">
        <p className="content-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Content;
