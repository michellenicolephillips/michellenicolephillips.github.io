import React from 'react';
import './footer.css';
import githublogo from '../res/images/github.png';
import linkedinlogo from '../res/images/linkedin.png';
import caret from '../res/images/caret.png';
import {Link} from 'react-scroll';

/* Website footer contains links to scroll back to top of page and links to socials (linkedin & github) */

class Footer extends React.Component {
     render() {
          return ( 
               <footer id="footer">
                    <Link to="home" smooth duration={1000}>
                         <img src = {caret} alt="arrow to scroll to top"/>
                    </Link>
                         <a className="icons" href="https://github.com/michellenicolephillips" target="_blank" rel="noreferrer"><img src= {githublogo} alt="github"/></a>
                         <a className="icons" href="https://www.linkedin.com/in/michellenicolephillips" target="_blank" rel="noreferrer" ><img src={linkedinlogo} alt="linkedin"/></a>
                    
               </footer>
          );
     }
}

export default Footer;