let snow = [];
let stars = [];
let gravity;
// let flakeIMG;

function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.003);
  // flakeIMG = loadImage("assets/snowflake.svg");
}

function draw() {
  background(0);
  snow.push(new Snowflake());
  stars.push(new Star());

  for (flake of snow) {
    flake.applyForce(gravity);
    flake.render();
    flake.update();
    flake.pileUp();
  }

  for (star of stars) {
    star.render();
    star.applyForce(gravity);
    star.update();
    star.disappear();
  }
}