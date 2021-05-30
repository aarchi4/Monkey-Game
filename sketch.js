
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0
function preload(){

  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas (600,600);
   obstacleGroup = createGroup();
  foodGroup = createGroup();
  
  monkey = createSprite(50,200,10,10)
  monkey.addAnimation ("running",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(90, 325, 1800, 10);
  ground.velocityX = -5;
  ground.x = ground.width / 2;
  
  
}


function draw() {
createCanvas (600,500);
  background("green");
  
   
  score = score + Math.round(getFrameRate()/60);
 if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -13; 
    }
  
   monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
  
 if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

  
  
  if (monkey.isTouching(foodGroup)){        
      foodGroup.destroyEach(); 
  }
  
  
  
  
  
  
  survivalTime = survivalTime + Math.round(getFrameRate()/62.5);
  
  fill("white  ");
  textSize(20);
  text("Survival Time: " + survivalTime, 300, 50);

 obstacles();
    foods();
  
  drawSprites();
}








function foods(){
  if (frameCount%80 === 0){
    
    food= createSprite(620,120, 50, 50 )
    food.addAnimation("banana", bananaImage);
    food.scale = 0.1;
    food.velocityX =-4           
    food.lifetime = 220;
    foodGroup.add(food);
    
  }
    }

function obstacles(){
  if (frameCount%200 === 0){
    
    obstacle = createSprite(620,290,50,50);
    obstacle.addAnimation("obstacle", obstacleImage);
    obstacle.setCollider("circle", 0, 0, 180);
    obstacle.scale = 0.20 ;
    obstacle.velocityX =-4;
    obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
    
  }
  
  
}


