let moon

let x = []
let y = []

function preload(){
	moon = loadImage('fullmoonpng6.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
}

function draw(){
	background(150, 40, 200)
	for(let i=0;i<x.length;i++){
		image(moon,x[i],y[i], 30, 30)
	}
}

function mouseClicked(){
	x.push(mouseX)
	y.push(mouseY)
	print(x.length)
}

function keyPressed(){
	if(key === 'x'){
		x.splice(x.length - 1, 1)
		y.splice(y.length - 1, 1)
	}
}