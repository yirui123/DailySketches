let angle = 0;
let capture;

// function preload() {
//   capture = createCapture(VIDEO);
//   capture.size(320, 240);
//   capture.hide();
// }

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(55);
  rotateX(angle);
  rotateY(angle / 5);
  rotateZ(angle / 10);
  // translate(10, 10, 10);
  var dirX = (mouseX / width - 0.5) * 2;
  var dirY = (mouseY / height - 0.5) * 2;
  directionalLight(255, 100, 50, -dirX, -dirY, 0.55);
  ambientMaterial(250);
  // texture(capture);
  sphere(100);
  angle += 0.01;
  // loadShader([vertFilename],[fragFilename])
}