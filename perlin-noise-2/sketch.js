var inc = 0.01;
var scl = 55;
var cols, rows;
var fr; //framerate
var zoff = 0;
var vgn;

function preload() {
  vgn = loadImage('assets/vgn.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  // pixelDensity(1);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

}

function draw() {
  background(10, 186, 150 + map(noise(1), 0, 1, 0, 255));
  var yoff = 0;
  // loadPixels();
  for (var y = 0; y < rows + 2; y++) {
    var xoff = 0;
    for (var x = 0; x < cols + 2; x++) {
      var index = (x + y * width) * 4;
      var angle = PI + noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      // pixels[index + 0] = r;
      // pixels[index + 1] = r;
      // pixels[index + 2] = r;
      // pixels[index + 3] = 255;
      // xoff += inc;
      //
      // fill(x * scl, y * scl, map(noise(255), 0, 1, 155, 255));
      // rect(x * scl, y * scl, scl, scl);

      stroke(0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      // line(0, 0, scl, 0);
      image(vgn, 0, 0, 10 + map(frameCount, 0, 500, 0, 2));
      pop();

      xoff += inc;

    }
    yoff += 0.1;
    zoff += 0.001;
  }
  // updatePixels();
  // fr.html(floor(frameRate()));
}