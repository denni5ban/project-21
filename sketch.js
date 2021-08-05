var ball;
var ground, leftSide, rightSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ground = new Ground(400,690,800,20);
	rightSide = new Ground(500, 625,20,200);
	leftSide = new Ground(700,625,20,200);

	ball = Bodies.circle(100,50,20,ball_options);

	World.add(world, ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 20);

	ground.show();
	rightSide.show();
	leftSide.show();

  keyPressed();

  drawSprites();
 
}

function keyPressed () {
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:45, y:50});
		console.log("HELLO");
	}
	console.log("HELLO1");
}

