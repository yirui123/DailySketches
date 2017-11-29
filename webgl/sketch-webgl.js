var angle = 0;
var img;
var pg;

function preload() {
  img = loadImage('img1.jpg');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // pg = createGraphics(256,256);
  // ortho(-width, width, height, -height/2, 0.1, 100);
}

function draw() {
  background(51);
  rotateX(angle);
  rotateY(angle/2);
  rotateZ(angle/10);
  translate(10, 10, 300);
  texture(img);
  box(30);
  // cone(40, 100, 100);
  // plane(30)；
  // sphere()
  // ellipsoid()
  // cylinder()
  // torus()
  angle += 0.1

  // pg.background(255);
  // pg.text('hello world!', 50, 50);
  // pass graphics as texture
  // texture(pg);
  // plane(100);

  // directionalLight(r, g, b, x, y, z);
  var dirY = (mouseY / height - 0.5) *2;
  var dirX = (mouseX / width - 0.5) *2;
  directionalLight(50, 100, mouseX, dirX, -dirY, 0.5);
  ambientMaterial(50, 100, mouseX);
  torus(100);
  torus(200);
  translate(11, 11, 200);

  for(var i = 0; i < 500; i+=10){
    push();
    fill(i * 0.5, 100, 100);

    //line
    translate(0, 100, 0);
    line(-100, 0, i, 100, 0, i);

    // triangles
    translate(11, 11, 200);
    triangle(
      0, sin( i + frameCount * 0.1) * 10, i,
      60, 60, i,
      -60, 60, i);

    pop();
  }
}
