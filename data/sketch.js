var data;

//async
function preload() {
  data = loadJSON("cats.json");
}

function setup() {
  // createCanvas(window.innerWidth, window.innerHeight);
  noCanvas();
  var cats = data.cats;

  for (var i = 0; i < cats.length; i++) {
    createElement('h1', cats[i]);
    // var members = birds[i].members;
    // for (var j = 0; j < members.length; j++) {
    //   createDiv(members[j]);
    // }
  }
}

function draw() {
  background(0);


}