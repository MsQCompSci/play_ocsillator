# play_oscillator
play a p5.Oscillator object

## Step 1 – Setup the project with Express.js

1. Download and open [this project](https://github.com/MsQCompSci/melody_app_starter) folder in an editor on your computer. The folder contains a public folder with p5 starter files, and a data folder with premade melodies.
2. Install Node.js in your project folder on your computer by following the steps in [Getting Started with Node.js]("https://docs.google.com/document/d/1n6Je0Lzht2ibQmN1st1ccth47ppNhIYtMBTOwNAAFdo/edit")
3. Install express and create a package.json file in your project folder by typing the following command in the terminal and pressing enter: `npm init -y`
4. Install Express.js by typing `npm install express` in the melody-app project folder in the terminal
   
Your package.json file should look something like this:

<code>{
  "name": "melody-app",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}</code>

Note: A package.lock.json file and node_modules may appear in your project folder when you install or update a library using npm

5. Run the server by typing  node server.js in the melody-app folder using the terminal, and open http://localhost:3000 in your browser. You should see an empty canvas in the browser window.

6. We will learn how to create sounds using p5.Oscillator objects from the p5.sound library. Make sure to you have the following script tag in the <head> of the index.html file to link the sound library to your project:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.min.js"></script>`

## Step 2 - Use an Oscillator to Play a Sound

### About Sound Waves
Sound is a form of energy that travels by creating periodic waves through the air and other mediums. The sound that the wave produces depends on the frequency (pitch) and amplitude (volume) of the wave [(see diagram)](https://files.mtstatic.com/site_9956/87246/0/webview?Expires=1704221837&Signature=GNNhrgn527sgKnwKirhCeiAo4SubETlUgIhHX-KikfPk7eqPp0vXPNJqmGTs7zJ10yxjDjz0uQisXucOhshIB13VMP7-1H1tkGsstEGXpbx1rVumpG6EQiBNod6~7YBGZ9VBo8U1h-m0b6JuE8GR6h0pYAsf0mJssBrNZyGV1mY_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA). 

[p5.Oscillator](https://p5js.org/reference/#/p5.Oscillator) objects are waveforms with different frequencies and amplitudes. You can use them to create sounds in your p5.js projects.

1. Create a global variable named `osc` which will store a p5.Oscillator object.

<code>//variable for oscillator
let osc;</code>

2. Define a global variable called freq and initialize it with 262. 262 is the frequency, in Hz, for the middle C note. 

<code>//variable for frequency
let freq = 262;</code>

3. In setup() initialize `osc` with an oscillator object that uses the middle C note frequency. 

<code>//create oscillator object
osc = new p5.Oscillator(freq);</code>

4. Define mousePressed() and mouseReleased() to control when the oscillator's starts and stops, respectively.

<code>//start sound when mouse is pressed
function mousePressed() {
  osc.start();
}</code>

<code>//stop sound when mouse button is released
function mouseReleased() {
  osc.stop();
}</code>

5. Check your browser settings are not muted by default then test the oscillator. You shoud hear middle C playing when your mouse button is pressed down:
   - After checking your settings, run the sketch.
   - Press and hold down the mouse button press and release your mouse in the canvas area to hear the note play. 
   - Release the button to stop the note.

6. Place instructions on the canvas to remind the user how to interact with it:
  - Set initial settings to center and resize text with instructions in setup():
    
  <code>//set text size and alignment
  textAlign(CENTER, CENTER);
  textSize(30);</code>

  - Add text with instructions in draw():
    
  <code>//instructions
 text("Hold down the\n mouse button\n to play Middle C", 200,100);</code>

7. Display the oscillator's frequency in Hz on the canvas.
   - Check if the oscillator is playing:
   - If it is add text to display the frequency of the sound; if not display 0Hz.

  <code> if (osc.started === true) { //check if osc is playing
      //save frequency of sound
      let freq = osc.getFreq(); 
  </code>
       
   <code>//display frequency
      text(freq + 'Hz', width / 2, height / 2);
    } else {
      text('0 Hz', width / 2, height / 2);
    } 
   </code>

