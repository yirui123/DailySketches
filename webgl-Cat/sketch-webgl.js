var angle = -180;
var pulse = 0;
var beta = 0;
let kitten;
let knot = [];

function preload() {
  kitten = loadModel('cat.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // frameRate(12);
}

function draw() {
  background(219, 49, 190, 100);
  camera(0, 0, (height / 2.0) / tan(PI * 10.0 / 180.0), 0, 0, 0, 0, 1, 0);

  translate(pulse * 2, pulse * 2, pulse);
  pulse = map(mouseX, 0, width, -10, 10);
  normalMaterial();
  rotateX(angle);
  rotateY(angle * 1.6);
  rotateZ(-angle * 0.01);

  noStroke();
  model(kitten);

  angle += 0.001;

  let r = 50 * (0.8 + 1.6 * sin(6 * beta));
  let theta = 2 * beta;
  let phi = 0.6 * PI * sin(12 * beta);
  let x = r * cos(phi) * cos(theta);
  let y = r * cos(phi) * sin(theta);
  let z = r * sin(phi);

  normalMaterial();
  // directionalLight();
  // ambientMaterial(131, 4, 164);

  translate(width / 2 - 100, height / 2 - 100, 0);
  rotateZ(frameCount * 0.002);
  rotateX(PI / 6);
  rotateY(PI / 4);
  torus(x, y);
  torus(x, y, floor(2 * beta), floor(2 * beta));


  beta += 0.01;
}