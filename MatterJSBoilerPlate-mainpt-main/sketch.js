
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var planoptions={
	isStatic:true
	}
var ball_options={
restitution:0.05,
friction:0.02,
frictionAir:0
}	
var block1_options={
restitution:0.7,
friction:0.03,
frictionAir:0.7
}	
var block2_options={
restitution:0.1,
friction:1,
frictionAir:0.3
}	
plano= Bodies.rectangle(600,580,1200,2,planoptions)
World.addd(world,plano)

ball = Bodies.circle(220,10,10,ball_options);
World.add(world,ball);

block1= Bodies.rectangle(110,50,10,10,block1_options)
World.addd(world,block1)

block2= Bodies.rectangle(350,50,10,10,block2_options)
World.addd(world,block2) 
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  rect(plano.position.x,plano.position.y,1200)
 ellipse(ball.position.x,ball.position.y,20)
 rect(block1.position.x)
 rect(block2.position.x,ball.position.y)
  drawSprites();
 
}



