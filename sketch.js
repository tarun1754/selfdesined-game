var plane,ground
var bulletGroup,shipGroup;
var bullet,ship,plane;
var shipImage1,shipImage2,shipImage3,planeImage,bulletImage;
var shipArray=[];
var bg;
var score=0;
var x=0,y=0;
var flag=9;
function preload(){
    bg=loadImage("images/bg1.png");
    planeImage=loadImage("images/plane.png");
    shipImage1=loadImage("images/ship2.png");
    shipImage2=loadImage("images/ship3.png");
    shipImage3=loadImage("images/ship4.png");
    bulletImage=loadImage("images/bullet3.png");
}
function setup(){
    var canvas = createCanvas(displayWidth-100,displayHeight-100);
    
    ground = createSprite(displayWidth/2,displayHeight-100,displayWidth,20)

    plane=createSprite(1350,350,200,200);
    plane.addImage(planeImage);
    bulletGroup =  new Group();
    shipGroup=new Group();
  
}

function draw(){
    background(bg);
    textSize(30);
    strokeWeight(7);
    stroke("black");
    text("score:"+score,displayWidth/15,displayHeight/15);
    
    spawnShips();

    if(keyDown('space')){
        spawnBullets(plane.x-100,plane.y,-6,0);
    }
    if(keyDown('Down_ARROW')){
        plane.velocityY=3;
    }
    if(keyDown('Left_ARROW')){
        plane.velocityY=0;
    }
    if(keyDown('Up_ARROW')){
        plane.velocityY=-3;
    }
   /* if(bulletGroup.isTouching(shipGroup)){
        shipGroup.destroyEach();
        score=score+1;
    }*/

    for(var s in shipArray){
        if(bulletGroup.isTouching(shipArray[s])){
            shipArray[s].visible=false;
            score=score+1;
            bulletGroup.destroyEach();
        }
    }
    if(bulletGroup.isTouching(plane)){
        score=score-2
    }
    spawnShips();
    drawSprites();
}




    function spawnBullets(x,y,velX,velY){
        if(frameCount%50===0){
            bullet = createSprite(x,y,1,1);
            bullet.addImage(bulletImage);
            bullet.velocityX = velX;
            bullet.velocityY = velY;
            bullet.scale=0.3;
            bullet.lifetime=600;
            bulletGroup.add(bullet);
        }
    }
    function spawnshipBullets(x,y,velX,velY){
        if(frameCount%50===0){
            bullet = createSprite(x,y,1,1);
            bullet.addImage(bulletImage);
            bullet.velocityX = velX;
            bullet.velocityY = velY;
            bullet.scale=0.3;
            bullet.lifetime=600;
            bulletGroup.add(bullet);
        }
    }
    function spawnShips(){
        if(frameCount%150===0){
            ship=createSprite(100,100);
            ship.y=Math.round(random(0,450));
           // ship.addImage(shipImage);
           // ship.scale=2;
            ship.velocityX=Math.round(random(5,frameCount/100));
            ship.lifetime=600;
            ship.depth=plane.depth;
            var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: ship.addImage(shipImage1);
              break;
      case 2: ship.addImage(shipImage2);
              break;
      case 3: ship.addImage(shipImage3);
              break;
      default: break;
    }
            plane.depth=plane.depth+1;
            //shipGroup.add(ship);
            shipArray.push(ship);
             
            spawnshipBullets(ship.x+100,ship.y+100,15,0);
            
            
        }
    }
    


