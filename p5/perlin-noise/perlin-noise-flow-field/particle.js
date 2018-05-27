function Particle() {
  this.pos = createVector(random(width), random(height), random(50));
  this.vel = createVector(0, 0, 0);
  this.acc = createVector(0, 0, 0);
  this.maxspeed = 1;
  this.prevPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var z = floor(this.pos.z / scl);
    var index = x + y + z * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    var b = frameCount;
    if (frameCount > 255) {
      b = floor(noise(1) * 255);
    }
    beginShape();
    fill(this.pos.x, this.pos.y, this.pos.z, 55);
    vertex(this.pos.x, this.pos.y, this.pos.z);
    vertex(this.prevPos.x, this.prevPos.y, this.prevPos.z);
    endShape();

    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    this.prevPos.z = this.pos.z;
  }

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }

  }
}
