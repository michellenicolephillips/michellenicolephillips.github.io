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



class Projects extends React.Component {
  render() {
    return (
        <div>
          <p className="content">
                    This page contains every project I've work on in my journey to learning to code from the latest project I've worked on to the very first one. <br/>
                    I started with<a className="links "href="https://www.codecademy.com/" target="_blank" rel="noreferrer"><strong>Codecademy</strong></a>for CSS/HTML and moved to<a className= "links" href="https://www.khanacademy.org/" target="_blank" rel="noreferrer"><strong>Khan Academy</strong></a>for Javascript and SQL.<br/>
                    I will continue to add to this page as I learn more languages. Currently I am learning C# and React.
                </p>
        <Router>
      <div>
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
        </div>
        );
    }
}

export default Projects;