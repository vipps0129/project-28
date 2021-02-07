const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree, treeImage;
var boy, boyImage;


var stone;
var ground1;
var Mango1, Mango2, Mango3, Mango4, Mango5, Mango6, Mango7;
var rope;

function preload() {
treeImage = loadImage("tree.png");
boyImage = loadImage("boy.png");

}

function setup() {
createCanvas(1350, 600);

tree = createSprite(1020, 330, 50, 50);
tree.addImage(treeImage);
tree.scale=0.4;

boy = createSprite(250, 510, 70, 70);
boy.addImage(boyImage
);
boy.scale=0.09;

engine = Engine.create();
world = engine.world;

ground1 = new Ground(width/2, 580, 1350, 40);

stone = new Rock(250, 300, 40);

Mango1 = new Mango(1170, 200, 30);
Mango2 = new Mango(1100, 250, 30);
Mango3 = new Mango(1090, 170, 30);
Mango4 = new Mango(930, 180, 30);
Mango5 = new Mango(1000, 200, 30);
Mango6 = new Mango(920, 300, 30);
Mango7 = new Mango(1000, 290, 30);
Mango8 = new Mango(860, 230, 30);
Mango9 = new Mango(1050, 130, 30);
Mango10 = new Mango(990, 140, 30);
Mango11 = new Mango(1200, 270, 30);
Mango12 = new Mango(950, 250, 30);

rope = new String(stone.body, {x:200, y:460});
}

function draw() {
background(0,255,155);
drawSprites();

Engine.update(engine);

detectCollision(stone, Mango1);
detectCollision(stone, Mango2);
detectCollision(stone, Mango3);
detectCollision(stone, Mango4);
detectCollision(stone, Mango5);
detectCollision(stone, Mango6);
detectCollision(stone, Mango7);
detectCollision(stone, Mango8);
detectCollision(stone, Mango9);
detectCollision(stone, Mango10);
detectCollision(stone, Mango11);
detectCollision(stone, Mango12);

ground1.display();
stone.display();
Mango1.display();
Mango2.display();
Mango3.display();
Mango4.display();
Mango5.display();
Mango6.display();
Mango7.display();
Mango8.display();
Mango9.display();
Mango10.display();
Mango11.display();
Mango12.display();

rope.display();

noStroke();

fill(color(0));


textSize(16);
text("Press SPACE for second chance", 100, 110);
}

function mouseDragged() {
Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
rope.throw();
}

function keyPressed() {
if (keyCode === 32) {
	Matter.Body.setPosition(stone.body, {x:200, y:460})
	rope.comeBack(stone.body);
}
}


function detectCollision(stone,mango){
mangoBodyPosition=mango.body.position;
stoneBodyPosition=stone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=mango.r+stone.r){
Matter.Body.setStatic(mango.body,false);	

}

}