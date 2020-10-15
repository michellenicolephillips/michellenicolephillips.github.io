let rain = new p5(( sketch ) => {
    let xPositions = [200];
    let yPositions = [0];   
    
    sketch.setup = () => {
      sketch.createCanvas(width, height);
    };
  
    sketch.draw = () => {
        if(sketch.mouseClicked) {
            xPositions.sketch.push(sketch.mouseX);
            yPositions.sketch.push(sketch.mouseY);
            sketch.fill(sketch.random(0, 255), sketch.random(0, 255), sketch.random(0, 255));
        }
        sketch.background(16, 18, 43);
        sketch.noStroke();
       
        
        for (var i = 0; i < xPositions.length; i++) {
            sketch.ellipse(xPositions[i], yPositions[i] % 400, 10, 10);
            yPositions[i] += 5;
        }
    };
    }, 'rain');