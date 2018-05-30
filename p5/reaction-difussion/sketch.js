var grid;
var next;

var dA = 1;
var dB = 0.55;
var feed = 0.055; //0.055
var k = 0.063; // 0.062

var capture;

function setup() {
  createCanvas(360,640);
  pixelDensity(1);
  grid = [];
  next = [];
  for (var x = 0; x < width; x++) {
    grid[x] = [];
    next[x] = [];
    for (var y = 0; y < height; y++) {
      grid[x][y] = {a: 1, b: 0};
      next[x][y] = {a: 1, b: 0};
    }
  }
}



function draw() {
  setTimeout(drop(), 1000);

  loadPixels();
  for (var x = 1; x < width-1; x++) {
    for (var y = 1; y < height-1; y++) {
      var a = grid[x][y].a;
      var b = grid[x][y].b;
      next[x][y].a = a +
                     (dA * laplaceA(x, y)) -
                     (a * b * b) +
                     (feed * (1 - a));
      next[x][y].b = b +
                     (dB * laplaceB(x, y)) +
                     (a * b * b) -
                     ((k + feed ) * b);
      next[x][y].a = constrain(next[x][y].a, 0, 1);
      next[x][y].b = constrain(next[x][y].b, 0, 1);
    }
  }

  for (var x = 1; x < width-1; x++) {
    for (var y = 1; y < height-1; y++) {
      var pix = (x + y * width) * 4;
      var a = next[x][y].a;
      var b = next[x][y].b;
      var c = floor((a-b)*255);
      //c = constrain(c, 0, 155)
      //var inc = 0;
      pixels[pix + 0] = c * x;
      pixels[pix + 1] = c * x;
      pixels[pix + 2] = c * y;
      pixels[pix + 3] = 205;

      // pixels[pix + 0] = floor(a * x);
      // pixels[pix + 1] = c * x * y;
      // pixels[pix + 2] = floor(b * y);
      // pixels[pix + 3] = 255;
      //inc = inc + feed;
    }
  }
  updatePixels();

  swap();
}

function swap() {
  var temp = grid;
  grid = next;
  next = temp;
}

function laplaceA(x, y) {
  var sumA = 0;
  sumA += grid[x][y].a * -1;
  sumA += grid[x - 1][y].a * 0.2;
  sumA += grid[x+1][y].a * 0.2;
  sumA += grid[x][y+1].a * 0.2;
  sumA += grid[x][y-1].a * 0.2;
  sumA += grid[x-1][y-1].a * 0.05;
  sumA += grid[x+1][y-1].a * 0.05;
  sumA += grid[x+1][y+1].a * 0.05;
  sumA += grid[x-1][y+1].a * 0.05;
  return sumA;
}

function laplaceB(x, y) {
  var sumB = 0;
  sumB += grid[x][y].b * -1;
  sumB += grid[x-1][y].b * 0.2;
  sumB += grid[x+1][y].b * 0.2;
  sumB += grid[x][y+1].b * 0.2;
  sumB += grid[x][y-1].b * 0.2;
  sumB += grid[x-1][y-1].b * 0.05;
  sumB += grid[x+1][y-1].b * 0.05;
  sumB += grid[x+1][y+1].b * 0.05;
  sumB += grid[x-1][y+1].b * 0.05;
  return sumB;
}

function drop() {
  var i = floor(random(1,width-1));
  var j = floor(random(1, height-1));
  grid[i][j].b = 1;
  grid[i+1][j].b = 0.95;
  grid[i-1][j].b = 0.85;
  grid[i+1][j+1].b = 0.75;
  grid[i-1][j-1].b = 0.75;
  grid[i][j+1].b = 0.85;
  grid[i][j-1].b = 0.85;
  grid[i-1][j+1].b = 0.75;
  grid[i+1][j-1].b = 0.75;
}
