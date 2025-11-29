let bgColor, hairColor, shirtColor, collarColor, eyeColor;

        function setup() {
            createCanvas(600, 400);
            resetColors();
        }

        function draw() {
            background(bgColor);

            let anim = sin(frameCount * 0.05) * 0.5 + 0.5;

            fill(255, 220, 177);
            stroke(0);
            strokeWeight(2);

            ellipse(width / 2, height / 2 - 40, 250, 280);

            fill(hairColor);
            noStroke();
            arc(width / 2, height / 2 - 100, 260, 240, PI, TWO_PI);

            let eyeWidth = 50 * (1 - anim * 0.2);
            let eyeHeight = 30 * (1 + anim * 0.2);
            let pupilSize = 20 * (1 - anim * 0.1);
            let eyeYOffset = anim * 5;

            fill(255);
            stroke(0);
            ellipse(width / 2 - 50, height / 2 - 60 + eyeYOffset, eyeWidth, eyeHeight);
            ellipse(width / 2 + 50, height / 2 - 60 + eyeYOffset, eyeWidth, eyeHeight);

            fill(eyeColor);
            ellipse(width / 2 - 50, height / 2 - 60 + eyeYOffset, pupilSize, pupilSize);
            ellipse(width / 2 + 50, height / 2 - 60 + eyeYOffset, pupilSize, pupilSize);

            noFill();
            stroke(0);
            strokeWeight(4);
            let eyebrowYOffset = anim * -10;
            arc(width / 2 - 50, height / 2 - 80 + eyebrowYOffset, 50, 20, PI, TWO_PI);
            arc(width / 2 + 50, height / 2 - 80 + eyebrowYOffset, 50, 20, PI, TWO_PI);

            strokeWeight(2);
            line(width / 2, height / 2 - 30, width / 2, height / 2 + 10);
            line(width / 2 -10, height / 2 + 10, width/2 + 10, height/2 + 10);

            let mouthWidth = 60 * (1 + anim * 0.3);
            let mouthY = height / 2 + 40 + anim * 10;
            
            noFill();
            stroke(0);
            strokeWeight(2);
            if (anim > 0.5) {
                arc(width / 2, mouthY, mouthWidth, 30 + anim * 20, 0, PI);
            } else {
                line(width / 2 - mouthWidth/2, mouthY, width / 2 + mouthWidth/2, mouthY);
            }

            fill(255, 220, 177);
            stroke(0);
            ellipse(width / 2 - 125, height / 2 - 40, 30, 60);
            ellipse(width / 2 + 125, height / 2 - 40, 30, 60);

            fill(255, 220, 177);
            rect(width / 2 - 40, height / 2 + 95, 80, 70);

            fill(shirtColor);
            noStroke();
            rect(width / 2 - 100, height / 2 + 150, 200, height - (height / 2 + 150));

            fill(collarColor);
            triangle(width/2-40 , height/2+150, width/2-80, height/2+150, width/2, height/2 + 190);
            triangle(width/2 + 40, height/2+150, width/2+80, height/2+150, width/2, height/2 + 190);

            noFill();
            stroke(192, 192, 192);
            strokeWeight(3);
            arc(width / 2, height / 2 + 155, 80, 40, 0, PI);
        }
        
        function mousePressed() {
            bgColor = color(random(200, 255), random(200, 255), random(200, 255));
            hairColor = color(random(100), random(100), random(100));
            
            let r = random(200);
            let g = random(200);
            let b = random(200);
            shirtColor = color(r, g, b);
            collarColor = color(r * 0.5, g * 0.5, b * 0.5);
        }

        function keyPressed() {
            if (key === 'r' || key === 'R') {
                eyeColor = color(255, 0, 0);
            } else if (key === 'b' || key === 'B') {
                eyeColor = color(0, 0, 255);
            } else if (key === 'g' || key === 'G') {
                eyeColor = color(0, 255, 0);
            } else if (key === 'q' || key === 'Q') {
                resetColors();
            } else if (key === 's') {
                saveGif('lyj', 10);
  }
        }

        function resetColors() {
            bgColor = color(200);
            hairColor = color(0);
            shirtColor = color(20);
            collarColor = color(100);
            eyeColor = color(0);
        }