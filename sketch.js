var ship, ship_sailing, edges;
var seaImage;
var sea,ship;
function preload(){
 
  
}

function setup(){
  createCanvas(900,900);  
  ship = createSprite(400,300,100,100);
  edges = createEdgeSprites();
}

function draw(){

 background("lightblue");
  
  ship.collide(edges)

  ship.scale = 0.4
  drawSprites();
}