import React from 'react';
import p5 from 'p5';
import '../projects.css';
import brickImage from '../../res/images/StoneBlock.png';
import windowImage from '../../res/images/WindowTall.png';
import bush from '../../res/images/TreeShort.png';
import grassBlock from '../../res/images/GrassBlock.png';
import tallTree from '../../res/images/TreeTall.png';


class House extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
      }
    Sketch = ( sketch ) => {
        let height = 400;
        let width = 400;
        let doorX = 242;
        let doorY = 290;
        let brick;
        let singleWindow;
        let grass;
        let shrubbery;
        let tree;
        
        sketch.setup = () => {
          sketch.createCanvas(width, height);
          brick = sketch.loadImage(brickImage);
          singleWindow = sketch.loadImage(windowImage);
          shrubbery = sketch.loadImage(bush);
          grass = sketch.loadImage(grassBlock);
          tree = sketch.loadImage(tallTree);
          //sketch.noLoop();
        };
      
        sketch.draw = () => {
            sketch.background(219, 255, 255);
            //roof
            sketch.fill(0, 0, 0);
            sketch.triangle(200, 28, 350, 150, 50, 150);
            
            //house
            for( var brickX = 50 ; brickX < 340 ; brickX+=50){
                for(var brickY= 135 ; brickY<344 ; brickY+=31){
                sketch.image(brick, brickX, brickY, 50, 50);
                }
            }    
            //door
            sketch.fill(0, 0, 0);
            sketch.rect(doorX, doorY, 40, 80);
    
            //door window
            sketch.fill(225, 255, 255);
            sketch.rect(doorX+5, doorY+5, 30, 35);
    
            //large window with multiple panes
            for( var largeWindowY = 270 ; largeWindowY < 332 ; largeWindowY+=30){
                for(var largeWindowX= 70 ; largeWindowX<200 ; largeWindowX+=30){
                sketch.rect(largeWindowX, largeWindowY, 30, 30);
                }
            }
            //single windows
            let singleWindowX = 80;
            while(singleWindowX<320) {
                sketch.image(singleWindow, singleWindowX, 180, 30, 50);
                singleWindowX= singleWindowX+=100;
                
            }
            
            //grass
            let grassX = 0;
            while(grassX<400) {
                sketch.image(grass, grassX, 350, 30, 50);
                grassX= grassX+=20;
            }
            //shrubbery
            let shrubberyX = 50;
            while(shrubberyX<350) {
                sketch.image(shrubbery, shrubberyX, 325, 30, 50);
                shrubberyX= shrubberyX+=81;
            }
            //tree
            let treeX = 0;
            while(treeX<400) {
                sketch.image(tree, treeX, 325, 30, 50);
                treeX= treeX+=363;
            }        
        }
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
                I learned while and for loops to build this project. 
                </p>
              </div>
          );
      }
  }
  
  export default House;