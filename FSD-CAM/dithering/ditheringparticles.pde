class Particle {
  PVector pos;
  PVector vel;
  PVector acc;
  float lifespan;

  Particle() {
    pos = new PVector(0, 0);
    vel = new PVector(0, 0);
    acc = new PVector(random(-0.5, 0.5), random(-0.5, 0.5));
    lifespan = 255.0;
  }


  void run() {
    display();
    move();
    
    if (keyPressed) {
      if (key == 's' || key == 'S') {
        speedUp();
      }
    }

    if (keyPressed) {
      if (key == 'm' || key == 'M') {
        messWith();
      }
    }
    if (keyPressed) {
      if (key == 'b' || key == 'B') {
        float a = 5;
        translate(width/a, height/a);
        rotate(PI/a);
        stroke(255);
        strokeWeight(1);
        a += 0.1;
        applyForce();
      }
      if (key == 'd' || key == 'D') {
        float a = 10;
        translate(width/a, height/a);
        rotate(PI/a);
        stroke(255);
        fill(255);
        strokeWeight(1);
        a -= 0.1;
        applyForce();
      }
    }
  }

  int index(int x, int y) {
    return x + y*cam.width;
  }
 
  void display() {
    //color c = cam.pixels[index(int(pos.x), int(pos.y))];
    color c = cam.get(int(pos.x), int(pos.y));
    fill(c, lifespan);
    noStroke();
    smooth();
    rect(pos.x, pos.y, 2, random(2,5));
  }  

  boolean isDead() {
    if (lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }

  void move() {
    float a = 0;
    pos.x = pos.x + noise(0.1, a)* random(-5, 5);
    pos.y = pos.y + noise(0.2, a)* random(-8, 8);
    a += 0.03;
    if (pos.y < 0) {
      pos.y = height;
    } 

    if (pos.y > height) {
      pos.y = 0;
    }
    if (pos.x < 0) {
      pos.x = width;
    } 

    if (pos.x > width) {
      pos.x = 0;
    }
    lifespan -= 0.01;
  }

  void messWith() {
    pos.x = mouseX; 
    pos.y = mouseY;
  }
  
  void speedUp() {
    pos.x = random(width); 
    pos.y = random(height);
    applyForce();
  }

  void applyForce() {
    pos.add(vel);
    vel.add(acc);
    acc.mult(0);
  }
}