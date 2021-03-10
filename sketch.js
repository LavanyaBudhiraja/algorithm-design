var movingRect,fixedRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 300, 50, 50);
  movingRect.shapeColor= "green";
  movingRect.debug = true;
  movingRect.velocityY = -3;
  
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 4;

  gameObject1 = createSprite(400, 100, 20, 20);
  gameObject1.shapeColor = "yellow";

  gameObject2 = createSprite(400,100,40,40);
  gameObject2.shapeColor = "pink";
}

function draw() {
  background(0); 
 // movingRect.x = mouseX;
  //movingRect.y = mouseY;

  console.log(fixedRect.x - movingRect.x);

 // var returnedValue = isTouching();
  /*
  if (isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else if (isTouching(movingRect, gameObject1)) {
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    gameObject1.shapeColor = "yellow";
    gameObject2.shapeColor= "pink";;
  }*/

  bounceOff(fixedRect,movingRect);
  drawSprites();
}

//Function Definition


// boolean values
// A function can return a value 
//A function can accept arguments 