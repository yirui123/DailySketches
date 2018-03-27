import processing.video.*;
Capture cam; 
Circle c;
ArrayList<Circle> circles;

void setup() {
  size(800, 800);
  frameRate(60);
  cam = new Capture(this, width, height);
  cam.start();  
  circles = new ArrayList<Circle>();
  //background(cam);
}

void draw() {
  background(0);
  //image(cam, 0, 0);
  if (cam.available()) { 
    cam.read(); 
  } 
  cam.loadPixels();
  
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
    if (attempts > 100000) {
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