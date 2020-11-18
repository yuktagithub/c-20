var movingRect
var fixedRect



function setup() {

  createCanvas(800,400);
movingRect= createSprite(400, 200, 50, 50);
movingRect.velocityX=-3
fixedRect= createSprite(200,200,50,50);
fixedRect.velocityX=3

movingRect.shapeColor="blue"
fixedRect.shapeColor="red"
}



function draw() {
  background(255,255,255);  

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){

movingRect.velocityX=movingRect.velocityX*-1
fixedRect.velocityX=fixedRect.velocityX*-1

  }

  if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  
  movingRect.velocityY=movingRect.velocityY*-1
  fixedRect.velocityY=fixedRect.velocityY*-1
  
    }
  


  drawSprites();

}