let snow = [];
let gravity;
let flakeIMG;
let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.003);
  flakeIMG = loadImage("assets/snowflake.svg");
  // var constraints = {
  //   audio: false,
  //   video: {
  //     facingMode: "user"
  //   }
  // };
  // capture = createCapture(constraints);
  // video = createCapture(VIDEO);
  // capture.size(windowWidth/2, windowHeight/2);
}

function draw() {
  background(0);
  let r = map(mouseY,0,width,0,255);
  let g = map(mouseX,0,width,0,255);
  // tint(r, g, 255);
  // image(capture, 0, 0, width, height);

  r += 5;
  g += 3;


  snow.push(new Snowflake());

  for (flake of snow) {
    flake.applyForce(gravity);
    flake.render();
    flake.update();
    flake.pileUp();
  }

  for (let i = snow.length -1; i >=0 ; i--) {
    if (snow[i].offScreen()){
      snow.splice(i, 1);
    }
  }
}

class Snowflake {
  constructor() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = random(1, 16);
  }

  applyForce(force) {
    // parallax effect
    let f = force.copy();
    f.mult(this.r);
    // let f = force.copy();
    // f.div(this.mass);
    this.acc.add(f);
  }

  update(){
    this.force = gravity;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

  }

  render(){
    // stroke(255);
    // strokeWeight(this.r);
    // point(this.pos.x,this.pos.y);
    image(flakeIMG, this.pos.x,this.pos.y, this.r, this.r);
  }

  offScreen() {
    return (this.pos.y > height + this.r);
  }

  pileUp() {
    if (this.pos.y < height + this.r) {
      this.pos.y = this.r
    }
  }

}
