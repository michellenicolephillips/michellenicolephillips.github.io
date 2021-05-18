import React from 'react';
import p5 from 'p5';
import '../projects.css';

/* Component built as an ad for spork to practice using text in p5 as well as using mouse events */

class Spork extends React.Component {
     constructor(props) {
          super(props);
          this.myRef = React.createRef();
     }
     Sketch = ( sketch ) => {
          let width = 400;
          let height = 400;
          sketch.setup = () => {
               sketch.createCanvas(width, height);
          };
          sketch.draw = () => {
               //red background for spork ad
               sketch.background(130, 56, 56);
               //blue text for add in various sizes
               sketch.fill(67, 173, 173);
               sketch.textSize(30);
               sketch.text("The AMAZING Spork!", 50, 30);
               sketch.textSize(20);
               sketch.text("Is it a spoon?", 150, 70);
               sketch.text("Is it a fork?", 150, 100);
               sketch.textSize(35);
               sketch.text("IT'S BOTH!", 120, 140);
               sketch.textSize(12);
               sketch.text("Save time with the dishes and order the only utensil you will ever need!", 20, 170);
               sketch.textSize(10);
               sketch.text("*Knife not included", 300, 200);
               //smiley face using the fork
               //yellow round face
               sketch.fill(255, 204, 0);
               sketch.ellipse(10, 325, 300, 300);
               //black void of a mouth drawn using a circle
               sketch.fill(0, 0, 0);
               sketch.ellipse(40, 350, 200, 200);
               //black eyes
               sketch.ellipse(70, 225, 20, 20);
               sketch.ellipse(20, 225, 20, 20);
               //drawing of spork using gray ellipse in an oval shape and long grey rectangle for handle
               //mouseX position used to move spork left and right with user's mouse
               sketch.noStroke();
               sketch.fill(133, 126, 126);
               sketch.ellipse(sketch.mouseX, 350, 100, 50);
               sketch.rect(sketch.mouseX+25, 340, 150, 15);
               //red rectangles to divide the rectangle into multiple prongs
               sketch.fill(130, 56, 56);
               sketch.rect(sketch.mouseX-50, 350, 30, 2);//top prong divide
               sketch.rect(sketch.mouseX-50, 345, 30, 2);//middle prong divide
               sketch.rect(sketch.mouseX-50, 355, 30, 2);//bottom prong divide
               //cherry (or tomato) in bright red to sit on spork
               sketch.fill(255, 0, 0);
               sketch.ellipse(sketch.mouseX, 325, 30, 30);
          };
     };
     componentDidMount() {
          this.myP5 = new p5(this.Sketch, this.myRef.current);
     }
     render() {
          return (
               <div className="projects"> 
                    <div ref={this.myRef}>
                    </div>
                    <p className="project-info">
                         For this project, I was tasked with creating an ad using text commands.
                         I also used mouse commands for the first time. 
                         Move your mouse across the canvas to see what happens!
                    </p>
               </div>
          );
     }
}
  
  export default Spork;