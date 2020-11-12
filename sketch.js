var bullet , speed , weight
var wall,thickness

var deformation


function setup() {
  createCanvas(1400,400);
  
  thickness = Math.round(random(22,83))

  wall = createSprite(1330,200,thickness, height/2)
  wall.shapeColor = color(80,80,80)

  speed = Math.round(random(223,321))
  weight = Math.round(random(30,52))

  bullet  = createSprite(50,200,50,20)
  bullet.velocityX = speed

}

function draw() {
  background("lightblue");  
  
  carCollided()


  drawSprites();
}

function carCollided(){
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0
    damage = ((0.5*weight*speed*speed) / (thickness*thickness*thickness))

    if(damage > 10){
      wall.shapeColor = color(255,0,0)
    }
    else if(damage < 80){
      wall.shapeColor = color(0,255,0)
    }
      

    textSize(20)
    fill("black")
    text("Weight: "+ weight + " g",50,150)
    text("Speed: " + speed + " Kph",50,200)
    text("Wall thickness: " + thickness,50,250)
    text("Damage: " + damage , 50,300)
  }
}