import React from 'react';
import p5 from 'p5';
import '../projects.css';

/*This component is drawing of a mouse blowing bubble gum. The gum is looped to pop and redraw*/

class Animal extends React.Component {
     constructor(props) {
          super(props);
          this.myRef = React.createRef();
     }    
     sketch = (( sketch ) => {
          let width = 400;
          let height = 400;
          let faceX = 190;
          let faceY = 214;
          let faceSize = 165;
          let noseSize = faceSize/10;
          let eyeSize = faceSize/8;
          let outsideEarSize = faceSize/3;
          let insideEarSize = faceSize/5;
          let gumSize = faceSize/10;

          sketch.setup = () => {
               sketch.createCanvas(width, height);
          };
        
          sketch.draw = () => {
               sketch.background(43, 71, 71);
               //mouse drawing
               //outside of ears, colored grey
               sketch.fill(122, 121, 113);
               sketch.ellipse(faceX- 1/4* faceSize, faceY-1/2 * faceSize, outsideEarSize, outsideEarSize);
               sketch.ellipse(faceX + 1/4*faceSize, faceY-1/2*faceSize, outsideEarSize, outsideEarSize);
               //inside of ears, colored pink
               sketch.fill(189, 144, 187);
               sketch.ellipse(faceX- 1/4* faceSize, faceY-1/2 * faceSize, insideEarSize, insideEarSize);
               sketch.ellipse(faceX + 1/4*faceSize, faceY-1/2*faceSize, insideEarSize, insideEarSize);
               //face, colored gray
               sketch.fill(122, 121, 113);
               sketch.ellipse(faceX, faceY, faceSize, faceSize);
               //eyes, colored black
               sketch.fill(0, 0, 0);
               sketch.ellipse(faceX-1/5*faceSize, faceY-1/4*faceSize, eyeSize, eyeSize);
               sketch.ellipse(faceX+1/5*faceSize,faceY-1/4*faceSize, eyeSize, eyeSize);
               //whiskeres, also black, each position labeled next to whisker
               sketch.fill(0, 0, 0);
               sketch.line (faceX*19/20, faceY,faceX*1/20,faceY);//midleft
               sketch.line(faceX*39/20, faceY, faceX*21/20, faceY);//midright
               sketch.line(faceX*1/10, faceY*0.75, faceX*19/20,faceY);//topleft
               sketch.line(faceX*1/10, faceY*1.25, faceX*19/20, faceY);//bottomleft
               sketch.line(faceX*38/20, faceY*0.75, faceX*21/20, faceY);//topright
               sketch.line(faceX*38/20, faceY*1.25, faceX*21/20, faceY);//bottomright
               //nose, colored pink
               sketch.fill(189, 144, 187);
               sketch.ellipse(faceX, faceY, noseSize, noseSize);
               //gum, colored blue, if/else statement for gum to grow and then pop
               sketch.fill(100, 148, 217);//gum color
               sketch.ellipse(faceX, faceY+30, gumSize, gumSize);//gum
               if (gumSize > faceSize){
                    gumSize -= faceSize;
               } else {
               gumSize = gumSize+1;
               }
          };
     });

     componentDidMount() {
          this.myP5 = new p5(this.sketch, this.myRef.current);
     }

     render() {
          return (
               <div className="projects">
                    <div ref={this.myRef}>
                    </div>
                    <p className="project-info">
                         The third project was more practice using variables, especially for any repetitive information such as positions or size.
                         The project was called "Animal Attack" and was originally the mouse's nose growing too big for the screen.
                         For this site, I have added an "If/Else" statement to repeat the animation. It is now a mouse blowing bubble gum.</p>
               </div>
          );
     }
}

  export default Animal;