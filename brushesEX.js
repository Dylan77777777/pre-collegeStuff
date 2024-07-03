let moon

let moonBrushBool = false
let ellipseBrushBool = false

function preload(){
	moon = loadImage('fullmoonpng6.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	background(225)
	imageMode(CENTER)
}



function draw(){
	if(moonBrushBool){
		moonBrush()
	}
	if(ellipseBrushBool){
		ellipseBrush()
	}
}

function moonBrush(){
	image(moon, mouseX, mouseY, 10, 10)
}

function ellipseBrush(){
	fill(random(255), random(255), random(255))
	ellipse(mouseX, mouseY, 50, 50)
}

function keyPressed(){
	if(key === 'm'){
		moonBrushBool = true
		ellipseBrushBool = false
	}
	if(key === 'e'){
		ellipseBrushBool = true
		moonBrushBool = false
	}
}

function mouseDragged(){
	if(moonBrushBool){
		moonBrush()
	}
	if(ellipseBrushBool) {
		ellipseBrush()
	}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}