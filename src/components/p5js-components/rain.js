import React from 'react';
import p5 from 'p5';
import '../projects.css';

/* This component is a continuous rainfall of random colors. As the user presses the mouse button, more dots are drawn
There is a reset button to reset the canvas so the user can draw again */

class Rain extends React.Component {
     constructor(props) {
          super(props);
          this.myRef = React.createRef();
     }
     Sketch = ( sketch ) => {
          let width = 400;
          let height = 400;
          let xPositions = [200];
          let yPositions = [0];  
          //empty arrays to push random rbg color numbers for assigning random colors 
          let rColor = [];
          let bColor = [];
          let gColor = [];
          sketch.setup = () => {
               sketch.createCanvas(width, height);
          };
          sketch.draw = () => {
               /*if statement for mouse-pressed function, pushes x & y coordinates of mouse to starting points of rain
               also pushes randomly choosen rbg numbers to array for a color to be picked*/
               if(sketch.mouseIsPressed) {
                    xPositions.push(sketch.mouseX);
                    yPositions.push(sketch.mouseY);
                    rColor.push(sketch.random(0,255));
                    bColor.push(sketch.random(0,255));
                    gColor.push(sketch.random(0,255));  
               };
               sketch.background(16, 18, 43);
               sketch.noStroke();
               //for loop to to change positions of colored rain drops
               for (var i = 0; i < xPositions.length; i++) {
                    sketch.fill(rColor[i], bColor[i], gColor[i]);
                    sketch.ellipse(xPositions[i], yPositions[i] % 400, 10, 10);
                    yPositions[i] += 5;
               }
               //refresh button to reset page
               let buttonX =325;
               let buttonY = 10;
               let buttonHeight=30;
               let buttonWidth=60;
               sketch.fill(255,255,255);
               sketch.rect(buttonX, buttonY, buttonWidth, buttonHeight);
               sketch.fill(0,0,0);
               sketch.text("Refresh", buttonX+10, buttonY+20);    
               //mouse clicked movements to clear arrays and start over with single rain drop
               sketch.mouseClicked = function(){
                    if (sketch.mouseX >= buttonX && sketch.mouseX <= (buttonX+buttonWidth) &&
                    sketch.mouseY >= buttonY && sketch.mouseY <= (buttonY+buttonHeight)) {
                         xPositions = [200];
                         yPositions = [0];
                         rColor = [];
                         bColor = [];
                         gColor = [];
                    }
               }   
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
                         This project taught me how to use arrays and the % operator. 
                         Click around on the canvas to add more rain!
                         It might be my favorite project just for the colors.
                    </p>
               </div>
          );
     }
}
  
  export default Rain;