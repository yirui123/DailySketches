var inc = 0.1;
var scl = 50;
var cols, rows;
var fr; //framerate
var zoff = 0;

var particles = [];
var flowfield = [];

function setup() {
  createCanvas(600, 600);
  background(0);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  // background(255);
  var yoff = 0;
  for (var y = 0; y < rows + 2; y++) {
    var xoff = 0;
    for (var x = 0; x < cols + 2; x++) {
      var index = x + y * cols;
      var angle = PI + noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.7);
      flowfield[index] = v;
      stroke(0, 2);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
      xoff += inc;

    }
    yoff += inc;
    zoff += 0.001;
  }

  for (var i = 0; i < particles.length; i++) {
    strokeWeight(4);
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}
