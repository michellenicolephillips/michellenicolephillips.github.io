let city = new p5(( sketch ) => {

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
      sketch.ellipse(xPos+100, yPos, 10, 10);//star 3
      sketch.ellipse(xPos+150, yPos, 10, 10);//star 4
      sketch.ellipse(xPos+200, yPos, 10, 10);//star 5
      xPos+=5;
      yPos+=5;

      sketch.fill(255, 255, 255);
      sketch.ellipse(xPlane+10, yPlane,70, 25);//plane body
      sketch.ellipse(xPlane, yPlane, 20, 60);//plane wings
      xPlane--;
      
      sketch.fill(0, 0, 0);//buildings
      sketch.rect(0, 300, 50, 100);//building 1
      sketch.rect(50, 250, 75, 150);//building 2
      sketch.rect(130,300, 45, 100);//building 3
      sketch.rect(175,200, 50, 200);// building 4
      sketch.rect(225, 250, 50, 150);// building 5
      sketch.rect(275, 325, 75, 75);//building 6
    };
  }, 'city');