import React from 'react';
import './projects.css'; 
import {
     BrowserRouter as Router,
     Switch,
     Route,
     NavLink
  } from "react-router-dom";
import Bookshelf from './p5js-components/bookshelf';
import Rain from './p5js-components/rain';
import House from './p5js-components/house';
import Magic8 from './p5js-components/magic8';
import Fishtank from './p5js-components/fishtank';
import Spork from './p5js-components/spork';
import Animal from './p5js-components/animal';
import City from './p5js-components/city';
import Plate from './p5js-components/plate';
import websitegif from '../res/images/babyshowerwebsite.gif';

/* Collection of all p5 components in one section. Navbar for navigating between projects */

class Projects extends React.Component {
     render() {
          return (
               <div id ="projects">
                    <head>
                         <title>Michelle P. - Projects</title>
                    </head> 
                    <h1>Projects</h1>
                    <p className="content">
                         This page contains every front end project I've work on in my journey to learning to code from the latest project I've worked on to the very first one.
                         I started with<a className="links "href="https://www.codecademy.com/" target="_blank" rel="noreferrer"><strong>Codecademy</strong></a>for CSS/HTML and React and <a className= "links" href="https://www.khanacademy.org/" target="_blank" rel="noreferrer"><strong>Khan Academy</strong></a>for Javascript through p5.js.
                         I will continue to add to this page as I learn more languages.
                    </p>
                    <br/>
                    <Router basename = "/projects/">
                    <h3>Javascript Projects</h3>
                         <div className="column1">
                              <ul className="projectbar">
                                   <li className="projlink"><NavLink exact to="/" activeClassName="projactive">Bookshelf</NavLink></li>
                                   <li className="projlink"><NavLink exact to="/rain" activeClassName="projactive">Rain</NavLink></li>
                                   <li className="projlink"><NavLink exact to="/house" activeClassName="projactive">House</NavLink></li>
                                   <li className="projlink"><NavLink exact to="/magic8" activeClassName="projactive">Fortune Telling</NavLink></li>
                                   <li className="projlink"><NavLink exact to="/fishtank" activeClassName="projactive">Fishtank</NavLink></li>
                                   <li className="projlink"><NavLink exact to="/spork" activeClassName="projactive">Marketing</NavLink></li>
                                   <li className="projlink"><NavLink exact to="/animal" activeClassName="projactive">Mouse</NavLink></li>
                                   <li className="projlink"><NavLink exact to="/city" activeClassName="projactive">City Skyline</NavLink></li>
                                   <li className="projlink"><NavLink exact to="/plate" activeClassName="projactive">What's for dinner?</NavLink></li>
                              </ul>
                              </div>
                              <div className="column2">
                              <Switch>
                                   <Route path="/rain">
                                        <Rain/>
                                   </Route>
                                   <Route path="/house">
                                        <House/>
                                   </Route>
                                   <Route path="/magic8">
                                        <Magic8/>
                                   </Route>
                                   <Route path="/fishtank">
                                        <Fishtank/>
                                   </Route>
                                   <Route path="/spork">
                                        <Spork/>
                                   </Route>
                                   <Route path="/animal">
                                        <Animal/>
                                   </Route>
                                   <Route path="/city">
                                        <City/>
                                   </Route>
                                   <Route path="/plate">
                                        <Plate/>
                                   </Route>
                                   <Route path="/">
                                        <Bookshelf/>
                                   </Route>
                              </Switch>
                         </div>
                    </Router>
                    <h3>HTML/CSS Projects</h3>
                    <div>
                         <p className="content">
                              <img className= "gif" src={websitegif} alt="gif of baby shower website"/>
                              <div className ="htmlInfo">
                                   <br/>
                                   <a className="links" href="https://babynelson.life/" target="_blank" rel="noreferrer">This</a>is the first project I built during the pandemic as part of a zoom baby shower. I wanted to be able to provide my sister with something other than Zoom for her guests to interact.
                                   I was able to play with different CSS elements as well as creating my first form. As it was a first project, I haven't changed much to it so that I can show where I started from compared to where I'm at now with this portfolio website.
                              </div>
                         </p>
                    </div>
               </div>
          );
     }
}

export default Projects;