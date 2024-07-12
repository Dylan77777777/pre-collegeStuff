let paddle
let paddleX
let paddleY
let paddleUWall = 0
let paddleBWall
// MAKE BRICKS GO AWAY ON HIT BY USING ARRAY AND SEEING IF THE POSITION OF THE BALL IS IN LINE WITH THE ARRAY BRICK

let ball
let ballX
let ballXSpeed = 0
let ballY
let ballYSpeed = 0

let brick1
let brick2
let brick3
let brick4
let brick5
let brick6
let brick7
let brick8
let brick9
let brick10
let brick11
let brick12
let brick13
let brick14
let brick15
let brick16
let brick17
let brick18
let brick19
let brick20
let aBrickX
let aBrickY
let numOfBricks = 0

let back
let uWall
let bWall
let rWall
let lWall

let stage = 0
let stageChange = 0
let oldStage = 0
let button

let canvas 
let playButton
let startButton

let playing = false
let t1000

let glitch 
let input
let oldInput
let upperCaseInput
let resized = 0

let currentFont
let BCFont
let compFont
let EBFont
let SBFont
let WDFont
let BBox
let startingText
let hardMode = false

let endGameBool = false

function preload(){
	t1000 = createVideo('T1000Re.mp4')
	t1000.hide()
	ball = loadImage('ball.png')
	paddle = loadImage('paddle.jpg')
	glitch = loadImage('glitch.jpg')
	BCFont = loadFont('BadComa.ttf')
	compFont = loadFont('Fonts/Computerfont.ttf')
	EBFont = loadFont('Fonts/ExtraBlur.ttf')
	SBFont = loadFont('Fonts/StaticBuzz.ttf')
	WDFont = loadFont('Fonts/Wrong Delivery.ttf')
}

function setup(){
	imageMode(CENTER)
	rectMode(CENTER)
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0,0)
	background(0)
	//console.log(ballY)
	startupScreen()
	ballX = windowWidth/2
	ballY = windowHeight/2
	//console.log(ballY)
	rWall = ((windowWidth / 3) * 2.34)
	lWall = ((windowWidth / 3) * 0.66)
	// uWall = ((windowWidth / 3) * 2.34)
	// bWall = ((windowWidth / 3) * 2.34)
	paddleUWall = (windowHeight - (windowHeight/8)) - 10
	//console.log(paddleUWall)
	paddleBWall = mouseX + 10
	//stage = 4
	aBrickX = [windowWidth/2]
	aBrickY = [((windowHeight/2))]

}

function draw(){
	fStage()
	moveCheck()
	//startingGame()
	inputCheck()
	movement()
	//difficulty()
	// checkStage()
	collision()
	newStage()

	if(endGameBool == true){
		endGame()
	}
	//hitCheck()
	//console.log(brick1)
	//console.log(stage)
}

function moveCheck(){
	if(input.value() != ''){
		startButton.mousePressed(move)
		
	}

}

function movement(){
	if(playing === true && hardMode === false){
		ballX += ballXSpeed
		ballY += ballYSpeed
		paddleX = mouseX
		paddleY = windowHeight - (windowHeight/8)
		back = rect(windowWidth/2, windowHeight/2, 600, 600)
		image(ball, ballX, ballY, 25, 25)
		image(paddle, paddleX, paddleY,70, 15)
	}
	else if(playing === true && hardMode === true){
		ballX += ballXSpeed + 1
		ballY += ballYSpeed + 1
		paddleX = mouseX
		paddleY = windowHeight - (windowHeight/8)
		back = rect(windowWidth/2, windowHeight/2, 600, 600)
		image(ball, ballX, ballY, 10, 10)
		image(paddle, paddleX, paddleY,50, 15)
	}
}

function move(){
	stage = 1
	playing = true
	ballXSpeed += 4
	ballYSpeed += 4
	//console.log("input accepted, moving to move()")
	input.hide()
	//console.log(playing)
	startButton.hide()
	//console.log(ballXSpeed)
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
		playButton.style.display = 'block'
		alert(upperCaseInput + ' HAS BECOME A GLITCH IN THE SYTEM')
	}
}

function difficulty(){
	if(hardMode === 1){

	}
}

function inputCheck(){
	if(oldInput != input){
		oldInput = input.value
		upperCaseInput = oldInput.value
	}
	// console.log(input.value.this.elt.value)
	// console.log(input.value.this)
	// console.log(input.value)

}



function startMsg(){	
	let neg = 0
	let neg2 = 0
	let pos = 0
	let minus
	setInterval(theLoopInQuestion, 2000 + minus)
		function theLoopInQuestion(){
//		for(let i = 0; i<100; i++){
			//console.log(minus)
			startingText = text('You need to put a name!', windowWidth/2 - 30 - neg, windowHeight/2 + pos)
			neg -= 12
			neg2 -= 2
			pos += 12
			minus = neg2
			//console.log('the loop in question')
			//theLoopInQuestion()
			//clearTimeout(setTimeout)

	//	}
	}
	theLoopInQuestion()

		//console.log('msg looping')
}

			//console.log('need name')

function buttonCheck(){
	if(input.value() == ''){
		 startMsg()
		//text('add name', windowWidth/2, 100)
		//console.log('doing startMsg')
	}
 
	else{
			startGame()
			console.log('GAME STARTED')
	}
}


function startupScreen(){
	back = rect(windowWidth/2, windowHeight/2, 600, 600)
	textSize(40)
	textFont(compFont)
	startingText = text('Enter your name for the leaderboard!', windowWidth/2, windowHeight/2-200, 570)
	textAlign(CENTER)
	textWrap(WORD)
	stage = 0
	input = createInput('')
	input.position(windowWidth/2-85,windowHeight/2)
	startButton = createButton('START?')
	startButton.position(windowWidth/2-30,windowHeight/2+100)
	startButton.mousePressed(buttonCheck)	
}

// function checkStage(){
// 	if(oldStage < stage){
// 		oldStage = stage.value
// 		newStage()

// 	}
// }

function newStage()
{	
	//console.log("NEWSTAGE IS RUNNING")
	if(stage === 1){
		//console.log("STAGE ONE")
		rectMode(CENTER)
		fill(0,0,0)
		brick1 = rect(aBrickX,aBrickY- (windowHeight/8), 30, 15)
		console.log(aBrickX)
		console.log(aBrickY)
		//aBrick.push(brick1)
		//console.log(brick1)
		//brick2 = rect(aBrickX,aBrickY- 10, 30, 15)
		//aBrick.push(brick2)
		//brick3 = rect(aBrickX,aBrickY - 20, 30, 15)
		//aBrick.push(brick3)
		//brick4 = rect(aBrickX,aBrickY - 30, 30, 15)
		//aBrick.push(brick4)
		//brick5 = rect(aBrickX,aBrickY - 40, 30, 15)
		//aBrick.push(brick5)
		//brick6 = rect(aBrickX,aBrickY - 50, 30, 15)
		//aBrick.push(brick6)
		//brick7 = rect(aBrickX,aBrickY - 60, 30, 15)
		//aBrick.push(brick7)

		//print(aBrick)
		//brick8 = rect(600,200, 30, 15)
		// aBrick.push(brick8)
		// brick9 = rect(600,200, 30, 15)
		// aBrick.push(brick9)
		// brick10 = rect(600,200, 30, 15)
		// aBrick.push(brick10)
		// brick11 = rect(600,200, 30, 15)
		// aBrick.push(brick11)
		// brick12 = rect(600,200, 30, 15)
		// aBrick.push(brick12)
		// brick13 = rect(600,200, 30, 15)
		// aBrick.push(brick13)
		// brick14 = rect(600,200, 30, 15)
		// aBrick.push(brick14)
		// brick15 = rect(600,200, 30, 15)
		// aBrick.push(brick15)
		// brick16 = rect(600,200, 30, 15)
		// aBrick.push(brick16)
		// brick17 = rect(600,200, 30, 15)
		// aBrick.push(brick17)
		// brick18 = rect(600,200, 30, 15)
		// aBrick.push(brick18)
		// brick19 = rect(600,200, 30, 15)
		// aBrick.push(brick19)
		// brick20 = rect(600,200, 30, 15)
		// aBrick.push(brick20)
		fill(256,256,256)
		//console.log(stage)
	}
	// else if(stage === 2){

	// }
	// else if(stage === 3){

	// }

}

// function hit(brick){
// 	let brickObj = brick.getBoundingClientRect()
// 	let brickX = brickObj.x
// 		if((ballX > brickObj.x - 30) && (ballX < brickObj.x + 30) && (ballY < brickObj.x - 15)){
// 		brick.hide()
// 	}
// }
// function hitCheck(){
// 	hit(brick1)
// 	hit(brick2)
// 	hit(brick3)
// 	hit(brick4)
// 	hit(brick5)
// 	hit(brick6)
// 	hit(brick7)
// 	hit(brick8)
// 	hit(brick9)
// 	hit(brick10)
// 	hit(brick11)
// 	hit(brick12)
// 	hit(brick13)
// 	hit(brick14)
// 	hit(brick15)
// 	hit(brick16)
// 	hit(brick17)
// 	hit(brick18)
// 	hit(brick19)
// 	hit(brick20)
// }

// function startGame(){
// 	input.hide()
// 	startButton.hide()
// 	console.log('start game is running')
// 	back = rect(windowWidth/2, windowHeight/2, 600, 600)
// 	ballX = (windowWidth / 2)
// 	ballY = (windowHeight / 2)
// 	console.log(stage)
// 	stage = 1
// 	console.log(stage)
// 	image(ball, ballX, ballY, 25, 25)
// 	difficulty()
// 	playing = true
// }

function fStage(){
	if(stage === 4){
		//image(t1000, 0, 0, windowWidth, windowHeight)
		image(t1000 , 0, 0, width, height, 0, 0, 0, 0, COVER)
		t1000.position(windowWidth, windowHeight)
		playButton = createButton('ESCAPE?')
		playButton.position(windowWidth/2, windowHeight/2)
		playButton.mousePressed(playT1000)
	}
}

function endGame(){
	imageMode(CENTER)
	background(glitch)
	image(glitch, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	alert(upperCaseInput + " HAS FALLEN TO THE SYSTEM")
	ballYSpeed = 0
	ballXSpeed = 0 
}

function collision(){
// checking if ball hits a side wall
	if((((ballX + 20)>rWall || (ballX - 20)<lWall)) && hardMode != true){
		ballXSpeed = -ballXSpeed
		//console.log("ballXSpeed reversed")
	}
		if(((ballY - 25)>uWall) && hardMode != true){
		ballYSpeed = -ballYSpeed
		//console.log("ballYSpeed reversed")
	}

	for(let i = 0; i<= aBrickX.length-1; i++){

		if(dist(ballX, ballY, aBrickX[i], aBrickY[i]) < 15){
			aBrickX.splice(i, 1)
			aBrickY.splice(i, 1)
			console.log('checking loop')
		}
		// 		if(dist(ballX, ballY, aBrickX[], aBrickY) < 15){
			
		// }
		// 		if(dist(ballX, ballY, aBrickX[], aBrickY) < 15){
			
		// }
		// 		if(dist(ballX, ballY, aBrickX[], aBrickY) < 15){
			
		// }
		// 		if(dist(ballX, ballY, aBrickX[], aBrickY) < 15){
			
		// }
		// 		if(dist(ballX, ballY, aBrickX[], aBrickY) < 15){
			
		// }
		// 		if(dist(ballX, ballY, aBrickX[], aBrickY) < 15){
			
		// }
		// 		if(dist(ballX, ballY, aBrickX[], aBrickY) < 15){
			
		// }

	// if (dist(ballX, ballY, aBrickX, aBrickY) < 15 || dist(ballX, ballY, aBrickX, aBrickY) < 15 || dist(ballX, ballY, aBrickX, aBrickY) < 15 ||
	// 	dist(ballX, ballY, aBrickX, aBrickY) < 15 || dist(ballX, ballY, aBrickX, aBrickY) < 15 || dist(ballX, ballY, aBrickX, aBrickY) < 15 ||
	// 	dist(ballX, ballY, aBrickX, aBrickY) < 15){
	// 		ballYSpeed = -ballYSpeed
	// }
}

	// if(ballY>paddleUWall){
	// 	console.log("ball is under paddle")
	// }
	// if(ballX < (paddleX + 45)){
	// 	console.log("ball is from left")
	// }
	
	// if(ballX >(paddleX - 45)){
	// 	console.log("ball is from right")
	// 	console.log(paddleUWall)
	// }
	if((ballY>paddleUWall-5) && ((ballX < (paddleX + 45)) && (ballX >(paddleX - 45)))){
		ballYSpeed = -ballYSpeed
		//console.log("bounced off of paddle")
	}
	if (ballY> windowHeight - windowHeight/9) {
		//console.log("game ended")
		playing = false
		endGameBool =true

	}
	if(ballY< windowHeight/9){
		ballYSpeed = -ballYSpeed
	}
	// if(paddleX + 45 >rWall){
	// 	paddleX = rWall
	// 	console.log(rWall)
	// 	console.log('paddleX reversed')
	// }

	//concept code


}


function windowResized(){

	resizeCanvas(windowWidth, windowHeight)
	imageMode(CORNERS)
	background(glitch)
	//image(glitch, windowWidth, windowHeight, windowWidth, windowHeight)
	//imageMode(CENTER)
	console.log('why are you in here?')
	alert(upperCaseInput + " HAS BROKEN THE SYSTEM, INITALIZING HARDMODE")
	hardMode = true
	//glitch.resize(windowWidth, windowHeight)

}