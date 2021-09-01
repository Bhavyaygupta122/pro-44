
function start(){
    background(startImg)
    fill("yellow");
    strokeWeight(3)
    stroke("red")
    textSize(40);
    text("Hello Guys",550,200);

    text("Please Click Below to Start the game",350,250);
    text("Rules: Left arrow makes your character to move character move backward",50,350);
    text("Rules: Right arrow makes your character to move character forward",50,400);
    text("Rules: if touch any obstcale u die",50,450);
    text("Rules: click one spacebar to shoot bullets",50,500);
    stroke("cyan")
    fill("cyan")
    text("Have Fun and Enjoy My game",400,600);

    hero.visible = false;

    if(mousePressedOver(button)){
        gameState ='level1';
        button.destroy();
        hero.visible = true;
    }
    drawSprites();   
}

function level1(){
  background(backgroundImg);
  image(groundImg,0,350,5600,400);
  fill("red");
  textSize(30)
  text("Distance: " + distance,camera.position.x +500,110)

  button.visible=false

  if(keyDown("space")){
    var bullet = createBullet();
  }

  if(keyDown(RIGHT_ARROW)){
   
    hero.changeAnimation("running",heroRunning);
    if(distance < 520){
      hero.x = hero.x +10;   
      distance ++
    }

    if(distance >= 70 && distance < 470){
      camera.position.x += 10;
      
    }

  }
  
  else{
    hero.changeAnimation("standing",heroStatic)
  }
 
  if(distance === 450){
      win1 = createSprite(camera.position.x + 850,400,100,100);

  }
  spawnObstacle(150,obstacleImg);
  spawnMonster();
  drawSprites();

  if(distance > 450 && hero.isTouching(win1)){
    obstacleGroup.destroyEach();
    monsterGroup.destroyEach();
    win1.destroy()
    gameState = 'level2'
    hero.x = camera.position.x - 500;
  }
}


function level2(){
    background( level2Img);
    fill("yellow");
    textSize(34);
    text("WELCOME TO LEVEL 2",300,100);

    if(keyDown("space")){
        var bullet = createBullet();
    }
    drawSprites();
}

