class Game{
    constructor(){

    }

    game1(){
        
     textSize(15);
     fill("black");
     text("Change Character",displayWidth - 1500,70);
    
     sel = createSelect();
     sel.position(displayWidth-1500,80)
     sel.option('player 1');
     sel.option('player 2');
     sel.option('player 3');
     sel.option('player 4');
    
     animation(a1r,200,650);

     if (frameCount % 100 === 0) {
        bg1 = createSprite(1500,650,10,10);
        bg1.shapeColor = "black";
        bg1.velocityX = -5; 
        bg1.visible = true;
        /*var rand = Math.round(random(1,5));
        switch(rand){
            case 1:
            break;
            case 2:
            break;
            case 3: 
            break;
            case 4: 
            break;
            case 5:
            break;
        }*/
    }


    }

    game2(){

        textSize(15);
        fill("black");
        text("Change Character",displayWidth - 1500,70);

        sel = createSelect();
        sel.position(displayWidth-1500,80)
        sel.option('player 1');
        sel.option('player 2');
        sel.option('player 3');
        sel.option('player 4');
        
        a2 = createSprite(200,650,10,10);

        if(frameCount%5 === 0){
          a2.addImage(a2r1);
          a2.lifeTime = 1;
        }else{
            a2.addImage(a2r2);
            a2.lifeTime = 1; 
        }

        /*if(frameCount%2 === 0){
            a2.visible = true;
            a2.addImage(a2r2);
            a2.lifeTime = 1; 
        }*/

        if (frameCount % 100 === 0) {
            bg2 = createSprite(1500,650,10,10);
            bg2.shapeColor = "black";
            bg2.velocityX = -5; 
            bg2.visible = true;
            /*var rand = Math.round(random(1,5));
            switch(rand){
                case 1:
                break;
                case 2:
                break;
                case 3: 
                break;
                case 4: 
                break;
                case 5:
                break;
            }*/
        }

    }

    game3(){

    textSize(15);
        fill("black");
        text("Change Character",displayWidth - 1500,70);

        sel = createSelect();
        sel.position(displayWidth-1500,80)
        sel.option('player 1');
        sel.option('player 2');
        sel.option('player 3');
        sel.option('player 4');

        a3 = createSprite(200,650,10,10);
        if(frameCount%3 === 0){
          a3.addImage(a3r1);
          a3.lifeTime = 1;
        }
        if(frameCount%6 === 0){
            a3.addImage(a3r2);
            a3.lifeTime = 1;
        }

        if (frameCount % 100 === 0) {
            bg3 = createSprite(1500,650,10,10);
            bg3.shapeColor = "black";
            bg3.velocityX = -5; 
            bg3.visible = true;
            /*var rand = Math.round(random(1,5));
            switch(rand){
                case 1:
                break;
                case 2:
                break;
                case 3: 
                break;
                case 4: 
                break;
                case 5:
                break;
            }*/
        }

    }

    game4(){

        textSize(15);
        fill("black");
        text("Change Character",displayWidth - 1500,70);

        sel = createSelect();
        sel.position(displayWidth-1500,80)
        sel.option('player 1');
        sel.option('player 2');
        sel.option('player 3');
        sel.option('player 4');

        a4 = createSprite(200,650,10,10);
        if(frameCount%3 === 0){
          a4.addImage(a4r1);
          a4.lifeTime = 1;
        }
        if(frameCount%6 === 0){
            a4.addImage(a4r2);
            a4.lifeTime = 1;
        }

        if (frameCount % 100 === 0) {
            bg4 = createSprite(1500,650,10,10);
            bg4.shapeColor = "black";
            bg4.velocityX = -5; 
            bg4.visible = true;
            /*var rand = Math.round(random(1,5));
            switch(rand){
                case 1:
                break;
                case 2:
                break;
                case 3: 
                break;
                case 4: 
                break;
                case 5:
                break;
            }*/
        }
    }
}