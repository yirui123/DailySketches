var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=metric';
var input;

var lineX = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var city = input.value();
  var url = api + city + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(51);
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
  }

  stroke(255);
  line(lineX, 0, lineX, height);
  lineX = lineX + 5;
  if (lineX > width) {
    lineX = 0;
  }
}