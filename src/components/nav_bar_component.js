import React from 'react';
import {Link} from 'react-scroll';
import './nav_bar_component.css';

class NavBar extends React.Component {

     render() {
          return (
               <div>
               <nav>
                    <ul className="navbar">
                         <li>
                              <Link to="home" className= "navLink" smooth duration={1000}>HOME</Link>
                         </li>
                         <li>
                              <Link to="about" className= "navLink" smooth duration={1000}>ABOUT</Link>
                         </li>
                         <li>
                              <Link to="projects" className= "navLink" smooth duration={1000}>PROJECTS</Link>
                         </li>
                         <li>
                              <Link to="resume" className= "navLink" smooth duration={1000}>RESUME</Link>
                         </li>

                    </ul>
               </nav>
               </div>
          )
     }
}

export default NavBar;