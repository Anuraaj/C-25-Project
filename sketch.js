
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, line1, line2, line3;

function preload()
{
  
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ground = new Ground(800,500,1600,20);
	line1 = new Box(700,480,140,15);
	line2 = new Box(635,400,15,170);
  line3 = new Box(765,400,15,170);
  line4 = createSprite(700,400,120,150);
  line4.shapeColor = ("green");
  
  line6 = createSprite(655,400,line2.width +5,line2.height);
  line6.shapeColor = ("white");
  line7 = createSprite(685,400,line2.width +5,line2.height);
  line7.shapeColor = ("white");
  line8 = createSprite(715,400,line2.width +5,line2.height);
  line8.shapeColor = ("white");
  line9 = createSprite(745,400,line2.width +5,line2.height);
  line9.shapeColor = ("white");
  paper1 = new Paper(200,50,40);

  line5 = createSprite(700,325,160,25);
  line5.shapeColor = ("green");
  
  stand = createSprite(850,400,20,600);
  Board = createSprite(850,150,100,100);
  Board.shapeColor = ("green");
  
  /*line7 = createSprite(700,400,140,25);
  line7.shapeColor = ("white");*/
  
  Engine.run(engine);
  
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightBlue");
  
  //ground.debug = true;
  //paper1.debug = true;
  
  line2.display();
  line3.display();
 

  paper1.display();
  ground.display();
  
  drawSprites();

  line1.display();
  fill("white");
  textSize(15);
  text("Green Mumbai ", 800,130);
  text("Clean Mumbai ", 800,160);
  text("M.C.G.M",820,190);
  textSize(20);
  text("Dustbin",line5.x-35,line5.y+7);
  
}

function keyPressed() 
{
 if (keyCode === RIGHT_ARROW )
  {       
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:300,y:-255}); 
  }
  if (keyCode === LEFT_ARROW )
  {       
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-300,y:-185}); 
  }
}


