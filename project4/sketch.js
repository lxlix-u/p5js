function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
}

function draw() {
  background(0);

  let time = frameCount * 0.05;
  let sineVal = sin(time);
  let amount = map(sineVal, -1, 1, 0, 1); 

  let yellowStart = color(180, 150, 0); 
  let yellowEnd = color(255, 230, 50);  
  let redStart = color(150, 0, 0);      
  let redEnd = color(255, 80, 80); 

  let dynamicYellow = lerpColor(yellowStart, yellowEnd, amount);
  let dynamicRed = lerpColor(redStart, redEnd, amount);

  noStroke();
  let stripeWidth = 10;
  
  for (let i = 0; i < 5; i++) {
    fill(dynamicYellow);
    rect(i * stripeWidth * 2, 0, stripeWidth, height);
    fill(dynamicRed);
    rect(i * stripeWidth * 2 + stripeWidth, 0, stripeWidth, height);
  }

  for (let i = 0; i < 5; i++) {
    fill(dynamicYellow);
    rect(width - (i * stripeWidth * 2) - stripeWidth, 0, stripeWidth, height);
    fill(dynamicRed);
    rect(width - (i * stripeWidth * 2) - stripeWidth * 2, 0, stripeWidth, height);
  }
   
  translate(width / 2, height / 2);

  let colorBlue = color(100, 200, 255, 150);
  let colorWhite = color(230, 255, 255, 200);
  let activeColor = lerpColor(colorBlue, colorWhite, amount);
  
  let pulseSize = map(sineVal, -1, 1, 0.9, 1.1);

  noFill();
  strokeWeight(12);
  stroke(100, 200, 255, 50);
  circle(0, 0, 350);
   
  strokeWeight(8);
  stroke(100, 200, 255, 30);
  circle(0, 0, 370);

  strokeWeight(4);
  stroke(100, 200, 255, 15);
  circle(0, 0, 390);

  fill(255, 215, 0);
  stroke(184, 134, 11);
  strokeWeight(1);
   
  quad(-3, -195, 0, -200, 3, -195, 0, -190);
  quad(135, -138, 138, -143, 141, -138, 138, -133);
  quad(190, 0, 195, -5, 200, 0, 195, 5);
  quad(135, 138, 138, 143, 141, 138, 138, 133);
  quad(-3, 195, 0, 200, 3, 195, 0, 190);
  quad(-141, 138, -138, 143, -135, 138, -138, 133);
  quad(-200, 0, -195, -5, -190, 0, -195, 5);
  quad(-141, -138, -138, -143, -135, -138, -138, -133);

  noFill();
  stroke(150, 150, 150);
  strokeWeight(15);
  circle(0, 0, 320);

  stroke(80, 80, 80);
  strokeWeight(3);
  line(0, -148, 0, 0);
  line(0, 148, 0, 0);
  line(148, 0, 0, 0);
  line(-148, 0, 0, 0);
  line(105, 105, 0, 0);
  line(-105, 105, 0, 0);
  line(105, -105, 0, 0);
  line(-105, -105, 0, 0);

  fill(180, 180, 180);
  stroke(120, 120, 120);
  strokeWeight(2);
  ellipse(0, -148, 10, 10);
  ellipse(0, 148, 10, 10);
  ellipse(148, 0, 10, 10);
  ellipse(-148, 0, 10, 10);
  ellipse(105, 105, 10, 10);
  ellipse(-105, 105, 10, 10);
  ellipse(105, -105, 10, 10);
  ellipse(-105, -105, 10, 10);

  stroke(100, 200, 255, 80);
  strokeWeight(1);
   
  for(let y = -100; y <= 100; y += 20) {
    line(-100, y, 100, y);
  }
  for(let x = -100; x <= 100; x += 20) {
    line(x, -100, x, 100);
  }
   
  push();
  scale(pulseSize);
  fill(activeColor);
  noStroke();
  triangle(0, 65, -56, -33, 56, -33);
  pop();

  push();
  rotate(time); 
  stroke(activeColor);
  strokeWeight(10);
  noFill();
  arc(0, 0, 200, 200, 0, PI*0.8);
  arc(0, 0, 200, 200, PI, PI*1.8);
  pop();

  strokeWeight(2);
  stroke(200, 240, 255, 100);
  line(-120, 0, 120, 0);
  line(-60, -105, -60, 105);
  line(60, -105, 60, 105);
   
  noStroke();
  fill(100, 100, 100);
  square(-125, -125, 7);
   
  strokeWeight(5);
  stroke(255, 255, 255);
  point(0, 0);
}
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 9);
  }
}