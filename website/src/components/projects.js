import React from 'react';
import './projects.css';
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
                    I started with<a className="links "href="https://www.codecademy.com/" target="_blank"><strong>Codecademy</strong></a>for CSS/HTML and moved to<a className= "links" href="https://www.khanacademy.org/" target="_blank"><strong>Khan Academy</strong></a>for Javascript and SQL.<br/>
                    I will continue to add to this page as I learn more languages. Currently I am learning C# and React.
                </p>
                <Bookshelf/>
                <Rain/>
                <House/>
                <Magic8/>
                <Fishtank/>
                <Spork/>
                <Animal/>
                <City/>
                <Plate/>
            </div>
        );
    }
}

export default Projects;