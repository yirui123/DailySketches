var angle = 1;
var beta = 1;
let Knots = [];


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}

function draw() {
  camera(0, 0, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  // translate(width / 2, height / 2, 0);


  let r = 100 * (0.8 + 1.6 * sin(6 * beta));
  let theta = 2 * beta;
  let phi = 0.6 * PI * sin(12 * beta);
  let x = r * cos(phi) * cos(theta);
  let y = r * cos(phi) * sin(theta);
  let z = r * sin(phi);
  stroke(0);
  var dot = new p5.Vector(x, y, z);
  Knots.push(dot);

  beta += 0.05;

  stroke(r / 2, theta, 155);
  beginShape();
  for (var i = 0; i < Knots.length * 10; i++) {
    vertex(x, y, z);
    vertex(i.x, i.y, i.z);
  }
  endShape();

  rotateY(y);
  rotateX(x);
  rotateZ(z);
}