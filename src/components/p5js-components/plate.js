import React from 'react';
import p5 from 'p5';
import '../projects.css';

/*Component of first javascript project using p5 to get user into coding. 
This project is a plate of food the user chose to draw.
I chose to draw a plate of fish tacos.
All values are hard-coded as this was a first project */

class Plate extends React.Component {
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
               //wooden table for background
               sketch.background(186, 145, 20);
               //plate outlines in black, plate is white.
               sketch.stroke(0,0,0);
               sketch.strokeWeight(1);
               //outer edge of plate
               sketch.ellipse(200, 200, 350, 350);
               //inside portion of plate
               sketch.ellipse(200, 200, 300, 300); 
               //tortillas using ellipses, beige color
               sketch.fill(240, 227, 173);
               sketch.ellipse(100, 200, 100, 100); //left taco
               sketch.ellipse(200, 200, 100, 100); //center taco
               sketch.ellipse(300, 200, 100, 100); //right taco
               //fish strips as rectangles, light pink color
               sketch.fill(185, 148, 194);
               sketch.rect(90, 150, 20, 100); //left fish
               sketch.rect(190, 150, 20, 100); //center fish
               sketch.rect(290, 150, 20, 100); //right fish
               //avocado slices as triangles, light green color
               sketch.fill(137, 222, 120);
               sketch.triangle(80, 160, 100, 220, 120, 210);//left avocado
               sketch.triangle(180, 160, 200, 220, 220, 210);//center avocado
               sketch.triangle(280, 160, 300, 220, 320, 210);//right avocado
               //cheese crumbles as ellipses, white color
               sketch.fill(255, 255, 255);
               //left taco cheese
               sketch.ellipse(100, 200, 10, 10);
               sketch.ellipse(120, 220, 10, 10);
               sketch.ellipse(100, 180, 10, 10);
               sketch.ellipse(80, 200, 10, 10);
               sketch.ellipse(90, 240, 10, 10);
               //center taco cheese
               sketch.ellipse(200, 200, 10, 10);
               sketch.ellipse(220, 220, 10, 10);
               sketch.ellipse(200, 180, 10, 10);
               sketch.ellipse(180, 200, 10, 10);
               sketch.ellipse(190, 240, 10, 10);
               //right taco cheese
               sketch.ellipse(300, 200, 10, 10);
               sketch.ellipse(320, 220, 10, 10);
               sketch.ellipse(300, 180, 10, 10);
               sketch.ellipse(280, 200, 10, 10);
               sketch.ellipse(290, 240, 10, 10);
               /*The following points make up the mango pico de gallo, different sized points her ingredient*/
               //tomato points, red
               sketch.stroke(255, 0, 0);
               sketch.strokeWeight(20);
               sketch.point(100, 300);
               sketch.point(130,320);
               sketch.point(120, 300);
               sketch.point(150, 310);
               sketch.point(170, 300);
               sketch.point(160, 330);
               //jalapeno points, green
               sketch.stroke(126, 191, 139);
               sketch.strokeWeight(10);
               sketch.point(110, 300);
               sketch.point(120, 320);
               sketch.point(110, 310);
               sketch.point(180, 290);
               sketch.point(170, 330);
               //onion points, white
               sketch.stroke(255, 255, 255);
               sketch.strokeWeight(20);
               sketch.point(100, 300);
               sketch.point(140, 320);
               sketch.point(160, 290);
               sketch.point(180, 320);
               //mango points, orange
               sketch.stroke(224, 154, 33);
               sketch.strokeWeight(20);
               sketch.point(190, 300);
               sketch.point(120, 300);
               sketch.point(150, 330);
               sketch.point(150, 300);
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
                         For the first project in "Intro to JS", Khan Academy tasks the user with using shapes, color, and strokes using ProcessingJS. 
                         I chose to draw "Fish Tacos with Mango Pico." It was a good entry assignment to start learning JS and to hook the learner (me).
                    </p>
               </div>
          );
     }
}
  
  export default Plate;