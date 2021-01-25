import React from 'react';
import p5 from 'p5';
import '../projects.css';


class Rain extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
      }
    Sketch = ( sketch ) => {
        let width = 400;
        let height = 400;
        let xPositions = [200];
        let yPositions = [0];   
        let rColor = [];
        let bColor = [];
        let gColor = [];
    
        sketch.setup = () => {
          sketch.createCanvas(width, height);
        };
      
        sketch.draw = () => {
            if(sketch.mouseIsPressed) {
                xPositions.push(sketch.mouseX);
                yPositions.push(sketch.mouseY);
                rColor.push(sketch.random(0,255));
                bColor.push(sketch.random(0,255));
                gColor.push(sketch.random(0,255));
                
            }
            sketch.background(16, 18, 43);
            sketch.noStroke();
           
            
            for (var i = 0; i < xPositions.length; i++) {
                sketch.fill(rColor[i], bColor[i], gColor[i]);
                sketch.ellipse(xPositions[i], yPositions[i] % 400, 10, 10);
                yPositions[i] += 5;
            }
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