var bg, bgImg;
var player, shooterImg, shooter_shooting;
var block1,block2,block3,powerblock1,powerblock2

function preload() {

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("bg.png")

}

function setup() {
   

  createCanvas(windowWidth, windowHeight);

  //adding the background image


  //creating the player sprite
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle", 0, 0, 300, 300)
  
  block1 = createSprite(240,270,250,30)
  block2 = createSprite(1000,240,250,30) 
  block3 = createSprite(640,440,250,30) 
  powerblock1 = createSprite(10,650,100,20) 
  powerblock2 = createSprite(1320,650,100,20)   
  edges = createEdgeSprites()
}

function draw() {
  background(bgImg);

  console.log(player.y)
  player.collide(block1)
  player.collide(block2)
  player.collide(block3)

  //moving the player up and down and making the game mobile compatible using touches
  if(player.collide(powerblock1)||player.collide(powerblock2)){
    player.velocityY =-23
  }


  //release bullets and change the image of shooter to shooting position when space is pressed
  if (keyWentDown("space") && player.y > 250) {

    player.addImage(shooter_shooting)
    player.velocityY = -10
  }
  if(keyDown("left")){
    player.x -=5
  }
  if(keyDown("right")){
    player.x +=5
  }
  //player goes back to original standing image once we stop pressing the space bar
  //if (keyWentUp("space")) {
    //player.addImage(shooterImg)
  //}
  player.velocityY += 0.5
  player.collide(edges[3])
  player.collide(edges[0])
  player.collide(edges[1])
  drawSprites();
  text("X: "+mouseX+"Y : "+mouseY,mouseX,mouseY)
}