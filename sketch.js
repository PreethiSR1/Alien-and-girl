var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground,ground_image,invisible_ground;
var player,player_running,player_collided,playerImage,zombie,zombie_running,zombie_attack;
var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4;
var jumpSound,dieSound,checkpointSound;
var score;
var gameOver,restart,gameOverImage,restartImage;

function preload(){
ground_image=loadImage("scary.png");
  player_running=loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png","Run (9).png","Run (10).png","Run (11).png","Run (12).png","Run (14).png","Run (15).png","Run (16).png","Run (17).png","Run (18).png","Run (19).png","Run (20).png");
  zombie_running=loadAnimation("Walk (1).png","Walk (2).png","Walk (3).png","Walk (4).png","Walk (5).png","Walk (6).png","Walk (7).png","Walk (8).png","Walk (9).png","Walk (10).png");
  zombie_attack=loadAnimation("Attack (2).png","Attack (3).png","Attack (4).png","Attack (5).png","Attack (6).png","Attack (7).png","Attack (8).png");
  obstacle1=loadImage("obstacle1.png");
  zombie_idle=loadImage("Stand.png");
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
  gameOverImage=loadImage("gameOver1.png");
  restartImage=loadImage("restart1.png");
  player_collided=loadImage("Dead (30).png");
  playerImage=loadImage("Idle (1).png");
  //inv_ground =  loadImage("grass.png");
}

function setup() {
 createCanvas(600,500);
  
ground=createSprite(0,0,0,0);
  ground.shapeColor="white";
ground.addImage("ground_image",ground_image);
ground.scale=1.4;
   ground.velocityX=-1
  
   player=createSprite(300,420,600,10);
  player.addAnimation("player_running",player_running);
  player.addImage("player_collided",player_collided);
  player.addImage("playerImage",playerImage);
  player.scale=0.2;
 // player.velocityX=2;
  player.debug=false;
  player.setCollider("rectangle",0,0,player.width,player.height)

  
  zombie=createSprite(50,410,600,10);
  zombie.addAnimation("zombie_running",zombie_running);
  zombie.addAnimation("zombie_attack",zombie_attack);
  zombie.addImage("zombie_idle",zombie_idle);
  zombie.scale=0.2;
  zombie.debug=false;

}

function draw() {
 background("black");
  
 // console.log(player.y);
   //Gravity
player.velocityY = player.velocityY + 0.8;
player.collide(invisible_ground); 
  
   //Gravity
zombie.velocityY = zombie.velocityY + 0.8;
zombie.collide(invisible_ground); 
  
  

 
  drawSprites();
  fill("white");
  textSize(20);
   text("Score: "+ score, 500,50);
}

function reset(){
 
}

function spawnObstacles() {
   if (frameCount % 60 === 0){
   var obstacle = createSprite(600,450,10,40);
   obstacle.velocityX = -6 ;//+ score/100);
   
    //generate random obstacles
  
   }
     
}

