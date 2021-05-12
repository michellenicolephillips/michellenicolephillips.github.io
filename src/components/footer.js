import React from 'react';
import './footer.css';
import githublogo from '../res/images/github.png';
import linkedinlogo from '../res/images/linkedin.png';
import caret from '../res/images/caret.png';

class Footer extends React.Component {
     render() {
          return ( 
               <footer className="footer">
                    <a className="icons" href="#home"><img src = {caret} alt="arrow to scroll to top"/></a>
                    <p>Check me out on:
                         <br/> 
                         <a className="icons" href="https://github.com/michellenicolephillips" target="_blank" rel="noreferrer"><img src= {githublogo} alt="github"/></a>
                         <a className="icons" href="https://www.linkedin.com/in/michellenicolephillips" target="_blank" rel="noreferrer" ><img src={linkedinlogo} alt="linkedin"/></a>
                    </p>
                    
               </footer>
          );
     }
}

export default Footer;