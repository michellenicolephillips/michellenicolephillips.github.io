import React from 'react';
import './about.css';

class Home extends React.Component {
     render() {
          return (
               <div id="about">
                    <head>
                         <title>Michelle P. - Home</title>
                    </head> 
                         <p className="content">
                              I'm a self-taught software developer coming from the hospitality industry.
                              I have a strong background in client relations, have been a trainer in multiple roles, and took on projects outside of my comfort zone.
                              In my previous roles I've always pushed past the definition of the job description,
                              seeking to learn more.
                              I've helped nurture agile and scrum culture in my teams and have broken down departmental silos, creating one cohesive team.
                              While I come form a non-traditional background, I hope to be a great addition to the industry with the continuation of my technical education and agile and problem solving skills.
                              <br/>
                              So far I've learned a little of:
                         </p>
                              <span className="language">HTML</span>
                              <span className="language">CSS</span>
                              <span className="language">Javascript</span>
                              <span className="language">React</span>
                              <br/>
                              <span className="language">C#</span>
                              <span className="language">Java</span>
                              <span className="language">SQL</span>
                              <p className="content">
                              Currently working on the Spring Framework.
                              Follow along as I learn a new industry.
                              Check out my projects below!
                         </p>
               </div>
          );
    }
}

export default Home;