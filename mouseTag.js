let moon

let moonX
let moonY

let moonXSpeed = 3
let moonYSpeed = 3

let score = 0

let mouseDistance

let startBool = true
let winBool = false

function preload(){
	moon = loadImage('fullmoonpng6.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	moonX = (windowWidth / 2)
	moonY = (windowHeight / 2)
}


function draw(){
	if(startBool){
		startGame()
	}
	if(winBool){
		winGame()
	}
	if(moonX>=windowWidth - 50 || moonX<=0){
		moonXSpeed = -moonXSpeed
	}
	if(moonY>=windowHeight - 50 || moonY<=0 ){
		moonYSpeed = -moonYSpeed
	}
	if(mouseDistance<50){
		score++
		moonX = random(26, windowWidth - 26)
		moonY = random(26, windowHeight - 26)
		moonXSpeed = moonXSpeed * 1.2
		moonYSpeed = moonYSpeed * 1.2
	}
	if(score>33){
		winBool = true
	}

}

function startGame(){
	background(0)
	image(moon, moonX, moonY, 50, 50)
	mouseDistance = dist(mouseX, mouseY, moonX, moonY)
	moonX = moonX + moonXSpeed
	moonY = moonY + moonYSpeed
	fill(255)
	text('Reach the moon, your score is ' + score + '.', (windowWidth / 2) - 100, 100)
}

function winGame(){
background(0)
fill(255)
textSize(140)
text('Congrats!', (windowWidth / 2) - 300, (windowHeight / 2) + 100)
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}

