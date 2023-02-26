var car, road, skull;
var carImg, roadImg, coinImg, skullImg;
var score = 0;

function preload(){
    carImg = loadImage("carImg");
    roadImg = loadImage("roadImg");
    coinImg = loadImage("coinImg");
    skullImg = loadImage("skullImg");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    //create road

    road = createSprite(width/2,200);
    road.addImage(roadImg);
    road.velocityY = 4;

    //create car

    car = createSprite();
    car.addImage(carImg);
    car.veloctyY = 4;

    //create coins group

    coinGroup = new Group();

    //create skull group

    skullGroup = new Group();


}

function draw() {
 if(keyDown("space")){

 }

//code the road to reset
  
 if(road.y > height ){
    road.y = height/2;
    }

 if (World.frameCount % 60 == 0) {
    var coin = createSprite((Math.round(random(50, width-50),40, 10, 10)));
    coin.addImage(carImg);
    coin.scale=0.12;
    coin.velocityY = 5;
    coin.lifetime = 200;
    coinGroup.add(coin);
    }

if (World.frameCount % 60 == 0) {
    var skull = createSprite((Math.round(random(50, width-50),40, 10, 10)));
    skull.addImage(skullImg);
    skull.scale=0.12;
    skull.velocityY = 5;
    skull.lifetime = 200;
    skullGroup.add(skull);
    }

if (car.isTouching(skull)){
    background("black");
    car.destroy();
    coinGroup.destroyEach();
    skullGroup.destroyEach();
}

if (car.isTouching(coin)){
    score = score + 20;
}

textSize(20);
text("Score: "+ score,width-150,30);
}
