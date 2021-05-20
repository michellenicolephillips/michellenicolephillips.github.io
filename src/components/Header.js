import React from 'react';
import p5 from 'p5';
import './header.css';

/* Header contains banner drawn with p5 using different colored/sized circles that shrink to smaller size once grown to max size and resets */
class Header extends React.Component {
     constructor(props) {
          super(props);
          this.myRef = React.createRef();
    }    
    sketch = (( sketch ) => {
         //canvas size
        let width = window.outerWidth;
        let height = 600;
        //circles sizes and empty circle array
        let sizes = [200, 350, 500];
        let circles = [];
        //circle colors
        let colors = [
            {
                //teal
                r: 11,
                g: 164,
                b: 156,
                a: 100
            },
            {
                //purple
                r: 156,
                g: 11,
                b: 164,
                a: 100
            },
            {
                //blue
                r: 11, 
                g: 95, 
                b: 164,
                a: 100
            },
            {
                //pink
                r: 164,
                g: 11,
                b: 95, 
                a: 100
            }
        ]
        let numberOfCircles = 50;

        //function for returning random element in an array
        function randomArrayElement(arr) {
            let randomIndex = Math.floor(sketch.random(0, arr.length));
            return arr[randomIndex];
        }
        
        sketch.setup = () => {
            sketch.createCanvas(width, height);
            for (let i = 0; i < numberOfCircles; i++) {
                let randomColor = randomArrayElement(colors);
                let randomSize = randomArrayElement(sizes);
                let randomX = sketch.random(0, width); 
                let randomY = sketch.random(0, height);
                let circle = {
                    color: randomColor,
                    size: randomSize,
                    x: randomX,
                    y: randomY,
                    oGSize: randomSize
                }
                circles.push(circle);

            }
              
        };
        //draw function to place circles on canvas, grow the circles, and shrink them once they reach a certain size
        sketch.draw = () => {
            sketch.background(0, 0, 0);
            sketch.noStroke();
            for (let i = 0; i< numberOfCircles; i++) {
                let circle = circles[i];
                let color = circle['color'];
                sketch.fill(color.r, color.g, color.b, color.a);
                sketch.ellipse(circle.x, circle.y, circle.size, circle.size);
                if (circle.size > (circle.oGSize * sketch.random(1, 2))) {
                    circle.size -= (circle.oGSize/2);
                } else {
                    circle.size ++;
                }
            }
        };
        window.onresize = function() {
            // assigns new values for width and height variables when browser is resized
            width = window.outerWidth;
            height = 600; 
            circles = []; 
            sketch.createCanvas(width,height);
            for (let i = 0; i < numberOfCircles; i++) {
                let randomColor = randomArrayElement(colors);
                let randomSize = randomArrayElement(sizes);
                let randomX = sketch.random(0, width); 
                let randomY = sketch.random(0, height);
                let circle = {
                    color: randomColor,
                    size: randomSize,
                    x: randomX,
                    y: randomY,
                    oGSize: randomSize
                }
                circles.push(circle);

            }
            sketch.redraw();
          }
    });

    componentDidMount() {
          this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    render() {
        return (
            <div>
                <h1 id="greeting">WELCOME Y'ALL.<br/> I'm Michelle</h1>
                <div id="home" ref={this.myRef}/>
            </div>
                
        );
    }
}

  export default Header;