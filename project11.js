  var jaxon,jaxon_running;
  var path,path_ground;
  var right_invisibleground;
  var left_invisibleground;

function preload(){
  //pre-load images
  jaxon_running=loadAnimation("Runner-1.png","Runner-2.png");
  path_ground=loadAnimation("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,100,100);
  path.addAnimation("path.png",path_ground);
  path.velocityY=4;
  path.scale=1.2;

  jaxon=createSprite(200,325,10,10);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale=0.1;

  right_invisibleground=createSprite(390,200,20,400);
  right_invisibleground.visible=false;
  
  left_invisibleground=createSprite(10,200,20,400);
  left_invisibleground.visible=false;
}

function draw() {
  background("white");

  if(keyDown(LEFT_ARROW)){
      jaxon.x=jaxon.x-50;
    }

  if(keyDown(RIGHT_ARROW)){
      jaxon.x=jaxon.x+50;
    }
    
  if(path.y>400){
    path.y=height/2;
  }

  jaxon.collide(right_invisibleground);
  jaxon.collide(left_invisibleground);

  drawSprites();
}