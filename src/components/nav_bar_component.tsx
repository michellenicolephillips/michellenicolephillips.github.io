import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './nav_bar_component.scss';

// Define the shape of the props
interface NavBarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

class NavBar extends React.Component<NavBarProps> {
  render() {
    // Destructure props for cleaner usage
    const { isDark, toggleTheme } = this.props;

    return (
      <nav>
        <ul className="navbar">
          <li>
            <Link to="home" className="navLink" smooth duration={1000}>HOME</Link>
          </li>
          <li>
            <Link to="about" className="navLink" smooth duration={1000}>ABOUT</Link>
          </li>
          <li>
            <Link to="projects" className="navLink" smooth duration={1000}>PROJECTS</Link>
          </li>
          <li>
            <Link to="resume" className="navLink" smooth duration={1000}>RESUME</Link>
          </li>
          <li>
            <button
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              data-tooltip={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;