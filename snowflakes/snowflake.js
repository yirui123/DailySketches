function getRandomSize() {
  let r = pow(random(0, 1), 5);
  return constrain(r * 36, 2, 26);
  // let r = randomGaussian() * 2.5;
  // return constrain(abs(r * r), 2, 36);
  // while (true) {
  //   let r1 = random(1);
  //   let r2 = random(1);
  //   if (r2 > r1) {
  //     return r1*36;
  //   }
  // }
}

class Snowflake {
  constructor() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  applyForce(force) {
    // parallax effect
    let f = force.copy();
    f.mult(this.r / 2);
    // let f = force.copy();
    // f.div(this.mass);
    this.acc.add(f);
  }

  update() {
    this.force = gravity;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

  }

  render() {
    let alpha = random(200, 255);
    noFill();
    stroke(255, 255, 250, alpha);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
    // image(flakeIMG, this.pos.x, this.pos.y, this.r, this.r);
  }

  offScreen() {
    return (this.pos.y > height - this.r);
  }

  pileUp() {
    for (let i = snow.length - 1; i >= 0; i--) {
      if (snow[i].offScreen()) {
        if (this.r > 5) {
          this.pos.y = height - this.r;
        } else if (snow.length < 500) {
          snow.splice(i, 10);
        } else {
          snow.splice(i, 100);
        }
      }
    }
  }
}