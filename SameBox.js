function sameBox(pawn1,pawn2){
  if(pawn1.isTouching(b5) && pawn2.isTouching(b5)){
    text("ALERT! MOVE A DIFFERENT PAWN");
    plr1X.push(pawn2.x);
    plr1Y.push(pawn2.y);

    console.log(plr1X,plr1Y);

    pawn2.x = plr1X[0];
    pawn2.y = plr1Y[0];

  }else if(pawn1.isTouching(b18) && pawn2.isTouching(18)){
    text("ALERT! MOVE A DIFFERENT PAWN");
    plr1X.push(pawn2.x);
    plr1Y.push(pawn2.y);

    console.log(plr1X,plr1Y);

    pawn2.x = plr1X[0];
    pawn2.y = plr1Y[0];

  }
}