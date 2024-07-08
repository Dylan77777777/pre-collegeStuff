

function setup(){
	createCanvas(800,240)

	capture = createCapture(VIDEO)
	capture.size(220,240)
	capture.hide()
}

function draw(){
	capture.filter(GRAY)
	image(capture, 0, 0)
}