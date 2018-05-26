//import com.hamoid.*;

//VideoExport videoExport;
PImage img; 
Circle c;
ArrayList<Circle> circles;
ArrayList<PVector> spots;

void setup() {
  background(0);
  size(800, 800);
  //videoExport = new VideoExport(this);
  //videoExport.startMovie();
  frameRate(60);
  spots = new ArrayList<PVector>();
  img = loadImage("per.png");
  img.loadPixels();
  for (int x = 0; x < img.width; x++) {
    for (int y = 0; y < img.height; y++) {
      int index = x + y * img.width;
      color c = img.pixels[index];
      float b = brightness(c);
      //float red = red(c);
      if ( b < 1) {
        spots.add(new PVector(x,y));
      }
    }
  }
  println(spots.size());
  circles = new ArrayList<Circle>();
}

void draw() {
  background(0);
  strokeWeight(0.3);
  stroke(255,0,0);
  rect(frameCount * frameCount % width, 0, 50, height);
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
  //saveFrame("line-######.png");
}
//void keyPressed() {
//  if (key == 'q') {
//    videoExport.endMovie();
//    exit();
//  }
//}
