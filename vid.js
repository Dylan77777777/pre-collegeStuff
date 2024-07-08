let canvas 
let playButton

let playing = false
let t1000

function preload(){
	t1000 = createVideo(['T1000Re.mp4'])
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	//z-index is the layer in which its on
	canvas.position(0,0)

	t1000.position(400, 400)

	playButton = createButton('Play Video')
	playButton.position(200, 200)
	playButton.mousePressed(playT1000)
}

function playT1000(){
	if(playing){
		t1000.hide()
		t1000.pause()
		playButton.html('Play Video')
	}
	else{
		t1000.show()
		t1000.loop()
		playButton.html('Pause Video')
	}
}

function draw(){
	
}