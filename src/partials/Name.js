import React, { useState } from 'react';
import './Name.css';

const Name = () => {
    const fontFamilies = [
        "Holtwood One SC, serif",
        "Piedra, cursive",
        "Racing Sans One, cursive",
        "Rock Salt, cursive"
    ];
    const fontSizes = [
        "100px",
        "130px",
        "130px",
        "75px"
    ];

    const [currentFontFamilyIndex, setCurrentFontFamilyIndex] = useState(0);
    const [currentFontSizeIndex, setCurrentFontSizeIndex] = useState(0);

    const handleNameTextClick = () => {
        setCurrentFontFamilyIndex((prevIndex) =>
            (prevIndex + 1) % fontFamilies.length
        );
        setCurrentFontSizeIndex((prevIndex) =>
            (prevIndex + 1) % fontSizes.length
        );
    };

    return (
        <div className="name">
            <div className="name-section">
                <p className="greed-text">Hi, I am</p>
                <div className="name-text-section">
                    <p
                        className="name-text"
                        style={{ fontFamily: fontFamilies[currentFontFamilyIndex], fontSize: fontSizes[currentFontSizeIndex] }}
                        onClick={handleNameTextClick}
                    >
                        Yun Ji How
                    </p>
                </div>
                <p className="small-info-text">&#x2022; Recent Graduate &#x2022; Interested in Web Development &#x2022;</p>
            </div>
        </div>
    );
};

export default Name;
