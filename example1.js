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

for(let i=0;i<windowWidth/2;i=i+10){
  line(i, 0, i, windowHeight)
}

for(let i=0;i<windowHeight/2;i=i+10){
  line(0, i, windowHeight, i)
}

for(let i=0;i<100;i++){
  ellipse(random(windowWidth), random(windowHeight), 20, 20)
}

   if(mouseIsPressed){
    background(redVar, greenVar, blueVar)
    for(let i=0; i<2048;i++){
    image(tricorn, random(windowWidth), random(windowHeight), 30, 30)
  }

  for(let i=0;i<windowHeight;i=i+10){
  line(0, i, windowHeight, i)
}


for(let i=0;i<windowWidth;i=i+10){
  line(i, 0, i, windowHeight)
}   
  
   }

   else if(keyIsPressed){
    ellipse(windowWidth / 2, windowHeight / 2, 100)
   }
   else{
    background(255, 215, 268)
   }
   text('hi', 300, 400)
 }

 function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

