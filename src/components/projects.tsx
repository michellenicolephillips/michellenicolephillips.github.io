import React from 'react';
import './projects.scss'; 
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
                    <h2>Projects</h2>
                    <div className="projects-list">
                         <div className="project">
                              <h3>Gambino Hour</h3>
                              <div className="content">
                              In November 2025, Childish Gambino made his return to performing after a haitus due to health concerns. He took the state at Camp Flog Gnaw, a festival put on by Tyler the Creator.
                              In his one hour set, he kept stating how much time was left or that there wasn't enough time. I thought, "hey! Wouldn't it be funny if someone created a timer from his set?" and I did just that.
                              Taking clips of him stating how many minutes were left, I spent a couple hours one night creating this timer. There are very specific options based off what was said in his set and nothing more.
                              Kind of useless, but maybe one day you'll need a 23 minute timer. I present to you, 
                              <a className="links" href="https://michellephillips.me/gambinohour/" target="_blank" rel="noreferrer">Gambino Hour</a> 

                              </div>

                         </div>
                         <div className="project">
                              <h3>Morning Snack</h3>
                              <div className="content">
                              While I was already employed at UWorld, I figured I might as well complete the advanced web application certificate I was doing at Dallas College. In Spring 2023, I had a capstone course where I worked with a partner to design a website.
                              While our professor kept trying to convince us to use WordPress, we decided to use React. My partner had recently taken a class on React and I wanted to brush up on it since I was using Angular at work.
                              I ended up guiding the professor on React as he did not have experience with it. We made a website for a fake restaurant called, 
                              <a className="links" href="https://michellephillips.me/morning-snack/" target="_blank" rel="noreferrer">Morning Snack</a> 

                              </div>
                         </div>

                         <div className="project">
                              <h3>Zoom Chat Easy Reader</h3>
                              <div className="content">
                              <img className= "gif" src={zoomchatgif} alt="gif of zoomchat easy reader"/>
                              <div className="projectInfo">
                                   Written using React with Typescript, the<a className="links" href="https://zoom-chat-easy-reader.netlify.app/" target="_blank" rel="noreferrer">Zoom Chat Easy Reader</a>makes it easy to read saved Zoom Chats by taking out
                                   the ugly and leaving only the pretty. Drag a file over or paste in your chat and then group by names, hide timestamps, add markdown, hide messages, and more! Copy all or export as a cleaned up text file when you're finished.
                              </div>
                              </div>
                         </div>
                         <div className="project">
                         <h3 id="html">Baby Shower Website</h3>
                              <div>
                                   <div className="content">
                                        <img className= "gif" src={websitegif} alt="gif of baby shower website"/>
                                        <div className ="projectInfo">
                                             <br/>
                                             <a className="links" href="https://michellephillips.me/babyshower/" target="_blank" rel="noreferrer">This</a>is the first project I built during the pandemic as part of a zoom baby shower. I wanted to be able to provide my sister with something other than Zoom for her guests to interact.
                                             I was able to play with different CSS elements as well as creating my first form. As it was a first project, I haven't changed much to it so that I can show where I started from compared to where I'm at now with this portfolio website.
                                        </div>
                                   </div>
                              </div>
                         </div>
                    
                    </div>

                    
               </div>
          );
     }
}

export default Projects;