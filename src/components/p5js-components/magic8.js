import React from 'react';
import p5 from 'p5';
import '../projects.css';

/* This component is a magic eight ball. When you click on the ball, a different answer will appear
Two fonts are used to show how to change the fonts as well as different font sizes*/

class Magic8 extends React.Component {
     constructor(props) {
          super(props);
          this.myRef = React.createRef();
     }
     Sketch = ( sketch ) => {
          let width = 400;
          let height = 400;
          sketch.setup = () => {
               sketch.createCanvas(width, height);
               sketch.noLoop();
          };
          sketch.draw = () => {
               //draw magic eight ball, black outside
               sketch.fill(0, 0, 0);
               sketch.ellipse(200, 200, 375, 375);
               //blue triangle inside magic 8 ball
               sketch.fill(60, 0, 255);
               sketch.triangle(200, 104, 280, 280, 120, 280);
               //picks a random number between 1 & 5 to assign answer to value
               let answer = sketch.ceil(sketch.random(1, 5));
               //else if statement to assign answers to the random number drawn above
               if (answer === 1) {
                    //neon pink helvetica text
                    sketch.fill(255, 0, 0);
                    sketch.textFont('Helvetica');
                    sketch.textSize(25);
                    sketch.text("It is", 180, 200);
                    sketch.text("certain.", 159, 229); 
               } else if (answer === 2) {
                    //purple-pink helvetica text
                    sketch.fill(224, 67, 224);
                    sketch.textFont('Helvetica');
                    sketch.textSize(25);
                    sketch.text("Maybe", 165, 220);
                    sketch.text("so.", 190, 240); 
               } else if (answer === 3) {
                    //light blue cursive text
                    sketch.fill(147, 221, 240);
                    sketch.textFont('cursive');
                    sketch.textSize(20);
                    sketch.text("Probably", 165, 220);
                    sketch.text("not.", 190, 240); 
               } else if (answer === 4) {
                    //yellow cursive text
                    sketch.fill(248, 255, 56);
                    sketch.textFont('cursive');
                    sketch.textSize(20);
                    sketch.text("I don't", 175, 200);
                    sketch.text("think so.", 170, 229);     
               } else {
                    //green helvetica text
                    sketch.fill(0, 255, 30);
                    sketch.textFont('Helvetica');
                    sketch.textSize(20);
                    sketch.text("Ask again", 160, 230);
                    sketch.text("TOMORROW.", 140, 260); 
               }
          };
          //function to redraw and display new answer when mouse is clicked
          sketch.mouseClicked = () =>{
               if ((sketch.mouseX <= width && sketch.mouseX >= 0) && (sketch.mouseY <=height && sketch.mouseX >=0)){
                    sketch.redraw();
          
               }
          }
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
                         Have your fortune told with this magic eightball I created using if/else statments for the first time!
                         This is also the first time I learned math statements. 
                         Ask a question and then click on the eightball for your answer!
                    </p>
               </div>
          );
     }
}
  
  export default Magic8;