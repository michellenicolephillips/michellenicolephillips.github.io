import React from 'react';
import './projects.css'; 
import {
     BrowserRouter as Router,
  } from "react-router-dom";
import websitegif from '../res/images/babyshowerwebsite.gif';
import zoomchatgif from '../res/images/zoomChatEasyReader.gif';

/* Collection of all p5 components in one section. Navbar for navigating between projects */

class Projects extends React.Component {
     render() {
          return (
               <div className="projects">
                    <head>
                         <title>Michelle P. - Projects</title>
                    </head> 
                    <div>Projects</div>
                    <div className="projects-list">
                         <div className="project">
                              <h3>Gambino Hour</h3>
                              <p>just fucking aroud. who doesn't need a 23 minute timer?<a className="links" href="https://michellephillips.me/gambinohour/" target="_blank" rel="noreferrer">Gambino Hour</a> </p>
                         </div>
                         <div className="project">
                              <h3>Morning Snack</h3>
                              <p>Class project<a className="links" href="https://michellephillips.me/morning-snack/" target="_blank" rel="noreferrer">Morning Snack</a> </p>
                         </div>

                         <div className="project">
                              <h3>Zoom Chat Easy Reader</h3>
                              <div className="content">
                              <img className= "gif" src={zoomchatgif} alt="gif of zoomchat easy reader"/>
                                   <p className="projectInfo">
                                        Written using React with Typescript, the<a className="links" href="https://zoom-chat-easy-reader.netlify.app/" target="_blank" rel="noreferrer">Zoom Chat Easy Reader</a>makes it easy to read saved Zoom Chats by taking out
                                        the ugly and leaving only the pretty. Drag a file over or paste in your chat and then group by names, hide timestamps, add markdown, hide messages, and more! Copy all or export as a cleaned up text file when you're finished.
                                   </p>
                              </div>
                         </div>
                         <div className="project">
                         <h3 id="html">Baby Shower Website</h3>
                              <div>
                                   <div className="content">
                                        <img className= "gif" src={websitegif} alt="gif of baby shower website"/>
                                        <p className ="projectInfo">
                                             <br/>
                                             <a className="links" href="https://michellephillips.me/babyshower/" target="_blank" rel="noreferrer">This</a>is the first project I built during the pandemic as part of a zoom baby shower. I wanted to be able to provide my sister with something other than Zoom for her guests to interact.
                                             I was able to play with different CSS elements as well as creating my first form. As it was a first project, I haven't changed much to it so that I can show where I started from compared to where I'm at now with this portfolio website.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    
                    </div>

                    
               </div>
          );
     }
}

export default Projects;