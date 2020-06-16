const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	paper = new Paper(200,200,70);
	dustbinObj=new dustbin(700,380);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
  dustbinObj.display();
  drawSprites();
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-75});

	}
}



