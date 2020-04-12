const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(800,400);
  box1 = new Box(540,0,30,30);
  ground = new Ground(540,130,200,30);
  Sbox = new Sling(100,200,30,50);
  chain = new Chain(Sbox.body,{x:100,y:100});
  ground1 = new Ground(400,390,800,30);
  box2 = new Box(538,-10,30,30);
  box3 = new Box(538,4,30,30);
  box4 = new Box(543,0,30,30);
  box5 = new Box(538,-10,30,30);
  box6 = new Box(538,4,30,30);
  box7 = new Box(543,0,30,30);
}

function draw() {
  background(123,124,125);  
  Engine.update(engine);
  box1.display();
  ground.display();
  Sbox.display();
  chain.display();
  ground1.display();
  box2.display();
  box3.display();
  box4.display();  
  box5.display();
  box6.display();
  box7.display();
}

function mouseDragged(){
  Matter.Body.setPosition(Sbox.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}