let speech;

function setup() {
  createCanvas(400, 100);
  background(0, 0, 255);
  speech = new p5.Speech(voiceReady); // speech synthesis object
  speech.started(startSpeaking);
  speech.ended(endSpeaking);

  function startSpeaking() {
    background(0, 255, 0);
  }

  function endSpeaking() {
    background(0, 255, 255);
  }

  function voiceReady() {
    console.log(speech.voices);
  }

}

function mousePressed() {
  let voices = speech.voices;
  let voice = random(voices);
  speech.setVolume(1.5);
  speech.setVoice('Fred');
  speech.setRate(0.3);
  speech.setPitch(0.5);
  console.log(voice.name);
  speech.speak('I am a pump-pump-pumpkin, what about you'); // say something
}
