
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,300);
  
  monkey = createSprite(35,240);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.10;
  
  ground = createSprite(0,275,1200,10);
  
  invisibleGround = createSprite(0,275,1200,10);
  invisibleGround.visible = false;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {

  background(220);
  
  ground.velocityX = -4;
  
  if(ground.x <0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y>=150) {
    monkey.velocityY = -8;
  }
  
  monkey.velocityY = monkey.velocityY + 0.9
   
  monkey.collide(invisibleGround)
  
  if(monkey.isTouching(bananaGroup)){
    
    bananaGroup.destroyEach();
    score = score+1;
    
  }
  
  if(monkey.isTouching(obstacleGroup)){
    
    monkey.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
        text("GAME OVER",300,150);

    
  }
  
  text("score:"+score,550,20)
  
  spawnObstacles();
  spawnBananas();
  
  
  drawSprites();
  
}

function spawnObstacles() {
  
  if(frameCount % 110 === 0) {
    
    var obstacle = createSprite(600,242,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.15;
    
    obstacleGroup.add(obstacle);
  }
  
} 

function spawnBananas() {
  
  if(frameCount % 110 === 0) {
    var banana = createSprite(600,170,20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.10;
    
    bananaGroup.add(banana);
    
  }
  
}



