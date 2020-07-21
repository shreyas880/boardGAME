class Player{
    constructor(x,y,playerColor){
      this.pawn1 = createSprite(x-25,y-25,25,25)
      this.pawn1.shapeColor = playerColor;

      this.pawn2 = createSprite(x+25,y+25,25,25);      
      this.pawn2.shapeColor = playerColor;

      this.pawn3 = createSprite(x-25,y+25,25,25);
      this.pawn3.shapeColor = playerColor;

      this.pawn4 = createSprite(x+25,y-25,25,25);      
      this.pawn4.shapeColor = playerColor;

      this.hasKilled = false;
    }
    moveForward(pawn){
        if(pawn.isTouching(b5) || pawn.isTouching(b16) || pawn.isTouching(b17) || pawn.isTouching(b18)){
          pawn.x += 100;
        }else if(pawn.isTouching(b19) || pawn.isTouching(b11) || pawn.isTouching(b13) || pawn.isTouching(b14)){
          pawn.y -= 110;
        }else if(pawn.isTouching(b6) || pawn.isTouching(b7) || pawn.isTouching(b8) || pawn.isTouching(b9)){
          pawn.x -= 110;
        }else{
          pawn.y += 110;
        }
        
        if(pawn.isTouching(b16) && rand === 1){
          pawn.x -= 110;
        }else if(pawn.isTouching(b5) && rand === 2){
          pawn.x = b26.x;
          pawn.y = b26.y;
        }

      }


      checkKill(pawn,player,box){
        console.log("Check kill");

              console.log(pawn.isTouching(box));

              console.log(player.pawn1.isTouching(box) || player.pawn2.isTouching(box) || player.pawn3.isTouching(box) || player.pawn4.isTouching(box));
        if(pawn.isTouching(box) && (player.pawn1.isTouching(box) || player.pawn2.isTouching(box) || player.pawn3.isTouching(box) || player.pawn4.isTouching(box))){
          console.log("Kill is true");
          return true;
        }else {
          console.log("kill is false");
          playerTurn += 0.45;
          console.log(playerTurn);
          if(playerTurn === 5){
            playerTurn = 1;
          }else if(playerTurn === 6){
            playerTurn = 2;
          }else if(playerTurn === 7){
            playerTurn = 3;
          }else if(playerTurn === 8){
            playerTurn = 4;
          }
          console.log("PLAYERS TURN IS");
          console.log(playerTurn);
        }
      }
}