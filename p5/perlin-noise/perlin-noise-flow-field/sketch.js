var inc = 0.01;
var scl = 60;
var cols, rows;
var fr; //framerate
var zoff = 0;

var particles = [];
var flowfield = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  background(25);
  //camera(-width, -height, -(height/2.0) / tan(PI*50.0 / 180.0), width/2, height/2, 50, 50, 600, 0);
  cols = floor(width / scl);
  rows = floor(height / scl);
  // fr = createP('');
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 100; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows + 2; y++) {
    var xoff = 0;
    for (var x = 0; x < cols + 2; x++) {
      var index = x + y * cols;
      var angle = PI + noise(xoff, yoff, zoff) * TWO_PI * 40;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.3);
      flowfield[index] = v;
      xoff += inc;
    }
    yoff += inc;
    zoff += 0.01;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();

  }

}
