let imgs = []
let randomButton
let canvas
let namesArray = ['jon', 'dylan', 'mon', 'alex']

let names
let randImage

function preload(){
	for(let i = 0; i<2; i++){
		imgs[i] = loadImage('cars/' + i + '.jpg')
	}
}

function setup(){
	print(imgs)
}

function draw(){
// image(imgs(0), windowWidth / 2, windowHeight/2)
}

