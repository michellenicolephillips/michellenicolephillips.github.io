import React from 'react';
import p5 from 'p5';
import './header.css';

// 1. Properly capitalized Interfaces
interface Circle {
  color: CircleColor;
  size: number;
  x: number;
  y: number;
  oGSize: number;
}

interface CircleColor {
  r: number;
  b: number;
  g: number;
  a: number;
}

class Header extends React.Component {
  // 2. Properly typed Ref
  myRef = React.createRef<HTMLDivElement>();
  myP5: p5 | null = null;

  sketch = (p: p5) => {
    let width = window.outerWidth;
    let height = 600;
    const sizes = [200, 350, 500];
    
    // 3. Explicitly typed array
    let circles: Circle[] = [];
    
    const colors = [
      { r: 11, g: 164, b: 156, a: 100 },
      { r: 156, g: 11, b: 164, a: 100 },
      { r: 11, g: 95, b: 164, a: 100 },
      { r: 164, g: 11, b: 95, a: 100 }
    ];
    
    const numberOfCircles = 50;

    function randomArrayElement<T>(arr: T[]): T {
      let randomIndex = Math.floor(p.random(0, arr.length));
      return arr[randomIndex];
    }

    p.setup = () => {
      p.createCanvas(width, height);
      for (let i = 0; i < numberOfCircles; i++) {
        let randomColor = randomArrayElement(colors);
        let randomSize = randomArrayElement(sizes);
        let circle: Circle = {
          color: randomColor,
          size: randomSize,
          x: p.random(0, width),
          y: p.random(0, height),
          oGSize: randomSize
        };
        circles.push(circle);
      }
    };

    p.draw = () => {
      p.background(0, 0, 0);
      p.noStroke();
      for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        p.fill(circle.color.r, circle.color.g, circle.color.b, circle.color.a);
        p.ellipse(circle.x, circle.y, circle.size, circle.size);
        
        if (circle.size > (circle.oGSize * p.random(1, 2))) {
          circle.size -= (circle.oGSize / 2);
        } else {
          circle.size++;
        }
      }
    };

    // 4. Fixed the resize logic
    window.onresize = () => {
      width = window.outerWidth;
      height = 600;
      circles = []; // Clear existing array instead of re-declaring it
      p.createCanvas(width, height);
      
      for (let i = 0; i < numberOfCircles; i++) {
        circles.push({
          color: randomArrayElement(colors),
          size: randomArrayElement(sizes),
          x: p.random(0, width),
          y: p.random(0, height),
          oGSize: randomArrayElement(sizes)
        });
      }
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.sketch, this.myRef.current as HTMLElement);
  }

  render() {
    return (
      <div>
        <h1 id="greeting">WELCOME Y'ALL.<br/> I'm Michelle</h1>
        <div id="home" ref={this.myRef} />
      </div>
    );
  }
  componentWillUnmount() {
    // 1. Stop the p5 sketch entirely
    if (this.myP5) {
      this.myP5.remove();
    }
    
    // 2. Remove the global resize listener so it doesn't 
    // try to run on a component that no longer exists
    window.onresize = null; 
  }
}

export default Header;