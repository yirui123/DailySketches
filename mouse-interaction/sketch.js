let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for ( let i = 0; i < 20; i++ ) {
    let x = random(width);
    let y = random(height);
    let r = random(5, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mouseDragged() {
  let r = random(5, 30);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    if(bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i,1);
    }
  }
}

function draw() {
  background(0, 50);
  for (let i = 0; i < bubbles.length; i++) {
    if(bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  //set the data
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
    this.shape = ellipse;
  }
  //set the function
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    // this.r = this.r + random(-1, 1);
  }
  show() {
    stroke(255, random(200), random(255), 40);
    strokeWeight(4);
    fill(this.brightness, 125);
    // this.shape(this.x, this.y, this.r*2, this.r);

    for (var i = 0; i < 3; i ++) {
      this.shape(this.x, this.y, this.r);
      rotate(PI/5);
    }
  }
  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if ( d < this.r ) {
      return true;
    } else {
      return false;
    }

  }
}
