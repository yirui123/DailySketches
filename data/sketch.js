// var data;
//
// function preload() {
//   data = loadJSON("cats.json");
// }

var spaceData;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  // noCanvas();
  // var cats = data.cats;

  // for (var i = 0; i < cats.length; i++) {
  //   createElement('h1', cats[i]);
  //   var members = birds[i].members;
  //   for (var j = 0; j < members.length; j++) {
  //     createDiv(members[j]);
  //   }
  // }

  // weather API
  //http://api.openweathermap.org/data/2.5/find?q=New%20York&units=metric&appid=3543b6d8726ef261ce7643e58e6aab84
  loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
  frameRate(6);
}

function gotData(data) {
  spaceData = data;
  for (var i = 0; i < spaceData.number; i++) {
    print(spaceData.people[i].name);
  }
}

function draw() {
  background(0, 200);
  // if the data exists
  if (spaceData) {
    for (var i = 0; i < spaceData.number; i++) {
      var x = random(width - 200);
      x = x + 200;
      var y = random(height - 200);
      y = y + 200;
      fill(255, 200, random(255));
      ellipse(x - 16, y - 10, 16, 16);
      textSize(32);
      text(spaceData.people[i].name, x, y);
      fill(0, 102, 153);
      textSize(22);
      text(spaceData.people[i].craft, x, y + 32);
      fill(0, 102, 153);
    }
  }
}