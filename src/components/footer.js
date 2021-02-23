import React from 'react';
import './footer.css';
import githublogo from '../res/images/github.png';
import linkedinlogo from '../res/images/linkedin.png';

class Footer extends React.Component {
     render() {
          return ( 
               <footer className="footer"> 
                    <p>Check me out on:
                         <br/> 
                         <a className="social" href="https://github.com/michellenicole23" target="_blank" rel="noreferrer"><img src= {githublogo} alt="github"/></a>
                         <a className="social" href="https://www.linkedin.com/in/michelle-phillips-8a56a764/" target="_blank" rel="noreferrer" ><img src={linkedinlogo} alt="linkedin"/></a>
                    </p>
               </footer>
          );
     }
}

export default Footer;