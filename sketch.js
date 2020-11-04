const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var myground, box1;

var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    myground = new ground(200,400,400,6);
    box1= new box(200,300,40,40);
    box2 = new box(200,100,40,60);

  console.log(box1);
}

function draw(){
    background("white");
    Engine.update(engine);

   
   
    myground.display();
   box1.display();
   box2.display();  

    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
}