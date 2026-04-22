import React from 'react';
import { Link } from 'react-scroll';
import './nav_bar_component.css';

class NavBar extends React.Component {
  state = {
    isDark: false
  };

  componentDidMount() {
    // Check if the user previously saved a theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.setState({ isDark: true });
      document.body.classList.add('dark-theme');
    }
  }

  toggleTheme = () => {
    const newTheme = !this.state.isDark;
    this.setState({ isDark: newTheme });

    // Apply the class and save to localStorage
    if (newTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  render() {
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
          {/* Theme Toggle Button */}
          <li>
            <button className="theme-toggle" onClick={this.toggleTheme}>
              {this.state.isDark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;