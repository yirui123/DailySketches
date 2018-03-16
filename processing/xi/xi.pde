//int a = floor(random(30,60));
void setup() {
  background(255,0,0);
  size(400, 400);
  frameRate(20);
}

void draw() {
  fill(255,255,255,10);
  rect(0,0,width-1,height-1);
  translate(width/2-10,height/2-25);
  drawLines(0,0,random(800,2000));
  //noLoop();
}

   
void drawLines(float x, float y, float r) {
  noFill();
  stroke(255, 0, 0, 15);
  strokeWeight(3);
  smooth();
  pushMatrix();
  line(x, y, x+20, y);
  line(x+10, y-10, x+10, y+10);
  line(x+2, y+10, x+17, y+10);
  ellipse(x+10, y+20, 10, 10);
  line(x+4, y+28, x+6, y+33);
  line(x+15, y+28, x+13, y+33);
  line(x-5, y+37, x+25, y+37);
  ellipse(x+10, y+49, 13, 13);
  popMatrix();
  //rotate(PI/a);
  //a++;
  if(r > 2)  {
    drawLines(x+r/35, y, r/35);
    drawLines(x-r/35, y, r/35);
  }
}