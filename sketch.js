//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world, ground);

  console.log(ground);

  var ball_op = {
    restitution: 3.0
  }

  ball = Bodies.circle(200,200,20, ball_op);
  World.add(world, ball);

}

function draw() {
  background(0); 

  Engine.update(engine);
  
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x, ground.position.y,400,20);

  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x, ball.position.y,20,20);


  
}