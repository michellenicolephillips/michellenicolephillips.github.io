import React from 'react';
import p5 from 'p5';
import '../projects.css';

class Plate extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
      }
    Sketch = ( sketch ) => {
        let width = 400;
        let height = 400;

        sketch.setup = () => {
          sketch.createCanvas(width, height);
        };
      
        sketch.draw = () => {
          sketch.background(186, 145, 20); // wooden table
          sketch.stroke(0,0,0);
          sketch.strokeWeight(1);
          sketch.ellipse(200, 200, 350, 350); // plate
          sketch.ellipse(200, 200, 300, 300); 
    
          sketch.fill(240, 227, 173); //tortilla color
          sketch.ellipse(100, 200, 100, 100); //left taco
          sketch.ellipse(200, 200, 100, 100); //center taco
          sketch.ellipse(300, 200, 100, 100); //right taco
          
          sketch.fill(185, 148, 194); //fish color
          sketch.rect(90, 150, 20, 100); //left fish
          sketch.rect(190, 150, 20, 100); //center fish
          sketch.rect(290, 150, 20, 100); //right fish
          
          sketch.fill(137, 222, 120); //avocado color
          sketch.triangle(80, 160, 100, 220, 120, 210);//left avocado
          sketch.triangle(180, 160, 200, 220, 220, 210);//center avocado
          sketch.triangle(280, 160, 300, 220, 320, 210);//right avocado
          
          sketch.fill(255, 255, 255);//cheese
          sketch.ellipse(100, 200, 10, 10);//left cheese
          sketch.ellipse(120, 220, 10, 10);
          sketch.ellipse(100, 180, 10, 10);
          sketch.ellipse(80, 200, 10, 10);
          sketch.ellipse(90, 240, 10, 10);
          sketch.ellipse(200, 200, 10, 10);//center cheese
          sketch.ellipse(220, 220, 10, 10);
          sketch.ellipse(200, 180, 10, 10);
          sketch.ellipse(180, 200, 10, 10);
          sketch.ellipse(190, 240, 10, 10);
          sketch.ellipse(300, 200, 10, 10);//right cheese
          sketch.ellipse(320, 220, 10, 10);
          sketch.ellipse(300, 180, 10, 10);
          sketch.ellipse(280, 200, 10, 10);
          sketch.ellipse(290, 240, 10, 10);
          
          sketch.stroke(255, 0, 0);//tomato color for mango pico
          sketch.strokeWeight(20);
          sketch.point(100, 300);
          sketch.point(130,320);
          sketch.point(120, 300);
          sketch.point(150, 310);
          sketch.point(170, 300);
          sketch.point(160, 330);
          
          sketch.stroke(126, 191, 139);//jalapeno color
          sketch.strokeWeight(10);
          sketch.point(110, 300);
          sketch.point(120, 320);
          sketch.point(110, 310);
          sketch.point(180, 290);
          sketch.point(170, 330);
          sketch.stroke(255, 255, 255);//onion color
          sketch.strokeWeight(20);
          sketch.point(100, 300);
          sketch.point(140, 320);
          sketch.point(160, 290);
          sketch.point(180, 320);
          
          sketch.stroke(224, 154, 33);//mango color
          sketch.strokeWeight(20);
          sketch.point(190, 300);
          sketch.point(120, 300);
          sketch.point(150, 330);
          sketch.point(150, 300);
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
                For the first project in "Intro to JS", Khan Academy tasks the user with using shapes, color, and strokes using ProcessingJS. 
                    I chose to draw "Fish Tacos with Mango Pico." It was a good entry assignment to start learning JS and to hook the learner (me).
                </p>
              </div>
          );
      }
  }
  
  export default Plate;