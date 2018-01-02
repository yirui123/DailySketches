function Particle() {
  this.pos = createVector(random(width), random(height));

  this.update = function() {
    // this.vel.add(this.acc);
    // this.vel.limit(this.maxspeed);
    // this.pos.add(this.vel);
    // this.acc.mult(0);
    this.pos.x += floor(random(-10, 10));
    this.pos.y += floor(random(-10, 10));
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);
  }

  this.show = function() {
    var px = floor(this.pos.x / vScale);
    var py = floor(this.pos.y / vScale);
    var col = video.get(px, py);
    console.log(col);
    noStroke();
    // stroke(col[0], col[1], col[2], random(55));
    // stroke(155, 0, 0);
    // ellipse(this.x, this.y, this.r, this.r);
    fill(col[0], col[1], col[2], 55);
    ellipse(this.pos.x, this.pos.y, 20, 20);
    // line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    console.log(this.pos.x, this.pos.y);
  }
}