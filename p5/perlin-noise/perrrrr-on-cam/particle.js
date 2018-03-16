function Particle() {
  this.pos = createVector(random(width), random(height));
  this.r = random(10, 30);
  this.prevPos = this.pos.copy();

  this.update = function() {
    this.pos.x += noise(0.1, 1) * 5;
    this.pos.y += 5;
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height)
  }

  this.show = function() {
    var px = floor(this.pos.x / vScale);
    var py = floor(this.pos.y / vScale);
    var col = video.get(px, py);
    console.log(col);
    noStroke();
    // stroke(col[0], col[1], col[2], 255);
    // stroke(155, 0, 0);
    fill(col[0], col[1], col[2], 105);
    ellipse(this.pos.x, this.pos.y, this.r);
    // point(this.pos.x, this.pos.y);
    console.log(this.pos.x, this.pos.y);
  }
}