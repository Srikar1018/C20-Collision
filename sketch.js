fixedrect;
movablerect;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "Green";
  movablerect = createSprite(400,200,80,30);
movablerect.shapeColor = "Green";
}

function draw() {
  background(255,255,255); 
  movablerect.x = World.mouseX;
  movablerect.y = World.mouseY;

  if(movablerect.x-fixedrect.x < movablerect.width/2 + fixedrect.width/2 &&
    fixedrect.x - movablerect.x <  movablerect.width/2 + fixedrect.width/2 &&
    movablerect.y - fixedrect.y < fixedrect.height/2 + movablerect.height/2 &&
    fixedrect.y - movablerect.y < fixedrect.height/2 + movablerect.height/2){
    fixedrect.shapeColor = "Red";
    movablerect.shapeColor = "Red";
  }
  else{
    fixedrect.shapeColor = "Green";
    movablerect.shapeColor = "Green";
  }
  drawSprites();
}