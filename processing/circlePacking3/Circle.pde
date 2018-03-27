Circle newCircle() {
  float x = random(width);
  float y = random(height);
  boolean valid = true;
  for (Circle c : circles) {
   float d = dist(x, y, c.x, c.y);
   if ( d < c.r + 2 ) {
     valid = false;
     break;
   }
  }
  
  if (valid) {
    int index = int(x) + int(y) * cam.width;
    color col = cam.pixels[index];
    return new Circle(x, y, col);
  } else {
    return null;
  }
}

class Circle {
  float x;
  float y;
  float r;
  color c;
  
  Circle(float x_, float y_, color c_) {
    x = x_;
    y = y_;
    r = 1;
    c = c_;
  }
  
  void display() {
    noFill();
    stroke(c, 155);
    strokeWeight(0.3);
    float xoff = 0.0;
    for(int i = 0; i < 10; i++){
      ellipse(x+noise(xoff)*10, y-random(noise(xoff)*10), r*2, r*2);
      xoff++;
    }
  }
  
  boolean growing = true;
  
  boolean edges() {
    return ( x + r > width || x - r < 0 || y + r > height || y - r < 0 );
  }
  
  void grow() {
    if (growing){
      r++;
    }
  }
}