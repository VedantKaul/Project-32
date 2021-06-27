const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  Box1 = new Box(300,275,30,40);
  console.log(Box1);
  Box2 = new Box(330,275,30,40);
  Box3 = new Box(360,275,30,40);
  Box4 = new Box(390,275,30,40);
  Box5 = new Box(420,275,30,40);
  Box6 = new Box(450,275,30,40);
  Box7 = new Box(480,275,30,40);
  Box8 = new Box(330,235,30,40);
  Box9 = new Box(360,235,30,40);
  Box10 = new Box(390,235,30,40);
  Box11 = new Box(420,235,30,40);
  Box12 = new Box(450,235,30,40);
  Box13 = new Box(360,195,30,40);
  Box14 = new Box(390,195,30,40);
  Box15 = new Box(420,195,30,40);
  Box16 = new Box(390,155,30,40);

  Box1 = new Box(640,175,30,40);
  Box2 = new Box(670,175,30,40);
  Box3 = new Box(700,175,30,40);
  Box4 = new Box(730,175,30,40);
  Box5 = new Box(760,175,30,40);
  Box6 = new Box(670,135,30,40);
  Box7 = new Box(700,135,30,40);
  Box8 = new Box(730,135,30,40);
  Box9 = new Box(700,95,30,40);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  Box1.score();
  Box2.score();
  Box3.score();
  Box4.score();
  Box5.score();
  Box6.score();
  Box7.score();
  Box8.score();
  Box9.score();

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the Boxes",100,30);
  text("Press space to retry",640,300);
  text("SCORE: "+score, 750, 40);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  fill("pink");
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();
  fill("turquoise");
  Box13.display();
  Box14.display();
  Box15.display();
  fill("grey");
  Box16.display();
  fill("skyblue");
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  fill("turquoise");
  Box6.display();
  Box7.display();
  Box8.display();
  fill("pink")
  Box9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.ball);
  }
}