const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var rope;
let engine;
let world;
var ground;
var fruit,fruit_com;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,690,600,20);
  rope = new Rope(7,{x:245,y:30});

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  fruit_com = new link(rope,fruit);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  rope.show();
  ground.show();
  ellipse(fruit.position.x , fruit.position.y,15,15)
}




