function starGetRandomSize() {
  let r = pow(random(0, 1), 5);
  return constrain(r * 36, 1, 5);
}

class Star {
  constructor() {
    let x = random(width);
    let y = random(height);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = starGetRandomSize();
  }

  applyForce(force) {
    //parallax effect
    let f = force.copy();
    f.mult(this.r);
    this.acc.add(f);
  }

  update() {
    this.force = gravity;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    let npoints = 4;
    let radius2 = this.r * 4;
    let radius1 = this.r;

    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;

    fill(255, 255, 51, random(255));
    noStroke();
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = this.pos.x + cos(a) * radius2;
      let sy = this.pos.y + sin(a) * radius2;
      vertex(sx, sy);
      sx = this.pos.x + cos(a + halfAngle) * radius1;
      sy = this.pos.y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  disappear() {
    for (let i = stars.length - 1; i >= 0; i--) {
      if (stars.length % 10 === 1) {
        stars.splice(i, 1);
      }
    }
  }

}