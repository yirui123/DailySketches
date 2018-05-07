function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();

  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  let mnAngle = map(mn, 0, 60, 0, 360);
  let scAngle = map(sc, 0, 60, 0, 360);

  strokeWeight(0.5);
  ellipse(0,0,300,300);

  noFill();
  strokeWeight(4);

  push();
  rotate(hrAngle);
  stroke(255, 155, 55);
  line(0, 0, 200 / 2, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(155, 55, 55);
  line(0, 0, 250 / 2, 0);
  pop();

  push();
  rotate(scAngle);
  stroke(144);
  line(0, 0, 280 / 2, 0);
  pop();
}
