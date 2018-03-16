let pedal;

function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  // pedal = new pedal(windowWidth/2, windowHeight/2, random(100));
  // pedal2 = new pedal(windowWidth/3, windowHeight/3, 20);
  //

  frameRate(35);

}

function draw() {
  background(0, 15);
  for (var i = 0; i < 200; i++) {
    pedal = new Pedal(mouseX-10, mouseY-20, random(20));
  }
  pedal.move();
  pedal.show();
  // pedal2.move();
  // pedal2.show();
  //
  // pedal3 = new pedal(mouseX+40, mouseY-40, 20);
  // // print(mouseX, mouseY);
  // pedal3.move();
  // pedal3.show();
}

class Pedal {
  //set the data
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  //set the function
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
    // this.r = this.r + random(-1, 1);
  }
  show() {
    // stroke(this.x, this.y*3, random(this.y*3), 255);
    noStroke();
    strokeWeight(4);
    fill(this.x*2, random(255), random(255), 60);
    // ellipse(this.x, this.y, this.r*2);

    translate(windowWidth/2, windowHeight/2);
    for (var i = 0; i < 30; i ++) {
      ellipse(this.x, this.y, 10, 80);
      rotate(PI/15);
    }
  }
}
