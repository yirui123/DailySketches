function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  var maxIterations = 100;
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var a = map(x, 0, width, -2.5, 2.5);
      var b = map(y, 0, height, -2.5, 2.5);

      var Ca = a;
      var Cb = b;

      var n = 0;
      while (n < maxIterations) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;
        a = aa + Ca;
        b = bb + Cb;
        if (a + b > 16) {
          break;
        }
        n++;
      }
      var bright = map(n, 0, maxIterations, 0, 1);
      bright = map(bright, 0, 1, 0, 255);

      if (n === maxIterations) {
        bright = 0;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}

class mandelbrot {

}