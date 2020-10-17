let rain = new p5(( sketch ) => {
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
    }, 'rain');