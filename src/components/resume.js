import React from 'react';
import './resume.css';

class Resume extends React.Component {
    render() {
        return (
            <div id = "resume">
                <head>
                    <title>Michelle P. - Resume</title>
                </head> 
                <h1>Resume</h1>
                <p className="content">Quick learning, self-starter seeking first time employment in the tech industry.
                    Below is my resume showcasing programs and skills I utilized in hospitality.
                </p>
                <br/>
                <iframe id="docIFrame" title="resume"
                    src="https://docs.google.com/document/d/e/2PACX-1vTfMmrO8m_s9ni51arWRidgTCeLGYfLCG1CWSPWyYX2IKxBbop8nkccyGeiQAmZvMK98F2mHIiw8pkX/pub?embedded=true">
                </iframe>
                <p className="links" id="download">
                    <a href="https://docs.google.com/document/d/1UZ2IMxzmmRji-FAV5HEnE2mvVClRSEA2vGKFg8IErT8/export?format=pdf">Download as PDF</a>
                </p>    
            </div>
        );
    }
}

export default Resume;