function preload(){
  fullmoonpng6 = loadImage('fullmoonpng6.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,0, 220);
 

   
   if(mouseIsPressed){
  strokeWeight(1)
  fill(256, 256, 0, 255)
  triangle(-100, 200, 0, 110, 200, 240)
  triangle(-100, -200, 0, 50, 200, 240)
  triangle(100, -200, 80, -50, 200, 240)
  triangle(190, -200, 240, -150, 200, 240)
  triangle(300, -200, 400, -250, 200, 240)
  triangle(440, -200, 700, -350, 200, 240)
  triangle(850, 160, 880, -200, 200, 240)
  ellipse(200, 240, 200, 200)
  fill(0,256,0)
  ellipse(320, 390, 290, 300)
  ellipse(50, 390, 340, 300)
   }
   if(keyIsPressed){
    image(fullmoonpng6, windowWidth / 2, windowHeight / 2)
   }
}