var symbol;
var symbolSize = 18;
var streams = [];
var data;

function preload() {
  data = loadJSON("cats.json");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  textSize(symbolSize);
  var x = 0;
  // var y = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    stream = new Stream();
    stream.generateSymbols(x, random(-height, height));
    streams.push(stream);
    x += symbolSize * 2;
  }
}

function draw() {
  background(0, 255);
  streams.forEach(function(stream) {
    stream.render();
    rotate(PI / (width / map(mouseX, 0, width, -2, 2, true)));
  });

}

function Symbol(x, y, speed, first, last) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.switchInterval = speed;
  this.value;
  this.first = first;
  this.last = last;
  var cats = data.cats;

  this.setToRandomSymbol = function() {
    if (frameCount % this.switchInterval == 0) {
      for (var i = 0; i < cats.length; i++) {
        this.value = cats[i];
      }
    }
  }

  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }
}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(1, 5));
  this.speed = round(random(1, 3));
  this.generateSymbols = function(x, y) {
    var first = round(random(0, 10)) == 1;
    var last = round(random(0, 20)) == 1;
    for (var i = 0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(x, y, this.speed, first, last);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolSize;
      x += symbolSize * 100;
      first = false;
      last = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(random(255), 255, 180);
      } else if (symbol.last) {
        fill(255, 0, 0);
      } else {
        fill(0, 155, 255);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}