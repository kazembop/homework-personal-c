function setup() {
    createCanvas(500, 500);
    
  }
  
  function draw() {
   
    
  // now i start with the sterm of the pumpkin
  
  stroke(0, 130, 0);
    strokeWeight(20);
    line(250, 150, 150, 100);
    
    // add the fill color of the pumpkin 
     fill(255, 100, 0);
     stroke(0, 100);
  //   reduce the stroke weight
     strokeWeight(3);
    
     //strat drawing the pupkin using circles from big to small circles
     ellipse(250, 250, 400, 200);
     ellipse(250, 250, 300, 200);
    ellipse(250, 250, 200, 200);
    ellipse(250, 250, 100, 200);
  }
  
  