function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(200);

    fill(255, 220, 177);
    stroke(0);
    strokeWeight(2);

    ellipse(width / 2, height / 2 - 40, 250, 280);

    fill(0);
    noStroke();
    arc(width / 2, height / 2 - 100, 260, 240, PI, TWO_PI);

    fill(255);
    stroke(0);
    ellipse(width / 2 - 50, height / 2 - 60, 50, 30);
    ellipse(width / 2 + 50, height / 2 - 60, 50, 30);

    fill(0);
    ellipse(width / 2 - 50, height / 2 - 60, 20, 20);
    ellipse(width / 2 + 50, height / 2 - 60, 20, 20);

    noFill();
    stroke(0);
    strokeWeight(4);
    arc(width / 2 - 50, height / 2 - 80, 50, 20, PI, TWO_PI);
    arc(width / 2 + 50, height / 2 - 80, 50, 20, PI, TWO_PI);

    strokeWeight(2);
    line(width / 2, height / 2 - 30, width / 2, height / 2 + 10);
    line(width / 2 - 10, height / 2 + 10, width / 2 + 10, height / 2 + 10);

    line(width / 2 - 30, height / 2 + 40, width / 2 + 30, height / 2 + 40);

    fill(255, 220, 177);
    stroke(0);
    ellipse(width / 2 - 125, height / 2 - 40, 30, 60);
    ellipse(width / 2 + 125, height / 2 - 40, 30, 60);

    fill(255, 220, 177);
    rect(width / 2 - 40, height / 2 + 95, 80, 70);

    fill(20);
    noStroke();
    rect(width / 2 - 100, height / 2 + 150, 200, height - (height / 2 + 150));

    fill(100);
    triangle(width / 2 - 40, height / 2 + 150, width / 2 - 80, height / 2 + 150, width / 2, height / 2 + 190);
    triangle(width / 2 + 40, height / 2 + 150, width / 2 + 80, height / 2 + 150, width / 2, height / 2 + 190);

    noFill();
    stroke(192, 192, 192);
    strokeWeight(3);
    arc(width / 2, height / 2 + 155, 80, 40, 0, PI);
}
