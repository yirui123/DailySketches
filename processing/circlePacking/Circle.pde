Circle newCircle() {
  
  int r = int(random(0,spots.size()));
  
  PVector spot = spots.get(r);
  
  float x = spot.x;
  float y = spot.y;
  boolean valid = true;
  for (Circle c : circles) {
   float d = dist(x, y, c.x, c.y);
   if ( d < c.r + 2 ) {
     valid = false;
     break;
   }
  }
  
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}

class Circle {
  float x;
  float y;
  float r;
  
  Circle(float x_, float y_) {
    x = x_;
    y = y_;
    r = 1;
  }
  
  void display() {
    fill(255,15);
    stroke(255,random(155,255));
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
      r=r+0.3;
    }
  }
}