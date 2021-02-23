import React from 'react';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     NavLink
} from "react-router-dom";
import './nav_bar_component.css';
import Home from './home';
import Resume from './resume';
import Projects from './projects';

class NavBar extends React.Component {
     render() {
          return ( 
               <Router basename="/portfolio">
                    <div>
                         <ul className="navbar">
                              <li className="navlink"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                              <li className="navlink"><NavLink exact to="/projects/" activeClassName="active">Projects</NavLink></li>
                              <li className="navlink"><NavLink exact to="/resume/" activeClassName="active">Resume</NavLink></li>
                         </ul>
                         <Switch>
                              <Route path="/projects/">
                                   <Projects />
                              </Route>
                              <Route path="/resume/">
                                   <Resume />
                              </Route>
                              <Route path="/">
                                   <Home />
                              </Route>
                         </Switch>
                    </div>
               </Router>
          );
     }
}

export default NavBar;