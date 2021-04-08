var wall, bullet;
var speed,weight;

function setup() {

  createCanvas(1600,400);

  bullet = createSprite(250, 200, 50, 50);
  bullet.shapeColor = "yellow";

  wall = createSprite(1200,200, 10, height/2);
  wall.shapeColor = "white";

  speed = random(50,250);
  weight = random(400,1500);

  bullet.velocityX = speed;

}

function draw() {
  background("pink");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;

  if(deformation>180)
  {
    bullet.shapeColor = "white";
  }

  if(deformation<180 && deformation>100)
  {
    bullet.shapeColor = ("yellow");
  }

  if(deformation<100);
  {
  bullet.shapeColor = ("red")
  }

  }
  drawSprites();
}