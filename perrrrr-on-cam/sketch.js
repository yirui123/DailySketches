var video;
var vScale = 8;
var particles = [];

function setup() {
  frameRate(100);
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  for (var i = 0; i < 500; i++) {
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