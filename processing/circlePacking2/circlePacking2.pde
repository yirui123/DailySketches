PImage img; 
Circle c;
ArrayList<Circle> circles;

void setup() {
  background(0);
  size(800, 420);
  img = loadImage("per.png");
  img.loadPixels();
  circles = new ArrayList<Circle>();
}

void draw() {
  background(0);
  int total = 10;
  int count = 0;
  int attempts = 0;
  
  while (count < total) {
    Circle newC = newCircle();
    if (newC != null) {
      circles.add(newC);
      count++;
    }
    attempts++;
    if (attempts > 1000) {
      noLoop();
      println("finished");
      break;
    }
  }
  
  for (Circle c : circles) {
    if (c.growing) {
      if(c.edges()){
        c.growing = false;
      } else {
        for (Circle other : circles) {
          if(c != other ) {
            float d = dist(c.x, c.y, other.x, other.y);
            if (d-2 < c.r + other.r) {
              c.growing = false;
              break;
            }
          }
        }
      }
    }
    c.display();
    c.grow();
  }
}

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
    int index = int(x) + int(y) * img.width;
    color col = img.pixels[index];
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
    fill(c, 115);
    noStroke();
    ellipse(x, y, r*2, r*2);
    rect(x, y, r*2, r*2);
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