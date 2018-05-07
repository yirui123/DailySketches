function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let deadline = "MAY 10 2018 23:59:59";
  let countdown = Date.parse(deadline) - Date.parse(new Date());
  let seconds = Math.floor((countdown / 1000) % 60);
  let minutes = Math.floor((countdown / 1000 / 60) % 60);
  let hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
  let days = Math.floor(countdown / (1000 * 60 * 60 * 24));

  background(0);
  translate(200, 200);
  rotate(-90);

  textSize(25);
  noStroke();
  fill(255);
  text(days + ":" + hours + ":" + minutes + ":" + seconds, 5, -5);

  let daAngle = map(days % 265, 0, 365, 0, 360);
  let hrAngle = map(hours % 12, 0, 12, 0, 360);
  let mnAngle = map(minutes, 0, 60, 0, 360);
  let scAngle = map(seconds, 0, 60, 0, 360);

  noStroke();
  fill(hrAngle, mnAngle, scAngle, 55);
  ellipse(0, 0, 300, 300);


  noFill();
  strokeWeight(4);

  push();
  rotate(daAngle);
  stroke(daAngle, hrAngle, mnAngle);
  fill(255, 155, 155);
  line(0, 0, 200 / 2, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(hrAngle, mnAngle, scAngle);
  line(0, 0, 200 / 2, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(mnAngle, scAngle, countdown % 255);
  line(0, 0, 250 / 2, 0);
  pop();

  push();
  rotate(scAngle);
  stroke(countdown % 255 + 55);
  line(0, 0, 280 / 2, 0);
  pop();

  fill(hrAngle, mnAngle, scAngle);
  ellipse(0, 0, 8, 8);
}
