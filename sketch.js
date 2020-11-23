const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var bob;
var chain1;

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,700,50,50);
    box2 = new Box(700,650,50,50);
    box3 = new Box(700,600,50,50);
    box4 = new Box(700,550,50,50);
    box5 = new Box(700,500,50,50);
    box6 = new Box(700,450,50,50);
    box7 = new Box(700,400,50,50);
    box8 = new Box(700,350,50,50);
    box9 = new Box(700,300,50,50);
    box10 = new Box(700,250,50,50);
    box11 = new Box(700,200,50,50);
    box12 = new Box(700,150,50,50);
    ground = new Ground(500,height,1000,20);
    var options = {
    restitution:0.5,
    density:2
    }
    bob = Bodies.circle(500,400,25,options)
    World.add(world,bob);
    chain1 = new Chain(bob.body,{x:500,y:100})
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ground.display();
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,25,25)
    chain1.display();
}