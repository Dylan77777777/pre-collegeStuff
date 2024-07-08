
let canvas

let playButton

let baby
let modem
let airstrikeFont
let modemVolSlider
let modemRateSlider

let level 

//let amplitude

let r = 0
let g = 0
let b = 0

function preload(){
	baby = loadImage('dancingbaby2.gif')
	modem = loadSound('ModemSound.mp3')
	airstrikeFont = loadFont('airstrike.ttf')
}

function setup(){


canvas = createCanvas(windowWidth, windowHeight)
canvas.style('z-index', '-1')
playButton = createButton('Play Audio')
canvas.position(0,0)
playButton.position(windowWidth/2,windowHeight/2)
playButton.mousePressed(playModem)
// playButton.hide()
// playButton.show()
modemVolSlider = createSlider(0, 1, 1, 0.01)
modemRateSlider = createSlider(0.1, 3, 1, 0.01)
}

//amplitude = new p5.Amplitude()

function playModem(){
	if(!modem.isPlaying()){
		modem.loop()
		playButton.html('Pause Audio')
	}
	else{
		modem.pause()
		playButton.html('Play Audio')
	}
}

function redBackground() {
	r = 255
	g = 130
	b = 80
	}

function draw(){
background(r,g,b)
image(baby, 400, 300, 400, 400)
modem.setVolume(modemVolSlider.value())
modem.rate(modemRateSlider.value())
//level = amplitude.getLevel()
// let size = map(level,0,.6,100,900)
// ellipse(windowWidth/2,windowHeight/2,size,size)
textFont(airstrikeFont)
textSize(40)
fill(255)
text('audio-buttons', windowWidth / 2, 50)
textAlign(CENTER)
}



function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}