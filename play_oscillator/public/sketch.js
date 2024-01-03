//variable for oscialtor object
let osc;

//varable for frequency
let freq = 262;

function setup() {
  createCanvas(400, 400);

  //initialize oscillator
  osc = new p5.Oscillator(freq);

  //set text size
  textAlign(CENTER, CENTER);
  textSize(30);
}
  
function draw() {
  background(220);

  //instructions
  text("Hold down the\n mouse button\n to play Middle C", 200,100);

  if (osc.started === true) { //check if osc is playing
    //get frequency of oscillator playing
    freq = osc.getFreq()

    //display frequency
    text(`${freq} Hz`, width / 2, height / 2);
  }
  else { 
    text('0 Hz', width / 2, height / 2);
  }

}

//start sound when mouse is pressed
function mousePressed() {
  osc.start();
}

//stop sounds when mouse button is not pressed
function mouseReleased() {
  osc.stop();
}
