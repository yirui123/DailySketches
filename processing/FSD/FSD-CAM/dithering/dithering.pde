import processing.video.*;
Capture cam;
Particle[] particles;


void setup() {
  size(600, 800);
  cam = new Capture(this, width, height);
  cam.start();     
  ditheringImage();
  particles = new Particle [1000];
  for (int i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
}

void captureEvent(Capture video) {
  video.read();
}

void draw() {
  ditheringImage();
  for (int i = 0; i < particles.length; i++) {
    
    particles[i].run();
    if (particles[i].isDead()) {
      particles[i] = new Particle();
    }
  }
  if (cam.available() == true) {
    cam.read();
  }
  //image(cam, 0, 0);
  //if( frameCount % 20 == 1) {
  //  saveFrame("image-########.png");
  //}
}

int index(int x, int y) {
  return x + y*cam.width;
}

void ditheringImage() {
  cam.loadPixels();
  filter(GRAY);
  //image(cam, 0, 0);
  for (int y = 0; y < cam.height-1; y++) {
    for (int x = 1; x < cam.width-1; x++) {
      color pix = cam.pixels[index(x, y)];
      float r = red(pix);
      float g = green(pix);
      float b = blue(pix);
      int factor = 1;
      int oldR = round(factor*r/255)*(255/factor);
      int oldG = round(factor*g/255)*(255/factor);
      int oldB = round(factor*b/255)*(255/factor);
      cam.pixels[index(x, y)] = color(oldR, oldG, 105);
      float errR = r - oldR;
      float errG = g - oldG;
      float errB = b - oldB;

      int index = index(x+1, y);
      color c = cam.pixels[index];
      float newR = red(c);
      float newG = green(c);
      float newB = blue(c);
      newR = newR + errR * 7/16.0;
      newG = newG + errG * 7/16.0;
      newB = newB + errB * 7/16.0;
      cam.pixels[index] = color(newR, newG, newB);

      index = index(x-1, y+1);
      c = cam.pixels[index];
      newR = red(c);
      newG = green(c);
      newB = blue(c);
      newR = newR + errR * 3/16.0;
      newG = newG + errG * 3/16.0;
      newB = newB + errB * 3/16.0;
      cam.pixels[index] = color(newR, newG, newB);

      index = index(x, y+1);
      c = cam.pixels[index];
      newR = red(c);
      newG = green(c);
      newB = blue(c);
      newR = newR + errR * 5/16.0;
      newG = newG + errG * 5/16.0;
      newB = newB + errB * 5/16.0;
      c = cam.pixels[index];

      index = index(x+1, y+1);
      c = cam.pixels[index];
      newR = red(c);
      newG = green(c);
      newB = blue(c);
      newR = newR + errR * 1/16.0;
      newG = newG + errG * 1/16.0;
      newB = newB + errB * 1/16.0;
      c = cam.pixels[index];
    }
  }

  cam.updatePixels();
}