import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import githublogo from '../res/images/github.png';
import linkedinlogo from '../res/images/linkedin.png';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="spacer"></div>
        <div className="footer-center">
          <Link to="home" smooth duration={1000} className="return-link">
            <FontAwesomeIcon icon={faCaretUp} />
          </Link>
        </div>
        <div className="socials">
          <a
            href="https://github.com/michellenicolephillips"
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            <img src={githublogo} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/michellenicolephillips"
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            <img src={linkedinlogo} alt="linkedin" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;