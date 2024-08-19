function setup() {
  createCanvas(600, 600);
  background('black')
}

function draw() {
  stroke('red')
  
  if(mouseIsPressed){
    circle(mouseX, mouseY, 20)
  }
}
