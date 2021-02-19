
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20)

	paper = new Paper(100,650,30)

	dustbin1 = new Dustbin(400, 650, 200, 20)
	

	dustbin2 = new Dustbin(dustbin1.x-100, 585, 20, 150)
	

	dustbin3 = new Dustbin(dustbin1.x+100,585,20,150)
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}


