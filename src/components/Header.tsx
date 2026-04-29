import React from 'react';
import p5 from 'p5';
import './header.scss';

interface Circle {
  color: string;
  size: number;
  x: number;
  y: number;
  oGSize: number;
}

interface HeaderProps {
  isDark: boolean;
}

class Header extends React.Component<HeaderProps> {
  myRef = React.createRef<HTMLDivElement>();
  myP5: p5 | null = null;
  resizeTimeout: ReturnType<typeof setTimeout> | null = null;

  // Reads the current CSS variables from the body
  getColorsFromCss = (): string[] => {
    const style = getComputedStyle(document.body);
    return [
      style.getPropertyValue('--c1').trim(),
      style.getPropertyValue('--c2').trim(),
      style.getPropertyValue('--c3').trim(),
      style.getPropertyValue('--c4').trim()
    ];
  };

  // Re-usable method to destroy and recreate the sketch
  initP5 = () => {
    if (this.myP5) {
      this.myP5.remove();
    }
    if (this.myRef.current) {
      this.myRef.current.innerHTML = '';
    }
    this.myP5 = new p5(this.sketch, this.myRef.current as HTMLElement);
  };

  // Debounced resize handler to remount the sketch
  handleResize = () => {
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.initP5();
    }, 200);
  };

  sketch = (p: p5) => {
    // Use innerWidth for full screen accuracy
    let width = window.innerWidth;
    let height = 600;
    const sizes = [200, 350, 500];
    let circles: Circle[] = [];
    let colors: string[] = this.getColorsFromCss();
    const numberOfCircles = 50;

    function randomArrayElement<T>(arr: T[]): T {
      return arr[Math.floor(p.random(0, arr.length))];
    }

    p.setup = () => {
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

    p.draw = () => {
      const style = getComputedStyle(document.body);
      const bgHex = style.getPropertyValue('--text-color').trim();
      p.background(bgHex || '#000000');
      
      p.noStroke();
      for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        p.fill(circle.color);
        p.ellipse(circle.x, circle.y, circle.size, circle.size);
        
        if (circle.size > (circle.oGSize * p.random(1, 2))) {
          circle.size -= (circle.oGSize / 2);
        } else {
          circle.size++;
        }
      }
    };
  };

  componentDidMount() {
    this.initP5();
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps: HeaderProps) {
    // If the theme toggles, re-initialize to pick up new CSS variables
    if (prevProps.isDark !== this.props.isDark) {
      this.initP5();
    }
  }

  componentWillUnmount() {
    if (this.myP5) this.myP5.remove();
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div className="header-container">
        <h1 id="greeting">WELCOME Y'ALL.<br/> I'm Michelle</h1>
        <div id="home" ref={this.myRef} />
      </div>
    );
  }
}

export default Header;