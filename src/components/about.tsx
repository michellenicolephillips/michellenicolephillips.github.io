import React from 'react';
import './about.css';
import self from '../res/images/me.jpg';

/* About me Component introduces self and languages learned */

class About extends React.Component {
     render() {
          return (
               <div id="about">
                    <head>
                         <title>Michelle P.</title>
                    </head> 
                         <h1>About Me</h1>
                         <div className = "self">
                              <img id = "selfpic" src = {self} alt="michelle, the portfolio creator"/>
                         </div>
                         <div className = "aboutme">
                              <p className="content">
                                   I'm a self-taught developer from Texas. I have a background in the hospitality industry prior to becoming a full time developer. I have a bachelor's in an unrelated field from the Univerity of North Texas.
                                   I also completed a certifcate in Advanced Web Application Programming from Dallas College after teaching myself how to code.
                                   As of June 2022, I'm employed at Uworld LLC working on Education Techonology in Angular, C#, and SQL.
                              </p>
                         </div>
               </div>
          );
    }
}

export default About;