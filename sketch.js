//1 = include matter.js(physics engine library) in index.html
//2 = namespacing = give short forms to long names 
const Engine = Matter.Engine;//helps create a physics engine
const World= Matter.World;//helps create a physics world
const Bodies = Matter.Bodies;//helps create bodies that can be added to physics world

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    //3 = create physics engine and the world
    engine = Engine.create();
    world = engine.world;
//make the ground static(should not fall due to gravity)
    var ground_options ={
        isStatic: true
    }
//4 = create the body with options and add it to the world
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
//make the ball bounce
var ball_options = {
    restitution:1
}
//create the ball with options and add to the world
ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    //5 = display the bodies
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y, 20,20)
}