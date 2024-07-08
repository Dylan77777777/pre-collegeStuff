let paddle
let paddleX
let paddleXSpeed
let paddleY
let paddleYSpeed

let ball
let ballX
let ballXSpeed
let ballY
let ballYSpeed

let brick
let aBrick = []

let uWall
let bWall
let rWall
let lWall
let state


let canvas 
let playButton

let playing = false
let t1000

let glitch 

function preload(){
	//t1000 = createVideo(['T1000Re.mp4'])
	ball = loadImage('ball.png')
	paddle = loadImage('paddle.jpg')
	glitch = loadImage('glitch.jpg')
}

function setup(){
	imageMode(CENTER)

	canvas = createCanvas(windowWidth, windowHeight)
	background(0)
	ballX = (windowWidth / 2)
	ballY = (windowHeight / 2)
	ballXSpeed = 0
	ballYSpeed = 0
	paddleX = mouseX
	paddleY = windowHeight - (windowHeight/16)
	// stage = 4
	// console.log(stage)
	console.log(canvas)
	startGame()
}

function draw(){
	fStage()
	move(ballX, ballXSpeed, ballY, ballYSpeed)
	move(paddleX, paddleXSpeed, paddleY, paddleYSpeed)
	startingGame()
}

function move(X, XSpeed, Y, YSpeed){
	X += XSpeed
	Y += YSpeed
}

function playT1000(){
	if(playing){
		t1000.hide()
		t1000.pause()
		playButton.html('Escape')
	}
	else{
		t1000.show()
		t1000.loop()
		playButton.hide()
	}
}

function startGame(){
	image(ball, ballX, ballY, 25, 25)
	stage = 1
}

function startingGame(){
	if(keyIsPressed){
		ballXSpeed += 4
		ballYSpeed += 4
	}
}

function fStage(){
	if(stage === 4){
		image(t1000, windowWidth, windowHeight)
		t1000.position(windowWidth/2, windowHeight/2)
		playButton = createButton('ESCAPE?')
		playButton.position(windowWidth/2, windowHeight/2)
		playButton.mousePressed(playT1000)
	}
}


function windowResized(){

	resizeCanvas(windowWidth, windowHeight)
	background(glitch)
	glitch.resize(windowWidth, windowHeight)

}