import React from 'react';
import './home.css';

class Home extends React.Component {
     render() {
          return (
               <div id="home">
                    <head>
                         <title>Michelle P. - Home</title>
                    </head> 
                    <h1>Hi Y'all!</h1>
                    <h3>I'm Michelle</h3>
                    <p className="intro">
                         I'm a self-taught software developer coming from the hospitality industry.
                         I have a strong background in client relations, have been a trainer in multiple roles, and took on projects outside of my comfort zone.
                         In my previous roles I've always pushed past the definition of the job description,
                         seeking to learn more.
                         I've helped nurture agile and scrum culture in my teams and have broken down departmental silos, creating one cohesive team.
                         While I come form a non-traditional background, I hope to be a great addition to the industry with the continuation of my technical education and agile and problem solving skills.
                         <br/>
                         So far I've learned a little of:
                    </p>
                    <ul class="intro">
                         <li>HTML</li>
                         <li>CSS</li>
                         <li>Javascript</li>
                         <li>SQL</li>
                         <li>C#</li>
                         <li>React</li>
                         <li>Java</li>
                    </ul>
                    <p className="intro">
                         Check out my projects page!
                         Currently working on the Spring Framework.
                         Follow along as I learn a new industry.
                    </p>
               </div>
          );
    }
}

export default Home;