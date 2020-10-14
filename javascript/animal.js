let animal = new p5(( sketch ) => {

    let xPos = 10;
    let yPos = 10;
    let xPlane = 400;
    let yPlane = 50;
    
      sketch.setup = () => {
        sketch.createCanvas(400, 400);
      };
    
      sketch.draw = () => {
        sketch.background(29, 40, 115);
  
        sketch.fill(255, 242, 0);
        sketch.ellipse(xPos, yPos, 10, 10);//star 1
        sketch.ellipse(xPos+50, yPos, 10, 10);//star 2
      };
    }, 'animal');