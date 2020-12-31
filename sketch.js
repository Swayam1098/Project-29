const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block8,block9,block10, block11, block12, block13, block14, block15, block16;
var Block;


function preload()
{
	
}

function setup() {
    createCanvas(1500,750);
    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);  
    
    //top
    block16 = new Block(390,155,30,40);
    

	engine = Engine.create();
    world = engine.world

    ground1 = new Ground (750,500,1000,10)

   engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
}

function draw() {
    background("black");
block8.diplay(); 
block9.diplay();
block10.diplay();
block11.diplay();
block12.diplay();
block13.diplay();
block14.diplay();
block15.diplay();
block16.diplay();



    drawSprites();
}