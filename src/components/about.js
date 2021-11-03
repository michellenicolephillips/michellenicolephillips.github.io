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
                                   I'm a self-taught software developer coming from the hospitality industry.
                                   I have a strong background in client relations, have been a trainer in multiple roles, and took on projects outside of my comfort zone.
                                   In my previous roles I've always pushed past the definition of the job description,
                                   seeking to learn more.
                                   I've helped nurture agile and scrum culture in my teams and have broken down departmental silos, creating one cohesive team.
                                   While I come from a non-traditional background, I hope to be a great addition to the industry with the continuation of my technical education, agile, and problem solving skills.
                                   <br/>
                                   So far I've learned a little of:
                              </p>
                              <span className="language">HTML</span>
                              <span className="language">CSS</span>
                              <span className="language">Javascript</span>
                              <span className="language">React</span>
                              <span className="language">Typescript</span>
                              <br/>
                              <span className="language">C#</span>
                              <span className="language">Java</span>
                              <span className="language">SQL</span>
                              <p className="content">
                                   Currently enrolled in classes at Dallas College and working on a<a className="links" href="https://zoom-chat-easy-reader.netlify.app/" target= "_blank" rel="noreferrer">Zoom Chat Easy Reader</a> 
                                   Follow along as I learn a new industry.
                                   Check out my projects below!
                              </p>
                         </div>
               </div>
          );
    }
}

export default About;