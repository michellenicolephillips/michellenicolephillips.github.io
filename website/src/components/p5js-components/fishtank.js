import React from 'react';
import p5 from 'p5';
import '../projects.css';


class Fishtank extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
      }
      Sketch =( sketch ) => {
        let width = 400;
        let height = 400;
        
        sketch.setup = () => {
          sketch.createCanvas(width, height);
          sketch.noLoop();
        };
      
        let drawBubble = function(minCoordinate,maxCoordinate){
            let bubbleX = sketch.random(minCoordinate,maxCoordinate);
            let bubbleY = sketch.random(minCoordinate, maxCoordinate);
            
            sketch.stroke(255, 255, 255);
            sketch.fill(132, 156, 224);
            sketch.ellipse(bubbleX, bubbleY, 10, 10);
        };
         //fish drawings
         let drawFish = function(coordinateX, coordinateY) {
            sketch.noStroke();
            let bodyHeight = sketch.random(20, 100);
            let bodyWidth = sketch.random(50, 200);
            //body
            sketch.fill(sketch.random(0,255), sketch.random(0,255), sketch.random(0,255));
            sketch.ellipse(coordinateX, coordinateY, bodyWidth, bodyHeight);
            //tail
            let tailWidth = bodyWidth/4;
            let tailHeight = bodyHeight/2;
            sketch.triangle(coordinateX-bodyWidth/2, coordinateY, coordinateX-bodyWidth/2-tailWidth, coordinateY-tailHeight, coordinateX-bodyWidth/2-tailWidth, coordinateY+tailHeight);
            //eye
            sketch.fill(0, 0, 0);
            sketch.ellipse(coordinateX+bodyWidth/4, coordinateY, bodyHeight/5, bodyHeight/5);
        };
        sketch.mouseClicked =() => {
            drawFish(sketch.mouseX, sketch.mouseY);
        };
        sketch.draw = () => {
            //static background
            sketch.background(92, 189, 224);
            sketch.noStroke();
            sketch.fill(58, 153, 102);//seaweed
            sketch.rect(10, 350, 10, 50);
            sketch.rect(45, 300, 10, 100);
            sketch.rect(80, 320, 10, 80);
            sketch.rect(130, 350, 10, 50);
            sketch.rect(170, 330, 10, 70);
            sketch.rect(210, 370, 10, 30);
            sketch.fill(82, 52, 36);//treasure chest
            sketch.rect(300, 350, 80, 50);
            sketch.fill(186, 186, 15);//fastenings
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
      };
      };
      componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
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