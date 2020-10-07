const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg,fs,gameState = "start", sel, ground;
var bg = "images/bluemoon.png";
var form, a1,a2,a3,a4,a1Img,a2Img,a3Img,a4Img,a1r,a2r,a3r,a4r;
var a1c,a2c,a3c,a4c, game;
var bg1,bg2,bg3,bg4;

function preload(){
    getBackgroundImg();
    a1Img = loadImage("images/player1.png");
    a2Img = loadImage("images/player2.png");
    a3Img = loadImage("images/player3.png");
    a4Img = loadImage("images/player4.png");

    a1r = loadAnimation("images/pl1r2.png","images/plr1r2.png");
    a2r1 = loadImage("images/plr2r1.png");
    a2r2 = loadImage("images/plr2r2.png");
    a3r1 = loadImage("images/plr3r1.png");
    a3r2 = loadImage("images/plr3r2.png");
    a4r1 = loadImage("images/plr4r1.png");
    a4r2 = loadImage("images/plr4r2.png");

    /*a1c = loadAnimation("images/plr1c1.png","images/plr1c2.png");
    a2c = loadAnimation("images/plr2c1.png","images/plr2c1.png");
    a3c = loadAnimation("images/plr3c1.png","images/plr3c2.png");
    a4c = loadAnimation("images/plr4c1.png","images/plr4c2.png");*/
}

function setup(){
createCanvas(displayWidth-1,displayHeight-30);
game = new Game();


form = new Form();

}

function draw(){
    if(bgImg)
    background(bgImg);
    form.display();

    if(gameState === "game1"){
      game.game1();
    }

    else if(gameState === "game2"){
       game.game2();
      
       
    }
    else if(gameState === "game3"){
        game.game3();
        
    }
    else if(gameState === "game4"){
        game.game4();

    }
   
    console.log(gameState);

    drawSprites();
}
async function getBackgroundImg() { 
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo"); 
    var responseJSON = await response.json(); 
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if(hour >= 06 && hour <= 19){
        bg = "images/bluemoon.png"
    }else{
        bg = "images/graveyard.png"
    }
    bgImg = loadImage(bg);
 }


