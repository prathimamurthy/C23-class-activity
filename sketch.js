const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;

var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    box1= new box(200,300,10,40);
    box2 = new box(300,300,40,60);

  //  console.log(box);
}

function draw(){
    background("white");
    Engine.update(engine);

   
    rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,20);
    
   box1.display();
   box2.display();  

    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
}