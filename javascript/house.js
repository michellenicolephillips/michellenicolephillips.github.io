let house = new p5(( sketch ) => {
    let doorX = 242;
    let doorY = 290;
    let singleWindowX = 80;
    let grassX = 0;
    let shrubberyX = 50;
    let treeX = 0;
    let brick;
    let singleWindow;
    let grass;
    let shrubbery;
    let tree;
    
    sketch.setup = () => {
      sketch.createCanvas(width, height);
      brick = sketch.loadImage('pictures/StoneBlock.png');
      singleWindow = sketch.loadImage('pictures/WindowTall.png');
      shrubbery = sketch.loadImage('pictures/TreeShort.png');
      grass = sketch.loadImage('pictures/GrassBlock.png');
      tree = sketch.loadImage('pictures/TreeTall.png');
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
        while(singleWindowX<320) {
            sketch.image(singleWindow, singleWindowX, 180, 30, 50);
            singleWindowX= singleWindowX+=100;
        }
        
        //grass
        while(grassX<400) {
            sketch.image(grass, grassX, 350, 30, 50);
            grassX= grassX+=20;
        }
        //shrubbery
        while(shrubberyX<350) {
            sketch.image(shrubbery, shrubberyX, 325, 30, 50);
            shrubberyX= shrubberyX+=81;
        }
        //tree
        while(treeX<400) {
            sketch.image(tree, treeX, 325, 30, 50);
            treeX= treeX+=363;
        }        
    }
    }, 'house');