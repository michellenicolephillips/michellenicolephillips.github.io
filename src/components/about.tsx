import React from 'react';
import './about.scss';
import self from '../res/images/me.jpg';

/* About me Component introduces self and languages learned */

class About extends React.Component {
     render() {
          return (
               <div id="about">
                    <h2>About Me</h2>
                    <div className = "self">
                         <img id = "selfpic" src = {self} alt="michelle, the portfolio creator"/>
                    </div>
                    <div className = "aboutme">
                         <p className="content">
                              I'm a full-stack engineer currently working at Uworld LLC working in educational techonology. I've been there almost four years after teaching myself to code during the pandemic. 
                              I use Angular and .NET and have experience with LINQ, SQL, and MongoDB. I am a core member of our team and mentor new hires as well as working on design outside of coding.
                              I chose to leave this website written in React and update it to challenge myself with something outside of my comfort zone.
                              I have a bachelor's in an unrelated field from the Univerity of North Texas and a certifcate from Dallas College in Advanced Web Application Programming.

                         </p>
                    </div>
               </div>
          );
    }
}

export default About;