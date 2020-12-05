var car,wall;

var speed,weight;

var deformation;

function setup() {
  createCanvas(800,400);
car =  createSprite(150, 200, 50, 50);
wall = createSprite(700, 200, 50, 100);
speed = random(45,90);
weight = random(1500,3000);

car.velocityX = speed;
}

function draw() {
  background(255,255,255);  


  if(wall.x - car.x < wall.width/2 + car.width/2){
car.velocityX = 0;
deformation = (0.5 * weight * speed * speed)/22500;


if(deformation >180){
car.shapeColor = "red";
}

if(deformation >= 80 && deformation <=180 ){
  car.shapeColor = "yellow";
}

if(deformation < 80){
  car.shapeColor = "green";
}



  }

  drawSprites();
}