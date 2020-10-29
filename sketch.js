var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rectangle1, rectangle2, rectangle3
var world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rectangle1=createSprite(400, 660, 200,20);
	rectangle1.shapeColor="red"
	rectangle1Body=Bodies.rectangle(420, 700, 200, 20, {isStatic: true})
	World.add(world, rectangle1Body)

	rectangle2=createSprite(310, 620, 20, 100);
	rectangle2.shapeColor="red"
	rectangle2Body=Bodies.rectangle(510, 620, 20, 100, {isStatic: true})
	World.add(world, rectangle2Body)

	rectangle3=createSprite(500, 620, 20, 100);
	rectangle3.shapeColor="red"
	rectangle3Body=Bodies.rectangle(680, 620, 20, 100, {isStatic: true})
	World.add(world, rectangle3Body)




	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody, false)
    
  }
}



