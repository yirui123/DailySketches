float r = 300;
int total = 0;
int circle = 0;
void setup(){
  size(600,600);
  translate(width/2, height/2);
  frameRate(24);
  background(0);
  stroke(25);
  strokeWeight(2);
  noFill();
  //ellipse(0, 0, 2*r, 2*r);
  //rectMode(CENTER);
  //strokeWeight(1);
  //rect(0, 0, 2*r, 2*r);
  
}

void draw(){
  translate(width/2, height/2);
  float pi = 0;
  float x = random(-r, r);
    float y = random(-r, r);
  for(int i = 0; i<500; i++) {
    //float x = random(-r, r);
    //float y = random(-r, r);
    total++;
  
    float d = sqrt(x*x + y*y);
    //float d = dist(0,0,x,y);
    if (d < r) {
      circle++;
      fill(random(155),105,0,5);
      //noStroke();
      stroke(random(155),105,0,55);
    } else {
      fill(0, 100, 205,5);
      //noStroke();
      stroke(0, 100, 205, 55);
    }
  }
  pi = 4 * (float(circle) / total);
  println(pi);
  strokeWeight(0.1);
  //ellipse(x, y, x * sin(pi), y * cos(pi));
  //float a = 0;
  //rotateX(a);
  //a *= tan(pi);
  ellipse(x, y, x + pi, y + pi);
  if (pi >= 3.13 && pi <= 3.18) {
    fill(255, 0, 0, 25);
    text( pi, x, y);
  }
  
  //if (frameCount % 500 ==1){
  //  saveFrame("200/image-########.png");
  //}
}