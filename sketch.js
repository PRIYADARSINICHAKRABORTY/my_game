var bg,bgImg;
var boy,boyImg;
var girl,girlImg;
var apple,appleImg;
var book,bookImg;
var broken_computer,broken_computerImg;
var ground,groundImg;
var broken_pencil,broken_pencilImg;
var broken_sofa, broken_sofaImg;
var capsicum,capsicumImg;
var carrot,carrotImg;
var cloth,clothImg;


function preload(){

    bgImg=loadImage("background.png");
    boyImg=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png")

    groundImg=loadImage("ground 1.jpg")
    girlImg=loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png","girl7.png","girl8.png","girl9.png","girl10.png")
 

    appleImg=loadImage("apple.png")
    bookImg=loadImage("book.png")
    broken_computerImg=loadImage("broken_computer.png")
    broken_pencilImg=loadImage("broken_pencil.png")
    broken_sofaImg=loadImage("broken-sofa.png")
    capsicumImg=loadImage("capsicum.png")
    carrotImg=loadImage("carrot.png")
    clothImg=loadImage("cloth.png")

}




 function setup()
 {
    createCanvas(400,400)
   
    bg=createSprite(165,200);
    bg.addImage(bgImg);
    bg.scale=1.5
    
    ground=createSprite(200,350);
    ground.addImage(groundImg);
    
    
   
    boy=createSprite(80,220,50,50);
    boy.addAnimation("boy_running",boyImg);


    topObstaclesGroup = new Group();
    bottomObstaclesGroup = new Group();




 }




 function draw(){

background("black")

spawnObstaclesBottom();
spawnObstaclesTop();



drawSprites();

 }



 function reset()
{
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  topObstaclesGroup.destroyEach();
  bottomObstaclesGroup.destroyEach();

  score=0;
}



 function spawnObstaclesTop() 
{
  if(World.frameCount % 60 === 0) {
    obstacleTop = createSprite(400,50,40,50);

//obstacleTop.addImage(obsTop1);

obstacleTop.scale = 0.1;
obstacleTop.velocityX = -4;

//random y positions for top obstacles
obstacleTop.y = Math.round(random(10,100));

//generate random top obstacles
var rand = Math.round(random(1,4));
switch(rand) {
  case 1: obstacleTop.addImage(appleImg);
          break;
  case 2: obstacleTop.addImage(broken_sofaImg);
          break;

  case 3: obstacleTop.addImage(capsicumImg);
          break;
case 4: obstacleTop.addImage(broken_pencilImg);
          break;

  default: break;
}

 //assign lifetime to the variable
obstacleTop.lifetime = 100;


topObstaclesGroup.add(obstacleTop);

  }
}

function spawnObstaclesBottom() 
{
      if(World.frameCount % 60 === 0) {
        obstacleBottom = createSprite(400,350,40,50);
   
    
    obstacleBottom.scale = 0.07;
    obstacleBottom.velocityX = -4;
    
    

   //generate random bottom obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacleBottom.addImage(carrotImg);
              break;
      case 2: obstacleBottom.addImage(broken_computerImg);
              break;
      case 3: obstacleBottom.addImage(clothImg);
              break;
    case 4: obstacleBottom.addImage(bookImg);
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleBottom.lifetime = 100;
    
   balloon.depth = balloon.depth + 1;

   bottomObstaclesGroup.add(obstacleBottom);
   
      }
}

 

function Score()
{
         if(balloon.isTouching(barGroup))
         {
           score = score + 1;
         }
        textFont("algerian");
        textSize(30);
        fill("yellow");
        text("Score: "+ score, 250, 50);
       
  
}
