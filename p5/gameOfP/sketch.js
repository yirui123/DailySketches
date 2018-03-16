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
let res = 5;

function setup() {
  createCanvas(600, 400);
  frameRate(24);
  cols = width / res;
  rows = height / res;
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0, 0, 0, 15);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * res;
      let y = j * res;
      if (grid[i][j] == 1) {
        // translate(width / 2, height / 2);
        // rotate(45);
        noStroke();
        fill(random(155), random(255), 255, 155);
        // ellipse(x, y, x + res, y + res);
        // ellipse(x, y, x + res, y);
        ellipse(x, y + res, res / 2, res);
        ellipse(x, y - res, res, res / 2);

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

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
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