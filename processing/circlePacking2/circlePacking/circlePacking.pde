PImage img; 
Circle c;
ArrayList<Circle> circles;
ArrayList<PVector> spots;

void setup() {
  background(0);
  size(800, 420);
  spots = new ArrayList<PVector>();
  img = loadImage("per.png");
  img.loadPixels();
  for (int x = 0; x < img.width; x++) {
    for (int y = 0; y < img.height; y++) {
      int index = x + y * img.width;
      color c = img.pixels[index];
      //float b = brightness(c);
      float red = red(c);
      if ( red > 50) {
        spots.add(new PVector(x,y));
      }
    }
  }
  println(spots.size());
  circles = new ArrayList<Circle>();
}

void draw() {
  background(0);
  int total = 2;
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
    float a = 0.1;
    stroke(255);
    strokeWeight(0.3);
    noFill();
    ellipse(x + a, y - a, r*2, r*2);
    a = a+0.1;
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