class Form {

  constructor() {
    this.instruction = createElement('h3');
    this.title = createElement('h2');
    this.fullscreen = createButton('fullscreen')
    this.image1 = loadImage("images/player1.png");
    this.image2 = loadImage("images/player2.png");
    this.image3 = loadImage("images/player3.png");
    this.image4 = loadImage("images/player4.png");
    this.choice1 = createButton('Choose this');
    this.choice2 = createButton('Choose this');
    this.choice3 = createButton('Choose this');
    this.choice4 = createButton('Choose this');
  }
  hide(){
    this.instruction.hide();
    this.title.hide();
    this.image1.hide();
    this.choice1.hide();
    this.choice2.hide();
    this.choice3.hide();
    this.choice4.hide();

  }

  display(){
    this.title.html("Assassin's Slash");
    this.title.position(displayWidth/2 - 50, 0);

    this.instruction.html("Pick an Assassin then press play when ready");
    this.instruction.position(displayWidth/2 - 150, 50);

    this.fullscreen.position(displayWidth-1500,30);

    this.choice1.position(280,570);
    this.choice2.position(600,570);
    this.choice3.position(960,570);
    this.choice4.position(1330,570);

    if(gameState === "start"){
    image(this.image1,50,-30,500,650);
    image(this.image2,500,130,250,400);
    image(this.image3,850,150,300,400);
    image(this.image4,1200,150,300,400);
    
    
    if(mouseX < 400 && mouseY < 500 && mouseX > 200 && mouseY > 100){
      image(this.image1,-50,-130,700,800);
    }
   if(mouseX < 700 && mouseY < 500 && mouseX > 500 && mouseY > 100){
      image(this.image2,450,100,350,500);
    }
   if(mouseX < 1150 && mouseY < 500 && mouseX > 850 && mouseY > 100){
    image(this.image3,800,100,400,500);
   }
   if(mouseX < 1450 && mouseY < 500 && mouseX > 1300 && mouseY > 100){
    image(this.image4,1150,100,400,500);
   }
  }
    this.choice1.mousePressed(()=>{
      this.title.hide();
      this.instruction.hide();
      this.choice1.hide();
      this.choice2.hide();
      this.choice3.hide();
      this.choice4.hide();
      gameState = "game1";
    })

    this.choice2.mousePressed(()=>{
      this.title.hide();
      this.instruction.hide();
      this.choice1.hide();
      this.choice2.hide();
      this.choice3.hide();
      this.choice4.hide();
      gameState = "game2";
    })

    this.choice3.mousePressed(()=>{
      this.title.hide();
      this.instruction.hide();
      this.choice1.hide();
      this.choice2.hide();
      this.choice3.hide();
      this.choice4.hide();
      gameState = "game3";
    })

    this.choice4.mousePressed(()=>{
      this.title.hide();
      this.instruction.hide();
      this.choice1.hide();
      this.choice2.hide();
      this.choice3.hide();
      this.choice4.hide();
      gameState = "game4";
    })

    this.fullscreen.mousePressed(()=>{
      fs = fullscreen();
    fullscreen(!fs);
    });
  }
}
