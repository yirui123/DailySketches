class Particle {
  PVector pos;
  PVector vel;
  PVector acc;
  float lifespan;

  Particle() {
    //x = width/2;
    //y = 0;
    pos = new PVector(0, 0);
    vel = new PVector(0, 0);
    acc = new PVector(random(-0.1, 0.1), random(-0.1, 0.1));
    lifespan = 255.0;
  }


  void run() {
    display();
    move();

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
        fill(255, 255,255,255);
        //strokeWeight(100);
        a += 0.01;
        if (a > 16){
          a = 0;
        }
        applyForce();
      }
      if (key == 'c' || key == 'C') {
        float a = 10;
        translate(width/a, height/a);
        rotate(TWO_PI/a);
        stroke(255);
        fill(255,255,255,255);
        //strokeWeight(100);
        a -= 0.01;
        a += 0.01;
        if (a < 0){
          a = 10;
        }
        applyForce();
      }
    }
  }

  int index(int x, int y) {
    return x + y*kitten.width;
  }

  void display() {
    color c = kitten.pixels[index(int(pos.x), int(pos.y))];
    noStroke();
    fill(c, lifespan/2);
    smooth();
    rect(pos.x, pos.y, 1, random(1,5));
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
    pos.y = pos.y + noise(0.2, a)* random(-5, 5);
    a += 0.01;
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
    lifespan -= 0.001;
  }

  void messWith() {
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