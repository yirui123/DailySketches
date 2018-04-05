let a = 0;

function setup() {
  background(255, 105, 180);
  createCanvas(windowWidth, windowHeight);
  pixelDensity(3);
  frameRate(12);
}

function draw() {
  background(255, 105, 180, 25);
  let ywave = sin(frameCount / 20) * height;
  ywave = random(ywave / 2, ywave);
  translate(a, ywave);
  rotate(a);

  beginShape();


  fill(155);
  stroke(0);
  strokeWeight(3);
  rect(0, 0, 150, 100);

  fill(255, 0, 0);
  ellipse(75, 75, 16, 16);

  fill(155);
  stroke(0);
  strokeWeight(3);
  vertex(0, 0);
  vertex(75, 75);
  vertex(150, 0);

  endShape();

  if (a > width) {
    a = 0;
  } else {
    a = a + 5;
  }
}