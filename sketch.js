var carrot , carrotImage;
var rabbit , rabbitImage;
var redbird , redbirdImage;
var bird , birdImage;

function preload(){
  carrotImage = loadImage("assets/goldencarrot.png");
  rabbitImage = loadAnimation("assets/r1.png" , "assets/r2.png" , "assets/r3.png" , "assets/r4.png" , "assets/r5.png" , "assets/r6.png");
  redbirdImage = loadAnimation("assets/rb1.png" , "assets/rb2.png" , "assets/rb3.png");
  birdImage = loadAnimation("assets/b1.png" , "assets/b2.png" , "assets/b3.png"  , "assets/b4.png");
}
function setup() {
  createCanvas(800,800);
  carrot = createSprite(400, 200, 50, 50);
  carrot.addImage(carrotImage);
  carrot.scale= 0.15;
  rabbit = createSprite(200 , 200);
  rabbit.addAnimation("running" , rabbitImage);
  rabbit.scale=1.2;
  redbird = createSprite(400 ,400) ; 
  redbird.addAnimation("flying" , redbirdImage);
  bird = createSprite(200 ,400) ; 
  bird.addAnimation("flying" , birdImage);
}

function draw() {
  background("skyblue");  
  drawSprites();
}