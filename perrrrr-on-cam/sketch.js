var video;
var vScale = 16;
var particles = [];

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / 4, height / 4);
  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(0);
}

function draw() {
  video.loadPixels();
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}