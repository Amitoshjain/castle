const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var Ground;
var engine, world;

var lRect,rRect;
var lsSquare,rsSquare;
var lmSquare,rmSquare;
var llSquare,rlSquare;

var lsTriangle, lmTriangle, lTriangle,rsTriangle,rmTriangle;
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  Ground = new ground(400,590,800,20);

  lRect = new rectangle(90,360);
  lsSquare = new smallSquare(150,510);
  lmSquare = new mediumSquare(250,460);
  llSquare = new largeSquare(350,420);

  rlSquare = new largeSquare(450,420);
  rmSquare = new mediumSquare(550,460);
  rsSquare = new smallSquare(650,510);
  rRect = new rectangle(710,360);
 
 
  
}

function draw() {
  background("black"); 
  Engine.update(engine);

  Ground.display();
  lsTriangle = triangle(90,500,210,500,150,390);
  lmTriangle = triangle(200,380,300,380,250,280);
  lTriangle  = triangle(300,280,500,280,400,150);
  rmTriangle = triangle(500,380,600,380,550,280);
  rsTriangle = triangle(590,500,710,500,650,390);

  lsSquare.display();
  lRect.display (); 
  lmSquare.display ();
  llSquare.display ();
  
  rlSquare.display ();
  rmSquare.display ();
  rsSquare.display ();
  rRect.display (); 

  drawSprites();
}