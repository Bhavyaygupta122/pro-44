var hero,hero1;
var ground,invisibleGround;
var obstacle,monster,GunBullet,snowMan;;
var gameState = "level1",distance=0;
var button;
var win1;

function preload(){
  loadImages();
}

function setup(){
  createCanvas(1400,700)

  hero = createSprite(150,490,30,30);
  hero.addAnimation("standing",heroStatic);
  hero.addAnimation("running",heroRunning);
  hero.addAnimation("backward",heroBackward);
  hero.scale = 0.8

  button = createSprite(700,290,20,20);
  button.addImage(buttonImg);
  button.scale = 0.15;

  invisibleGround = createSprite(700,625,1400,20);
  invisibleGround.visible =false;

  monsterGroup = new Group();
  obstacleGroup = new Group();

}

function draw(){
  if(gameState === 'start' ){ 
    start();
  }
  else if(gameState === 'level1'){
    level1();
  } 
  else if(gameState === 'level2'){
    
    level2();
  }

  if(keyDown(UP_ARROW)&& hero.y>480){
    hero.velocityY = -20;
  }

  hero.velocityY = hero.velocityY+0.9;
  hero.collide(invisibleGround);
  invisibleGround.x = camera.position.x;
  console.log(hero.y);
}

function spawnObstacle(frequency,imageName){
  if(frameCount % frequency === 0){
    var obstacle = createSprite(camera.position.x+750,520,20,20);
    obstacle.addImage(imageName);
    obstacle.scale = 0.3;
    obstacleGroup.add(obstacle);
    //console.log(hero.x);
  }
}


function spawnMonster(){
  if(frameCount % 100===0){
    var monster= createSprite(camera.position.x+750,520,60,60);
    monster.addAnimation("MONSTER",monsterAni);
    monster.velocityX = -(7+2*distance/650);
    monster.scale = 1.4;
    monsterGroup.add(monster);
    //console.log(hero.x);

  }
}

function createBullet(){
  var bullet = createSprite(hero.x+100,hero.y-30,5,10);
  bullet.velocityX = 15;
  bullet.scale=0.1
  bullet.addImage(bulletImg);
}




