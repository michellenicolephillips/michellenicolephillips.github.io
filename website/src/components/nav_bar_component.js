import React from 'react';
import './nav_bar_component.css';

class NavBar extends React.Component {
  render() {
    return ( 
    <ul className="navbar">
        <li className="navlink" id="active"><a href="index.html">Home</a></li>
        <li className="navlink"><a href="projects.html">Projects</a></li>
        <li className="navlink"><a href="resume.html">Resume</a></li>
    </ul>
    );
  }
}

export default NavBar;