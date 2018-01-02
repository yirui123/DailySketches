// knots source: http://paulbourke.net/geometry/knots/
var angle = 0;
var beta = 0;
var Knots = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}

function draw() {
  // background(0);
  translate(width / 12, height / 12);
  rotateY(angle);
  rotateX(angle);
  rotateZ(angle);
  angle += 0.003;

  var r = 200 * (1.2 * 0.6 * sin(0.5 * PI + 6 * beta)) * beta;
  var theta = 10 * beta;
  var phi = 0.2 * PI * sin(12 * beta);
  var x = r * cos(phi) * cos(theta);
  var y = r * cos(phi) * sin(theta);
  var z = r * sin(phi);

  Knots.push(new p5.Vector(x, y, z));
  beta += 0.01;

  noFill();
  stroke(255, r, 255);
  strokeWeight(1);
  beginShape();
  vertex(x, y, z);
  // for (var i = 0; i < Knots.length; i++) {
  //   vertex(i.x, i.y, i.z);
  //   // print(x, y, z);
  // }
  endShape();
}