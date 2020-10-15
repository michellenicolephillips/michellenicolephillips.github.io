let animal = new p5(( sketch ) => {

    let faceX = 190;
    let faceY = 214;
    let faceSize= 165;
    let noseSize= faceSize/10;
    let eyeSize = faceSize/8;
    let outsideEarSize = faceSize/3;
    let insideEarSize = faceSize/5;
    
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
        if (noseSize > faceSize){
            noseSize -= faceSize
        }else {
        noseSize = noseSize+1;
        }
      };
    }, 'animal');