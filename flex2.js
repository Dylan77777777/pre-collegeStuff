let moon

let x = []
let y = []

function preload(){
	moon = loadImage('fullmoonpng6.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)

	for (var i = 0; i < 10; i++) {
		x.push(random(30, windowWidth-30))
		y.push(random(30, windowHeight-30))
	}
}

function draw(){
	background(210, 20, 200)

	for(let i = 0;i<x.length;i++){
		image(moon, x[i],y[i], 60, 60)
		if(dist(mouseX, mouseY, x[i], y[i])<30){
			x.splice(i, 1)
			y.splice(i, 1)
	}
	}

function keyPressed() {
	if(key === 'a'){
		x.push(random(30, windowWidth - 30))
		y.push(random(30, windowHeight - 30))
	}
}


}