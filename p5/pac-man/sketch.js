function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }
  return arr;
}

let grid;
let cols;
let rows;
let res = 10;
let pacman;


function setup() {
  createCanvas(800, 800);
  pixelDensity(3);
  cols = width / res;
  rows = height / res;
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }

  pacman = {
    pacx: width / 10,
    pacy: height / 2,

    render: function() {
      beginShape();
      fill(255, 255, 255, 255);
      ellipse(this.pacx - res, this.pacy - 2 * res, res, res)
      fill(250, 166, 25, 155);
      arc(this.pacx, this.pacy, res * 10, res * 10, 0, PI + QUARTER_PI * (3 + sin(frameCount * 0.1)));
      endShape();
    },

    move: function() {
      this.pacx = this.pacx + noise(-1, 1);
      this.pacy = this.pacy + random(-5, 5);
      if (this.pacx > width || this.pacx < 0) {
        this.pacx = 0;
      }
      if (this.pacy > height || this.pacy < 0) {
        this.pacx = height / 2;
      }
    }
  }

}

function draw() {
  background(0, 0, 0, 55);
  pacman.render();
  pacman.move();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * res;
      let y = j * res;


      if (grid[i][j] == 1) {
        noStroke();
        fill(random(150, 255), random(66, 166), 25, 55);
        ellipse(x, y + res, res, res);
        fill(250, 166, 25);
      }



    }
  }

  let next = make2DArray(cols, rows);
  // count live neighbors;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];

      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);

      let distance = int(dist(pacman.pacx, pacman.pacy, i * res, j * res));

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else if (distance < 5 * res) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;

      }
    }
  }
  grid = next;
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}