let tricorn

let redVar
let greenVar
let blueVar

function preload(){
  tricorn = loadImage('tricorn.jpg')
}

function setup() {
createCanvas(windowWidth, windowHeight)
redVar = random(225)
greenVar = random(225)
blueVar = random(225)
background(225, 225, 225)
}

function draw() {
   if(mouseIsPressed){
    background(redVar, greenVar, blueVar)
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