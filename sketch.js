var dustbin1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	strokeWeight(0);

    
    dustbin1=new dustbin(620,585,120,150);
    log1=new ground(620,650,100,5)
	log2=new ground(567,580,5,130)
	log3=new ground(670,580,5,130)
    paper1=new paper(40,580,40,40);

	ground1=new ground(400,665,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
 
  log1.display();
log2.display();
log3.display();
  ground1.display();
dustbin1.display();
paper1.display();
  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-100});
	}
}



