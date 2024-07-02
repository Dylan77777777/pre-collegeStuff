let tricorn

function preload(){
  tricorn = loadImage('tricorn.jpg')
}

function setup() {
createCanvas(windowWidth, windowHeight)
}

function draw() {

   if(mouseIsPressed){
    background(180, 0, 255)
    image(tricorn, windowWidth / 2, windowHeight / 2)
   }
   else if(keyIsPressed){
    ellipse(windowWidth / 2, windowHeight / 2, 100)
   }
   else{
    background(255, 215, 268)
   }
   text('hi', 300, 400)
 }