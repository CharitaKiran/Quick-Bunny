var player;
var target;
var obs1;
var obs2;
var obs3;
var obs4;
var edges;




function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();

  player=createSprite(50,550,30,30);
  player.shapeColor="white"
  target=createSprite(550,50,30,30);
  target.shapeColor="orange"
  obs1=createSprite(150,350,70,30);
  obs1.shapeColor="brown"
  obs2=createSprite(50,275,70,30);
  obs2.shapeColor="brown"
  obs3=createSprite(150,220,70,30);
  obs3.shapeColor="brown"
  obs4=createSprite(50,425,70,30);
  obs4.shapeColor="brown"
  obs5=createSprite(150,550,70,30);
  obs5.shapeColor="brown"
  obs6=createSprite(50,475,70,30);
  obs6.shapeColor="brown"
  obs7=createSprite(150,420,70,30);
  obs7.shapeColor="brown"
  obs8=createSprite(50,525,70,30);
  obs8.shapeColor="brown"

}

function draw() {
  background("green");

  drawSprites();

  
}
