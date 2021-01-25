import React from 'react';
import p5 from 'p5';
import '../projects.css';

class Animal extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
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
           
            sketch.fill(122, 121, 113);//outisde ear color
            sketch.ellipse(faceX- 1/4* faceSize, faceY-1/2 * faceSize, outsideEarSize, outsideEarSize);//inside left ear
            sketch.ellipse(faceX + 1/4*faceSize, faceY-1/2*faceSize, outsideEarSize, outsideEarSize);//inside right ear
            sketch.fill(189, 144, 187);//inside ear color
            sketch.ellipse(faceX- 1/4* faceSize, faceY-1/2 * faceSize, insideEarSize, insideEarSize);//inside left ear
            sketch.ellipse(faceX + 1/4*faceSize, faceY-1/2*faceSize, insideEarSize, insideEarSize);//inside right ear
            sketch.fill(122, 121, 113);//face color
            sketch.ellipse(faceX, faceY, faceSize, faceSize);//face
            
            sketch.fill(0, 0, 0);//eye color
            sketch.ellipse(faceX-1/5*faceSize, faceY-1/4*faceSize, eyeSize, eyeSize);//left eye
            sketch.ellipse(faceX+1/5*faceSize,faceY-1/4*faceSize, eyeSize, eyeSize);//right eye
           
            sketch.fill(0, 0, 0);//whiskers
            sketch.line (faceX*19/20, faceY,faceX*1/20,faceY);//midleft
            sketch.line(faceX*39/20, faceY, faceX*21/20, faceY);//midright
            sketch.line(faceX*1/10, faceY*0.75, faceX*19/20,faceY);//topleft
            sketch.line(faceX*1/10, faceY*1.25, faceX*19/20, faceY);//bottomleft
            sketch.line(faceX*38/20, faceY*0.75, faceX*21/20, faceY);//topright
            sketch.line(faceX*38/20, faceY*1.25, faceX*21/20, faceY);//bottomright
            
            sketch.fill(189, 144, 187);//nose color
            sketch.ellipse(faceX, faceY, noseSize, noseSize);//nose
    
            sketch.fill(100, 148, 217);//gum color
            sketch.ellipse(faceX, faceY+30, gumSize, gumSize);//gum
            if (gumSize > faceSize){
                gumSize -= faceSize
            }else {
            gumSize = gumSize+1;
            }
          };
        });


  componentDidMount() {
    this.myP5 = new p5(this.sketch, this.myRef.current)
  }

    render() {
      return (
          <div className="projects">
            <div ref={this.myRef}>
            </div>
            <p className="project-info">    The third project was more practice using variables, especially for any repetitve information such as positions or size.
                    The project was called "Animal Attack" and was originally the mouse's nose growing too big for the screen.
                    For this site, I have added an "If/Else" statement to repeat the animation. It is now a mouse blowing bubble gum.</p>
        </div>
          );
      }
  }

  export default Animal;