var symbol;
var symbolSize = 30;
var streams = [];
var bgImg;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  bgImg = loadImage("assets/bg.jpeg");
  // symbol = new Symbol(width/2, 0, random(5,10));
  // symbol.setToRandomSymbol();

  textSize(symbolSize);
  // stream = new Stream();
  // stream.generateSymbols();
  var x = 0;
  // var y = 0;
  for(var i = 0; i <= width/symbolSize; i++) {
    stream = new Stream();
    stream.generateSymbols(x, random(0,height));
    streams.push(stream);
    x += symbolSize*3;
  }

}

function draw(){
  background(0, 105);
  image(bgImg, 0, 0, width, height);
  tint(255, 25); 
  // stream.render();
  streams.forEach(function(stream){
    stream.render();
  });
}

function Symbol(x, y, speed, first, last){
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.switchInterval = round(random(10,20));
  this.value;
  this.first = first;
  this.last = last;

  this.setToRandomSymbol = function() {
    if ( frameCount % this.switchInterval == 0) {
      this.value = String.fromCharCode(
        0x4E00 + round(random(0,1000))
      );
    } else {
      return false;
    }

  }

  // this.render = function(){
  //   fill(0, 255, 70);
  //   text(this.value, this.x, this.y);
  //   this.rain();
  //   this.setToRandomSymbol();
  // }

  this.rain = function(){
    // if (this.y >= height) {
    //   this.y = 0;
    // } else {
    //   this.y += this.speed;
    // }
    this.y = (this.y >= height) ? 0 : this.y += this.speed;

  }
}

function Stream(){
  this.symbols = [];
  this.totalSymbols = round(random(10,30));
  this.speed = round(random(2, 5));
  this.generateSymbols = function(x, y){
    // var y = 0;
    // var x = width / 2;
    var first = round(random(0,4)) == 1;
    var last = round(random(0,2)) == 1;
    for (var i = 0; i <= this.totalSymbols; i ++) {
      symbol = new Symbol(x, y, this.speed, first, last );
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolSize*3;
      x -= symbolSize/2;
      first = false;
      last = false;
    }
  }

  this.render = function(){
    this.symbols.forEach(function(symbol){
      if(symbol.first) {
        fill(random(255), 255, 180);
      }  else if (symbol.last) {
        fill(255, 0, 0);
      } else {
        fill(0, 0, 255);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}
