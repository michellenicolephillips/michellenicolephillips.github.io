import React from 'react';
import p5 from 'p5';
import '../projects.css';

/*this component is a fish tank. when the user clicks on the canvas, a random colored/sized fish is drawn. 
there is a refresh button that resets the canvas and changes the positions of the bubbles to another random coordinate */

class Fishtank extends React.Component {
     constructor(props) {
          super(props);
          this.myRef = React.createRef();
     }
     Sketch =( sketch ) => {
          let width = 400;
          let height = 400;
        
          sketch.setup = () => {
               sketch.createCanvas(width, height);
               sketch.noLoop();
          };
          //bubbles drawing method
          let drawBubble = function(minCoordinate,maxCoordinate){
               let bubbleX = sketch.random(minCoordinate,maxCoordinate);
               let bubbleY = sketch.random(minCoordinate, maxCoordinate);
               sketch.stroke(255, 255, 255);
               sketch.fill(132, 156, 224);
               sketch.ellipse(bubbleX, bubbleY, 10, 10);
          };
          //fish drawing method
          let drawFish = function(coordinateX, coordinateY) {
               sketch.noStroke();
               let bodyHeight = sketch.random(20, 100);
               let bodyWidth = sketch.random(50, 200);
               //fish body
               sketch.fill(sketch.random(0,255), sketch.random(0,255), sketch.random(0,255));
               sketch.ellipse(coordinateX, coordinateY, bodyWidth, bodyHeight);
               //fish tail
               let tailWidth = bodyWidth/4;
               let tailHeight = bodyHeight/2;
               sketch.triangle(coordinateX-bodyWidth/2, coordinateY, coordinateX-bodyWidth/2-tailWidth, coordinateY-tailHeight, coordinateX-bodyWidth/2-tailWidth, coordinateY+tailHeight);
               //fish eye
               sketch.fill(0, 0, 0);
               sketch.ellipse(coordinateX+bodyWidth/4, coordinateY, bodyHeight/5, bodyHeight/5);
          };
          //static background for fish tank
          sketch.draw = () => {
               sketch.background(92, 189, 224);
               sketch.noStroke();
               //seaweed drawings
               sketch.fill(58, 153, 102)
               sketch.rect(10, 350, 10, 50);
               sketch.rect(45, 300, 10, 100);
               sketch.rect(80, 320, 10, 80);
               sketch.rect(130, 350, 10, 50);
               sketch.rect(170, 330, 10, 70);
               sketch.rect(210, 370, 10, 30);
               //treasure chest drawings
               sketch.fill(82, 52, 36);
               sketch.rect(300, 350, 80, 50);
               //fastenings for treasure chest drawings
               sketch.fill(186, 186, 15);
               sketch.rect(320, 350, 5, 50);
               sketch.rect(360, 350, 5, 50);
               sketch.rect(300, 360, 80, 5);
               sketch.rect(300, 370, 80, 5);
               //bubble drawings
               drawBubble(20,400);
               drawBubble(100,200);
               drawBubble(300,350);
               drawBubble(20,150);
               drawBubble(300, 350);
               //refresh button parameters
               let buttonX =325;
               let buttonY = 10;
               let buttonHeight=30;
               let buttonWidth=60;
               //mouse clicked movements
               sketch.mouseClicked = function(){
                    //draws fish when clicked
                    drawFish(sketch.mouseX, sketch.mouseY);
                    //resets drawing when refresh button is clicked
                    if (sketch.mouseX >= buttonX && sketch.mouseX <= (buttonX+buttonWidth) &&
                    sketch.mouseY >= buttonY && sketch.mouseY <= (buttonY+buttonHeight)) {
                         sketch.redraw();
                    }
               //draw refresh button after fish so button is layed on top
               sketch.fill(255,255,255);
               sketch.rect(buttonX, buttonY, buttonWidth, buttonHeight);
               sketch.fill(0,0,0);
               sketch.text("Refresh", buttonX+10, buttonY+20);
               }     
         
        
          };
     }
     componentDidMount() {
          this.myP5 = new p5(this.Sketch, this.myRef.current);
     }
     render() {
          return (
               <div className="projects"> 
                    <div ref={this.myRef}>
                    </div>
                    <p class="project-info">
                         This fishtank project was an introduction into creating functions. I made two different ones for this.
                         If you refresh the page, the bubbles will move to a random place each time on the canvas. 
                         Click on the canvas to see what else happens!
                    </p>
               </div>
          );
     }
}
  
  export default Fishtank;