let snow = [];
let gravity;
let bgSlider
// let flakeIMG;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.003);
  // flakeIMG = loadImage("assets/snowflake.svg");
}

function draw() {
  background(0, 215);
  snow.push(new Snowflake());

  for (flake of snow) {
    flake.applyForce(gravity);
    // rotate(PI / (width / map(mouseX, 0, width, -1, 1, true)));
    flake.render();
    flake.update();
    flake.pileUp();
  }

  // for (let i = snow.length - 1; i >= 0; i--) {
  //   if (snow[i].offScreen()) {
  //     snow.splice(i, 1);
  //   }
  // }
}