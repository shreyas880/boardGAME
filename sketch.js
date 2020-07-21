var pawn1,pawn2,pawn3,pawn4;
var cross1,cross2;
var cross3,cross4;
var cross5,cross6;
var cross7,cross8;
var rand;
var plr1X,plrY;
var playerTurn;

function setup(){
  createCanvas(windowWidth,windowHeight);

  rand = floor(random(1,8));
  console.log(rand);
  
  pawn1 = createButton('PAWN 1');
  pawn1.position(800,200);

  pawn2 = createButton('PAWN 2');
  pawn2.position(900,200);

  pawn3 = createButton('PAWN 3');
  pawn3.position(800,300);

  pawn4 = createButton('PAWN 4');
  pawn4.position(900,300);

  playerTurn = 1;




  createBoard();

  plr1 = new Player(410,500,"green");


  //console.log(plr1.shapeColor);

  plr2 = new Player(410,60,"red");
  
  plr3 = new Player(630,390,"yellow");

  plr4 = new Player(190,280,"blue");

    
}
function draw(){
  background(255);

  fill(255,0,0);
  textSize(42);



  text(playerTurn,900,100);

  
  pawn1.mousePressed(() => {
    
    rand = floor(random(1,8));
    console.log(rand);

    if(rand === 1){
      plr1.moveForward(plr1.pawn1);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);

      plr1.checkKill(plr1.pawn1,plr3,b11);
      plr1.checkKill(plr1.pawn1,plr2,b11);
      plr1.checkKill(plr1.pawn1,plr4,b11);
      
      plr1.checkKill(plr1.pawn1,plr3,b1);
      plr1.checkKill(plr1.pawn1,plr2,b1);
      plr1.checkKill(plr1.pawn1,plr4,b1);

      plr1.checkKill(plr1.pawn1,plr3,b2);
      plr1.checkKill(plr1.pawn1,plr2,b2);
      plr1.checkKill(plr1.pawn1,plr4,b2);
      
      plr1.checkKill(plr1.pawn1,plr3,b4);
      plr1.checkKill(plr1.pawn1,plr2,b4);
      plr1.checkKill(plr1.pawn1,plr4,b4);
      
      plr1.checkKill(plr1.pawn1,plr3,b5);
      plr1.checkKill(plr1.pawn1,plr2,b5);
      plr1.checkKill(plr1.pawn1,plr4,b5);

      plr1.checkKill(plr1.pawn1,plr3,b6);
      plr1.checkKill(plr1.pawn1,plr2,b6);
      plr1.checkKill(plr1.pawn1,plr4,b6);

      plr1.checkKill(plr1.pawn1,plr3,b8);
      plr1.checkKill(plr1.pawn1,plr2,b8);
      plr1.checkKill(plr1.pawn1,plr4,b8);
      
      plr1.checkKill(plr1.pawn1,plr3,b9);
      plr1.checkKill(plr1.pawn1,plr2,b9);
      plr1.checkKill(plr1.pawn1,plr4,b9);

      plr1.checkKill(plr1.pawn1,plr3,b10);
      plr1.checkKill(plr1.pawn1,plr2,b10);
      plr1.checkKill(plr1.pawn1,plr4,b10);
      
      plr1.checkKill(plr1.pawn1,plr3,b12);
      plr1.checkKill(plr1.pawn1,plr2,b12);
      plr1.checkKill(plr1.pawn1,plr4,b12);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);
      
      plr1.checkKill(plr1.pawn1,plr3,b15);
      plr1.checkKill(plr1.pawn1,plr2,b15);
      plr1.checkKill(plr1.pawn1,plr4,b15);
      
      plr1.checkKill(plr1.pawn1,plr3,b16);
      plr1.checkKill(plr1.pawn1,plr2,b16);
      plr1.checkKill(plr1.pawn1,plr4,b16);

      plr1.checkKill(plr1.pawn1,plr3,b18);
      plr1.checkKill(plr1.pawn1,plr2,b18);
      plr1.checkKill(plr1.pawn1,plr4,b18);

      plr1.checkKill(plr1.pawn1,plr3,b19);
      plr1.checkKill(plr1.pawn1,plr2,b19);
      plr1.checkKill(plr1.pawn1,plr4,b19);

      plr1.checkKill(plr1.pawn1,plr3,b20);
      plr1.checkKill(plr1.pawn1,plr2,b20);
      plr1.checkKill(plr1.pawn1,plr4,b20);

      plr1.checkKill(plr1.pawn1,plr3,b21);
      plr1.checkKill(plr1.pawn1,plr2,b21);
      plr1.checkKill(plr1.pawn1,plr4,b21);
      
      plr1.checkKill(plr1.pawn1,plr3,b22);
      plr1.checkKill(plr1.pawn1,plr2,b22);
      plr1.checkKill(plr1.pawn1,plr4,b22);

      plr1.checkKill(plr1.pawn1,plr3,b23);
      plr1.checkKill(plr1.pawn1,plr2,b23);
      plr1.checkKill(plr1.pawn1,plr4,b23);
      
      plr1.checkKill(plr1.pawn1,plr3,b24);
      plr1.checkKill(plr1.pawn1,plr2,b24);
      plr1.checkKill(plr1.pawn1,plr4,b24);
      
      plr1.checkKill(plr1.pawn1,plr3,b25);
      plr1.checkKill(plr1.pawn1,plr2,b25);
      plr1.checkKill(plr1.pawn1,plr4,b25);

      plr1.checkKill(plr1.pawn1,plr3,b26);
      plr1.checkKill(plr1.pawn1,plr2,b26);
      plr1.checkKill(plr1.pawn1,plr4,b26);

      plr1.checkKill(plr1.pawn1,plr3,b28);
      plr1.checkKill(plr1.pawn1,plr2,b28);
      plr1.checkKill(plr1.pawn1,plr4,b28);
      
      plr1.checkKill(plr1.pawn1,plr2,b27);
      plr1.checkKill(plr1.pawn1,plr3,b27);
      plr1.checkKill(plr1.pawn1,plr4,b27);      

    }else if(rand === 2){
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      
      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);

      plr1.checkKill(plr1.pawn1,plr3,b11);
      plr1.checkKill(plr1.pawn1,plr2,b11);
      plr1.checkKill(plr1.pawn1,plr4,b11);
      
      plr1.checkKill(plr1.pawn1,plr3,b1);
      plr1.checkKill(plr1.pawn1,plr2,b1);
      plr1.checkKill(plr1.pawn1,plr4,b1);

      plr1.checkKill(plr1.pawn1,plr3,b2);
      plr1.checkKill(plr1.pawn1,plr2,b2);
      plr1.checkKill(plr1.pawn1,plr4,b2);
      
      plr1.checkKill(plr1.pawn1,plr3,b4);
      plr1.checkKill(plr1.pawn1,plr2,b4);
      plr1.checkKill(plr1.pawn1,plr4,b4);
      
      plr1.checkKill(plr1.pawn1,plr3,b5);
      plr1.checkKill(plr1.pawn1,plr2,b5);
      plr1.checkKill(plr1.pawn1,plr4,b5);

      plr1.checkKill(plr1.pawn1,plr3,b6);
      plr1.checkKill(plr1.pawn1,plr2,b6);
      plr1.checkKill(plr1.pawn1,plr4,b6);

      plr1.checkKill(plr1.pawn1,plr3,b8);
      plr1.checkKill(plr1.pawn1,plr2,b8);
      plr1.checkKill(plr1.pawn1,plr4,b8);
      
      plr1.checkKill(plr1.pawn1,plr3,b9);
      plr1.checkKill(plr1.pawn1,plr2,b9);
      plr1.checkKill(plr1.pawn1,plr4,b9);

      plr1.checkKill(plr1.pawn1,plr3,b10);
      plr1.checkKill(plr1.pawn1,plr2,b10);
      plr1.checkKill(plr1.pawn1,plr4,b10);
      
      plr1.checkKill(plr1.pawn1,plr3,b12);
      plr1.checkKill(plr1.pawn1,plr2,b12);
      plr1.checkKill(plr1.pawn1,plr4,b12);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);
      
      plr1.checkKill(plr1.pawn1,plr3,b15);
      plr1.checkKill(plr1.pawn1,plr2,b15);
      plr1.checkKill(plr1.pawn1,plr4,b15);
      
      plr1.checkKill(plr1.pawn1,plr3,b16);
      plr1.checkKill(plr1.pawn1,plr2,b16);
      plr1.checkKill(plr1.pawn1,plr4,b16);

      plr1.checkKill(plr1.pawn1,plr3,b18);
      plr1.checkKill(plr1.pawn1,plr2,b18);
      plr1.checkKill(plr1.pawn1,plr4,b18);

      plr1.checkKill(plr1.pawn1,plr3,b19);
      plr1.checkKill(plr1.pawn1,plr2,b19);
      plr1.checkKill(plr1.pawn1,plr4,b19);

      plr1.checkKill(plr1.pawn1,plr3,b20);
      plr1.checkKill(plr1.pawn1,plr2,b20);
      plr1.checkKill(plr1.pawn1,plr4,b20);

      plr1.checkKill(plr1.pawn1,plr3,b21);
      plr1.checkKill(plr1.pawn1,plr2,b21);
      plr1.checkKill(plr1.pawn1,plr4,b21);
      
      plr1.checkKill(plr1.pawn1,plr3,b22);
      plr1.checkKill(plr1.pawn1,plr2,b22);
      plr1.checkKill(plr1.pawn1,plr4,b22);

      plr1.checkKill(plr1.pawn1,plr3,b23);
      plr1.checkKill(plr1.pawn1,plr2,b23);
      plr1.checkKill(plr1.pawn1,plr4,b23);
      
      plr1.checkKill(plr1.pawn1,plr3,b24);
      plr1.checkKill(plr1.pawn1,plr2,b24);
      plr1.checkKill(plr1.pawn1,plr4,b24);
      
      plr1.checkKill(plr1.pawn1,plr3,b25);
      plr1.checkKill(plr1.pawn1,plr2,b25);
      plr1.checkKill(plr1.pawn1,plr4,b25);

      plr1.checkKill(plr1.pawn1,plr3,b26);
      plr1.checkKill(plr1.pawn1,plr2,b26);
      plr1.checkKill(plr1.pawn1,plr4,b26);

      plr1.checkKill(plr1.pawn1,plr3,b28);
      plr1.checkKill(plr1.pawn1,plr2,b28);
      plr1.checkKill(plr1.pawn1,plr4,b28);
      
      plr1.checkKill(plr1.pawn1,plr2,b27);
      plr1.checkKill(plr1.pawn1,plr3,b27);
      plr1.checkKill(plr1.pawn1,plr4,b27);


    }else if(rand === 3){
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);

      plr1.checkKill(plr1.pawn1,plr3,b11);
      plr1.checkKill(plr1.pawn1,plr2,b11);
      plr1.checkKill(plr1.pawn1,plr4,b11);
      
      plr1.checkKill(plr1.pawn1,plr3,b1);
      plr1.checkKill(plr1.pawn1,plr2,b1);
      plr1.checkKill(plr1.pawn1,plr4,b1);

      plr1.checkKill(plr1.pawn1,plr3,b2);
      plr1.checkKill(plr1.pawn1,plr2,b2);
      plr1.checkKill(plr1.pawn1,plr4,b2);
      
      plr1.checkKill(plr1.pawn1,plr3,b4);
      plr1.checkKill(plr1.pawn1,plr2,b4);
      plr1.checkKill(plr1.pawn1,plr4,b4);
      
      plr1.checkKill(plr1.pawn1,plr3,b5);
      plr1.checkKill(plr1.pawn1,plr2,b5);
      plr1.checkKill(plr1.pawn1,plr4,b5);

      plr1.checkKill(plr1.pawn1,plr3,b6);
      plr1.checkKill(plr1.pawn1,plr2,b6);
      plr1.checkKill(plr1.pawn1,plr4,b6);

      plr1.checkKill(plr1.pawn1,plr3,b8);
      plr1.checkKill(plr1.pawn1,plr2,b8);
      plr1.checkKill(plr1.pawn1,plr4,b8);
      
      plr1.checkKill(plr1.pawn1,plr3,b9);
      plr1.checkKill(plr1.pawn1,plr2,b9);
      plr1.checkKill(plr1.pawn1,plr4,b9);

      plr1.checkKill(plr1.pawn1,plr3,b10);
      plr1.checkKill(plr1.pawn1,plr2,b10);
      plr1.checkKill(plr1.pawn1,plr4,b10);
      
      plr1.checkKill(plr1.pawn1,plr3,b12);
      plr1.checkKill(plr1.pawn1,plr2,b12);
      plr1.checkKill(plr1.pawn1,plr4,b12);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);
      
      plr1.checkKill(plr1.pawn1,plr3,b15);
      plr1.checkKill(plr1.pawn1,plr2,b15);
      plr1.checkKill(plr1.pawn1,plr4,b15);
      
      plr1.checkKill(plr1.pawn1,plr3,b16);
      plr1.checkKill(plr1.pawn1,plr2,b16);
      plr1.checkKill(plr1.pawn1,plr4,b16);

      plr1.checkKill(plr1.pawn1,plr3,b18);
      plr1.checkKill(plr1.pawn1,plr2,b18);
      plr1.checkKill(plr1.pawn1,plr4,b18);

      plr1.checkKill(plr1.pawn1,plr3,b19);
      plr1.checkKill(plr1.pawn1,plr2,b19);
      plr1.checkKill(plr1.pawn1,plr4,b19);

      plr1.checkKill(plr1.pawn1,plr3,b20);
      plr1.checkKill(plr1.pawn1,plr2,b20);
      plr1.checkKill(plr1.pawn1,plr4,b20);

      plr1.checkKill(plr1.pawn1,plr3,b21);
      plr1.checkKill(plr1.pawn1,plr2,b21);
      plr1.checkKill(plr1.pawn1,plr4,b21);
      
      plr1.checkKill(plr1.pawn1,plr3,b22);
      plr1.checkKill(plr1.pawn1,plr2,b22);
      plr1.checkKill(plr1.pawn1,plr4,b22);

      plr1.checkKill(plr1.pawn1,plr3,b23);
      plr1.checkKill(plr1.pawn1,plr2,b23);
      plr1.checkKill(plr1.pawn1,plr4,b23);
      
      plr1.checkKill(plr1.pawn1,plr3,b24);
      plr1.checkKill(plr1.pawn1,plr2,b24);
      plr1.checkKill(plr1.pawn1,plr4,b24);
      
      plr1.checkKill(plr1.pawn1,plr3,b25);
      plr1.checkKill(plr1.pawn1,plr2,b25);
      plr1.checkKill(plr1.pawn1,plr4,b25);

      plr1.checkKill(plr1.pawn1,plr3,b26);
      plr1.checkKill(plr1.pawn1,plr2,b26);
      plr1.checkKill(plr1.pawn1,plr4,b26);

      plr1.checkKill(plr1.pawn1,plr3,b28);
      plr1.checkKill(plr1.pawn1,plr2,b28);
      plr1.checkKill(plr1.pawn1,plr4,b28);
      
      plr1.checkKill(plr1.pawn1,plr2,b27);
      plr1.checkKill(plr1.pawn1,plr3,b27);
      plr1.checkKill(plr1.pawn1,plr4,b27);


    }else if(rand === 4){
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);

      plr1.checkKill(plr1.pawn1,plr3,b11);
      plr1.checkKill(plr1.pawn1,plr2,b11);
      plr1.checkKill(plr1.pawn1,plr4,b11);
      
      plr1.checkKill(plr1.pawn1,plr3,b1);
      plr1.checkKill(plr1.pawn1,plr2,b1);
      plr1.checkKill(plr1.pawn1,plr4,b1);

      plr1.checkKill(plr1.pawn1,plr3,b2);
      plr1.checkKill(plr1.pawn1,plr2,b2);
      plr1.checkKill(plr1.pawn1,plr4,b2);
      
      plr1.checkKill(plr1.pawn1,plr3,b4);
      plr1.checkKill(plr1.pawn1,plr2,b4);
      plr1.checkKill(plr1.pawn1,plr4,b4);
      
      plr1.checkKill(plr1.pawn1,plr3,b5);
      plr1.checkKill(plr1.pawn1,plr2,b5);
      plr1.checkKill(plr1.pawn1,plr4,b5);

      plr1.checkKill(plr1.pawn1,plr3,b6);
      plr1.checkKill(plr1.pawn1,plr2,b6);
      plr1.checkKill(plr1.pawn1,plr4,b6);

      plr1.checkKill(plr1.pawn1,plr3,b8);
      plr1.checkKill(plr1.pawn1,plr2,b8);
      plr1.checkKill(plr1.pawn1,plr4,b8);
      
      plr1.checkKill(plr1.pawn1,plr3,b9);
      plr1.checkKill(plr1.pawn1,plr2,b9);
      plr1.checkKill(plr1.pawn1,plr4,b9);

      plr1.checkKill(plr1.pawn1,plr3,b10);
      plr1.checkKill(plr1.pawn1,plr2,b10);
      plr1.checkKill(plr1.pawn1,plr4,b10);
      
      plr1.checkKill(plr1.pawn1,plr3,b12);
      plr1.checkKill(plr1.pawn1,plr2,b12);
      plr1.checkKill(plr1.pawn1,plr4,b12);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);
      
      plr1.checkKill(plr1.pawn1,plr3,b15);
      plr1.checkKill(plr1.pawn1,plr2,b15);
      plr1.checkKill(plr1.pawn1,plr4,b15);
      
      plr1.checkKill(plr1.pawn1,plr3,b16);
      plr1.checkKill(plr1.pawn1,plr2,b16);
      plr1.checkKill(plr1.pawn1,plr4,b16);

      plr1.checkKill(plr1.pawn1,plr3,b18);
      plr1.checkKill(plr1.pawn1,plr2,b18);
      plr1.checkKill(plr1.pawn1,plr4,b18);

      plr1.checkKill(plr1.pawn1,plr3,b19);
      plr1.checkKill(plr1.pawn1,plr2,b19);
      plr1.checkKill(plr1.pawn1,plr4,b19);

      plr1.checkKill(plr1.pawn1,plr3,b20);
      plr1.checkKill(plr1.pawn1,plr2,b20);
      plr1.checkKill(plr1.pawn1,plr4,b20);

      plr1.checkKill(plr1.pawn1,plr3,b21);
      plr1.checkKill(plr1.pawn1,plr2,b21);
      plr1.checkKill(plr1.pawn1,plr4,b21);
      
      plr1.checkKill(plr1.pawn1,plr3,b22);
      plr1.checkKill(plr1.pawn1,plr2,b22);
      plr1.checkKill(plr1.pawn1,plr4,b22);

      plr1.checkKill(plr1.pawn1,plr3,b23);
      plr1.checkKill(plr1.pawn1,plr2,b23);
      plr1.checkKill(plr1.pawn1,plr4,b23);
      
      plr1.checkKill(plr1.pawn1,plr3,b24);
      plr1.checkKill(plr1.pawn1,plr2,b24);
      plr1.checkKill(plr1.pawn1,plr4,b24);
      
      plr1.checkKill(plr1.pawn1,plr3,b25);
      plr1.checkKill(plr1.pawn1,plr2,b25);
      plr1.checkKill(plr1.pawn1,plr4,b25);

      plr1.checkKill(plr1.pawn1,plr3,b26);
      plr1.checkKill(plr1.pawn1,plr2,b26);
      plr1.checkKill(plr1.pawn1,plr4,b26);

      plr1.checkKill(plr1.pawn1,plr3,b28);
      plr1.checkKill(plr1.pawn1,plr2,b28);
      plr1.checkKill(plr1.pawn1,plr4,b28);
      
      plr1.checkKill(plr1.pawn1,plr2,b27);
      plr1.checkKill(plr1.pawn1,plr3,b27);
      plr1.checkKill(plr1.pawn1,plr4,b27);


    }else if(rand === 5){
      plr1.moveForward(plr1.pawn1);
      
      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);

      plr1.checkKill(plr1.pawn1,plr3,b11);
      plr1.checkKill(plr1.pawn1,plr2,b11);
      plr1.checkKill(plr1.pawn1,plr4,b11);
      
      plr1.checkKill(plr1.pawn1,plr3,b1);
      plr1.checkKill(plr1.pawn1,plr2,b1);
      plr1.checkKill(plr1.pawn1,plr4,b1);

      plr1.checkKill(plr1.pawn1,plr3,b2);
      plr1.checkKill(plr1.pawn1,plr2,b2);
      plr1.checkKill(plr1.pawn1,plr4,b2);
      
      plr1.checkKill(plr1.pawn1,plr3,b4);
      plr1.checkKill(plr1.pawn1,plr2,b4);
      plr1.checkKill(plr1.pawn1,plr4,b4);
      
      plr1.checkKill(plr1.pawn1,plr3,b5);
      plr1.checkKill(plr1.pawn1,plr2,b5);
      plr1.checkKill(plr1.pawn1,plr4,b5);

      plr1.checkKill(plr1.pawn1,plr3,b6);
      plr1.checkKill(plr1.pawn1,plr2,b6);
      plr1.checkKill(plr1.pawn1,plr4,b6);

      plr1.checkKill(plr1.pawn1,plr3,b8);
      plr1.checkKill(plr1.pawn1,plr2,b8);
      plr1.checkKill(plr1.pawn1,plr4,b8);
      
      plr1.checkKill(plr1.pawn1,plr3,b9);
      plr1.checkKill(plr1.pawn1,plr2,b9);
      plr1.checkKill(plr1.pawn1,plr4,b9);

      plr1.checkKill(plr1.pawn1,plr3,b10);
      plr1.checkKill(plr1.pawn1,plr2,b10);
      plr1.checkKill(plr1.pawn1,plr4,b10);
      
      plr1.checkKill(plr1.pawn1,plr3,b12);
      plr1.checkKill(plr1.pawn1,plr2,b12);
      plr1.checkKill(plr1.pawn1,plr4,b12);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);
      
      plr1.checkKill(plr1.pawn1,plr3,b15);
      plr1.checkKill(plr1.pawn1,plr2,b15);
      plr1.checkKill(plr1.pawn1,plr4,b15);
      
      plr1.checkKill(plr1.pawn1,plr3,b16);
      plr1.checkKill(plr1.pawn1,plr2,b16);
      plr1.checkKill(plr1.pawn1,plr4,b16);

      plr1.checkKill(plr1.pawn1,plr3,b18);
      plr1.checkKill(plr1.pawn1,plr2,b18);
      plr1.checkKill(plr1.pawn1,plr4,b18);

      plr1.checkKill(plr1.pawn1,plr3,b19);
      plr1.checkKill(plr1.pawn1,plr2,b19);
      plr1.checkKill(plr1.pawn1,plr4,b19);

      plr1.checkKill(plr1.pawn1,plr3,b20);
      plr1.checkKill(plr1.pawn1,plr2,b20);
      plr1.checkKill(plr1.pawn1,plr4,b20);

      plr1.checkKill(plr1.pawn1,plr3,b21);
      plr1.checkKill(plr1.pawn1,plr2,b21);
      plr1.checkKill(plr1.pawn1,plr4,b21);
      
      plr1.checkKill(plr1.pawn1,plr3,b22);
      plr1.checkKill(plr1.pawn1,plr2,b22);
      plr1.checkKill(plr1.pawn1,plr4,b22);

      plr1.checkKill(plr1.pawn1,plr3,b23);
      plr1.checkKill(plr1.pawn1,plr2,b23);
      plr1.checkKill(plr1.pawn1,plr4,b23);
      
      plr1.checkKill(plr1.pawn1,plr3,b24);
      plr1.checkKill(plr1.pawn1,plr2,b24);
      plr1.checkKill(plr1.pawn1,plr4,b24);
      
      plr1.checkKill(plr1.pawn1,plr3,b25);
      plr1.checkKill(plr1.pawn1,plr2,b25);
      plr1.checkKill(plr1.pawn1,plr4,b25);

      plr1.checkKill(plr1.pawn1,plr3,b26);
      plr1.checkKill(plr1.pawn1,plr2,b26);
      plr1.checkKill(plr1.pawn1,plr4,b26);

      plr1.checkKill(plr1.pawn1,plr3,b28);
      plr1.checkKill(plr1.pawn1,plr2,b28);
      plr1.checkKill(plr1.pawn1,plr4,b28);
      
      plr1.checkKill(plr1.pawn1,plr2,b27);
      plr1.checkKill(plr1.pawn1,plr3,b27);
      plr1.checkKill(plr1.pawn1,plr4,b27);



    }else if(rand === 6){
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);

      plr1.checkKill(plr1.pawn1,plr3,b11);
      plr1.checkKill(plr1.pawn1,plr2,b11);
      plr1.checkKill(plr1.pawn1,plr4,b11);
      
      plr1.checkKill(plr1.pawn1,plr3,b1);
      plr1.checkKill(plr1.pawn1,plr2,b1);
      plr1.checkKill(plr1.pawn1,plr4,b1);

      plr1.checkKill(plr1.pawn1,plr3,b2);
      plr1.checkKill(plr1.pawn1,plr2,b2);
      plr1.checkKill(plr1.pawn1,plr4,b2);
      
      plr1.checkKill(plr1.pawn1,plr3,b4);
      plr1.checkKill(plr1.pawn1,plr2,b4);
      plr1.checkKill(plr1.pawn1,plr4,b4);
      
      plr1.checkKill(plr1.pawn1,plr3,b5);
      plr1.checkKill(plr1.pawn1,plr2,b5);
      plr1.checkKill(plr1.pawn1,plr4,b5);

      plr1.checkKill(plr1.pawn1,plr3,b6);
      plr1.checkKill(plr1.pawn1,plr2,b6);
      plr1.checkKill(plr1.pawn1,plr4,b6);

      plr1.checkKill(plr1.pawn1,plr3,b8);
      plr1.checkKill(plr1.pawn1,plr2,b8);
      plr1.checkKill(plr1.pawn1,plr4,b8);
      
      plr1.checkKill(plr1.pawn1,plr3,b9);
      plr1.checkKill(plr1.pawn1,plr2,b9);
      plr1.checkKill(plr1.pawn1,plr4,b9);
      
      plr1.checkKill(plr1.pawn1,plr3,b12);
      plr1.checkKill(plr1.pawn1,plr2,b12);
      plr1.checkKill(plr1.pawn1,plr4,b12);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);
      
      plr1.checkKill(plr1.pawn1,plr3,b15);
      plr1.checkKill(plr1.pawn1,plr2,b15);
      plr1.checkKill(plr1.pawn1,plr4,b15);
      
      plr1.checkKill(plr1.pawn1,plr3,b16);
      plr1.checkKill(plr1.pawn1,plr2,b16);
      plr1.checkKill(plr1.pawn1,plr4,b16);

      plr1.checkKill(plr1.pawn1,plr3,b18);
      plr1.checkKill(plr1.pawn1,plr2,b18);
      plr1.checkKill(plr1.pawn1,plr4,b18);

      plr1.checkKill(plr1.pawn1,plr3,b19);
      plr1.checkKill(plr1.pawn1,plr2,b19);
      plr1.checkKill(plr1.pawn1,plr4,b19);

      plr1.checkKill(plr1.pawn1,plr3,b20);
      plr1.checkKill(plr1.pawn1,plr2,b20);
      plr1.checkKill(plr1.pawn1,plr4,b20);

      plr1.checkKill(plr1.pawn1,plr3,b21);
      plr1.checkKill(plr1.pawn1,plr2,b21);
      plr1.checkKill(plr1.pawn1,plr4,b21);
      
      plr1.checkKill(plr1.pawn1,plr3,b22);
      plr1.checkKill(plr1.pawn1,plr2,b22);
      plr1.checkKill(plr1.pawn1,plr4,b22);

      plr1.checkKill(plr1.pawn1,plr3,b23);
      plr1.checkKill(plr1.pawn1,plr2,b23);
      plr1.checkKill(plr1.pawn1,plr4,b23);
      
      plr1.checkKill(plr1.pawn1,plr3,b24);
      plr1.checkKill(plr1.pawn1,plr2,b24);
      plr1.checkKill(plr1.pawn1,plr4,b24);
      
      plr1.checkKill(plr1.pawn1,plr3,b25);
      plr1.checkKill(plr1.pawn1,plr2,b25);
      plr1.checkKill(plr1.pawn1,plr4,b25);

      plr1.checkKill(plr1.pawn1,plr3,b26);
      plr1.checkKill(plr1.pawn1,plr2,b26);
      plr1.checkKill(plr1.pawn1,plr4,b26);

      plr1.checkKill(plr1.pawn1,plr3,b28);
      plr1.checkKill(plr1.pawn1,plr2,b28);
      plr1.checkKill(plr1.pawn1,plr4,b28);
      
      plr1.checkKill(plr1.pawn1,plr2,b27);
      plr1.checkKill(plr1.pawn1,plr3,b27);
      plr1.checkKill(plr1.pawn1,plr4,b27);


    }else if(rand === 7){
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);

      plr1.checkKill(plr1.pawn1,plr3,b11);
      plr1.checkKill(plr1.pawn1,plr2,b11);
      plr1.checkKill(plr1.pawn1,plr4,b11);
      
      plr1.checkKill(plr1.pawn1,plr3,b1);
      plr1.checkKill(plr1.pawn1,plr2,b1);
      plr1.checkKill(plr1.pawn1,plr4,b1);

      plr1.checkKill(plr1.pawn1,plr3,b2);
      plr1.checkKill(plr1.pawn1,plr2,b2);
      plr1.checkKill(plr1.pawn1,plr4,b2);
      
      plr1.checkKill(plr1.pawn1,plr3,b4);
      plr1.checkKill(plr1.pawn1,plr2,b4);
      plr1.checkKill(plr1.pawn1,plr4,b4);
      
      plr1.checkKill(plr1.pawn1,plr3,b5);
      plr1.checkKill(plr1.pawn1,plr2,b5);
      plr1.checkKill(plr1.pawn1,plr4,b5);

      plr1.checkKill(plr1.pawn1,plr3,b6);
      plr1.checkKill(plr1.pawn1,plr2,b6);
      plr1.checkKill(plr1.pawn1,plr4,b6);

      plr1.checkKill(plr1.pawn1,plr3,b8);
      plr1.checkKill(plr1.pawn1,plr2,b8);
      plr1.checkKill(plr1.pawn1,plr4,b8);
      
      plr1.checkKill(plr1.pawn1,plr3,b9);
      plr1.checkKill(plr1.pawn1,plr2,b9);
      plr1.checkKill(plr1.pawn1,plr4,b9);
      
      plr1.checkKill(plr1.pawn1,plr3,b12);
      plr1.checkKill(plr1.pawn1,plr2,b12);
      plr1.checkKill(plr1.pawn1,plr4,b12);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);
      
      plr1.checkKill(plr1.pawn1,plr3,b15);
      plr1.checkKill(plr1.pawn1,plr2,b15);
      plr1.checkKill(plr1.pawn1,plr4,b15);
      
      plr1.checkKill(plr1.pawn1,plr3,b16);
      plr1.checkKill(plr1.pawn1,plr2,b16);
      plr1.checkKill(plr1.pawn1,plr4,b16);

      plr1.checkKill(plr1.pawn1,plr3,b18);
      plr1.checkKill(plr1.pawn1,plr2,b18);
      plr1.checkKill(plr1.pawn1,plr4,b18);

      plr1.checkKill(plr1.pawn1,plr3,b19);
      plr1.checkKill(plr1.pawn1,plr2,b19);
      plr1.checkKill(plr1.pawn1,plr4,b19);

      plr1.checkKill(plr1.pawn1,plr3,b20);
      plr1.checkKill(plr1.pawn1,plr2,b20);
      plr1.checkKill(plr1.pawn1,plr4,b20);

      plr1.checkKill(plr1.pawn1,plr3,b21);
      plr1.checkKill(plr1.pawn1,plr2,b21);
      plr1.checkKill(plr1.pawn1,plr4,b21);
      
      plr1.checkKill(plr1.pawn1,plr3,b22);
      plr1.checkKill(plr1.pawn1,plr2,b22);
      plr1.checkKill(plr1.pawn1,plr4,b22);

      plr1.checkKill(plr1.pawn1,plr3,b23);
      plr1.checkKill(plr1.pawn1,plr2,b23);
      plr1.checkKill(plr1.pawn1,plr4,b23);
      
      plr1.checkKill(plr1.pawn1,plr3,b24);
      plr1.checkKill(plr1.pawn1,plr2,b24);
      plr1.checkKill(plr1.pawn1,plr4,b24);
      
      plr1.checkKill(plr1.pawn1,plr3,b25);
      plr1.checkKill(plr1.pawn1,plr2,b25);
      plr1.checkKill(plr1.pawn1,plr4,b25);

      plr1.checkKill(plr1.pawn1,plr3,b26);
      plr1.checkKill(plr1.pawn1,plr2,b26);
      plr1.checkKill(plr1.pawn1,plr4,b26);

      plr1.checkKill(plr1.pawn1,plr3,b28);
      plr1.checkKill(plr1.pawn1,plr2,b28);
      plr1.checkKill(plr1.pawn1,plr4,b28);
      
      plr1.checkKill(plr1.pawn1,plr2,b27);
      plr1.checkKill(plr1.pawn1,plr3,b27);
      plr1.checkKill(plr1.pawn1,plr4,b27);


    }else if(rand === 8){
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);
      plr1.moveForward(plr1.pawn1);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);

      plr1.checkKill(plr1.pawn1,plr3,b11);
      plr1.checkKill(plr1.pawn1,plr2,b11);
      plr1.checkKill(plr1.pawn1,plr4,b11);
      
      plr1.checkKill(plr1.pawn1,plr3,b1);
      plr1.checkKill(plr1.pawn1,plr2,b1);
      plr1.checkKill(plr1.pawn1,plr4,b1);

      plr1.checkKill(plr1.pawn1,plr3,b2);
      plr1.checkKill(plr1.pawn1,plr2,b2);
      plr1.checkKill(plr1.pawn1,plr4,b2);
      
      plr1.checkKill(plr1.pawn1,plr3,b4);
      plr1.checkKill(plr1.pawn1,plr2,b4);
      plr1.checkKill(plr1.pawn1,plr4,b4);
      
      plr1.checkKill(plr1.pawn1,plr3,b5);
      plr1.checkKill(plr1.pawn1,plr2,b5);
      plr1.checkKill(plr1.pawn1,plr4,b5);

      plr1.checkKill(plr1.pawn1,plr3,b6);
      plr1.checkKill(plr1.pawn1,plr2,b6);
      plr1.checkKill(plr1.pawn1,plr4,b6);

      plr1.checkKill(plr1.pawn1,plr3,b8);
      plr1.checkKill(plr1.pawn1,plr2,b8);
      plr1.checkKill(plr1.pawn1,plr4,b8);
      
      plr1.checkKill(plr1.pawn1,plr3,b9);
      plr1.checkKill(plr1.pawn1,plr2,b9);
      plr1.checkKill(plr1.pawn1,plr4,b9);

      plr1.checkKill(plr1.pawn1,plr3,b12);
      plr1.checkKill(plr1.pawn1,plr2,b12);
      plr1.checkKill(plr1.pawn1,plr4,b12);

      plr1.checkKill(plr1.pawn1,plr3,b14);
      plr1.checkKill(plr1.pawn1,plr2,b14);
      plr1.checkKill(plr1.pawn1,plr4,b14);
      
      plr1.checkKill(plr1.pawn1,plr3,b15);
      plr1.checkKill(plr1.pawn1,plr2,b15);
      plr1.checkKill(plr1.pawn1,plr4,b15);
      
      plr1.checkKill(plr1.pawn1,plr3,b16);
      plr1.checkKill(plr1.pawn1,plr2,b16);
      plr1.checkKill(plr1.pawn1,plr4,b16);

      plr1.checkKill(plr1.pawn1,plr3,b18);
      plr1.checkKill(plr1.pawn1,plr2,b18);
      plr1.checkKill(plr1.pawn1,plr4,b18);

      plr1.checkKill(plr1.pawn1,plr3,b19);
      plr1.checkKill(plr1.pawn1,plr2,b19);
      plr1.checkKill(plr1.pawn1,plr4,b19);

      plr1.checkKill(plr1.pawn1,plr3,b20);
      plr1.checkKill(plr1.pawn1,plr2,b20);
      plr1.checkKill(plr1.pawn1,plr4,b20);

      plr1.checkKill(plr1.pawn1,plr3,b21);
      plr1.checkKill(plr1.pawn1,plr2,b21);
      plr1.checkKill(plr1.pawn1,plr4,b21);
      
      plr1.checkKill(plr1.pawn1,plr3,b22);
      plr1.checkKill(plr1.pawn1,plr2,b22);
      plr1.checkKill(plr1.pawn1,plr4,b22);

      plr1.checkKill(plr1.pawn1,plr3,b23);
      plr1.checkKill(plr1.pawn1,plr2,b23);
      plr1.checkKill(plr1.pawn1,plr4,b23);
      
      plr1.checkKill(plr1.pawn1,plr3,b24);
      plr1.checkKill(plr1.pawn1,plr2,b24);
      plr1.checkKill(plr1.pawn1,plr4,b24);
      
      plr1.checkKill(plr1.pawn1,plr3,b25);
      plr1.checkKill(plr1.pawn1,plr2,b25);
      plr1.checkKill(plr1.pawn1,plr4,b25);

      plr1.checkKill(plr1.pawn1,plr3,b26);
      plr1.checkKill(plr1.pawn1,plr2,b26);
      plr1.checkKill(plr1.pawn1,plr4,b26);

      plr1.checkKill(plr1.pawn1,plr3,b28);
      plr1.checkKill(plr1.pawn1,plr2,b28);
      plr1.checkKill(plr1.pawn1,plr4,b28);
      
      plr1.checkKill(plr1.pawn1,plr2,b27);
      plr1.checkKill(plr1.pawn1,plr3,b27);
      plr1.checkKill(plr1.pawn1,plr4,b27);


    }})


    pawn2.mousePressed(() => {
    
      rand = floor(random(1,8));
      console.log(rand);
  
      if(rand === 1){
        plr1.moveForward(plr1.pawn2);

        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);

        plr1.checkKill(plr1.pawn2,plr3,b11);
        plr1.checkKill(plr1.pawn2,plr2,b11);
        plr1.checkKill(plr1.pawn2,plr4,b11);
        
        plr1.checkKill(plr1.pawn2,plr3,b1);
        plr1.checkKill(plr1.pawn2,plr2,b1);
        plr1.checkKill(plr1.pawn2,plr4,b1);
  
        plr1.checkKill(plr1.pawn2,plr3,b2);
        plr1.checkKill(plr1.pawn2,plr2,b2);
        plr1.checkKill(plr1.pawn2,plr4,b2);
        
        plr1.checkKill(plr1.pawn2,plr3,b4);
        plr1.checkKill(plr1.pawn2,plr2,b4);
        plr1.checkKill(plr1.pawn2,plr4,b4);
        
        plr1.checkKill(plr1.pawn2,plr3,b5);
        plr1.checkKill(plr1.pawn2,plr2,b5);
        plr1.checkKill(plr1.pawn2,plr4,b5);
  
        plr1.checkKill(plr1.pawn2,plr3,b6);
        plr1.checkKill(plr1.pawn2,plr2,b6);
        plr1.checkKill(plr1.pawn2,plr4,b6);

        plr1.checkKill(plr1.pawn2,plr3,b8);
        plr1.checkKill(plr1.pawn2,plr2,b8);
        plr1.checkKill(plr1.pawn2,plr4,b8);
        
        plr1.checkKill(plr1.pawn2,plr3,b9);
        plr1.checkKill(plr1.pawn2,plr2,b9);
        plr1.checkKill(plr1.pawn2,plr4,b9);

        plr1.checkKill(plr1.pawn2,plr3,b12);
        plr1.checkKill(plr1.pawn2,plr2,b12);
        plr1.checkKill(plr1.pawn2,plr4,b12);
  
        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);
        
        plr1.checkKill(plr1.pawn2,plr3,b15);
        plr1.checkKill(plr1.pawn2,plr2,b15);
        plr1.checkKill(plr1.pawn2,plr4,b15);
      
        plr1.checkKill(plr1.pawn2,plr3,b16);
        plr1.checkKill(plr1.pawn2,plr2,b16);
        plr1.checkKill(plr1.pawn2,plr4,b16);
  
        plr1.checkKill(plr1.pawn2,plr3,b18);
        plr1.checkKill(plr1.pawn2,plr2,b18);
        plr1.checkKill(plr1.pawn2,plr4,b18);
  
        plr1.checkKill(plr1.pawn2,plr3,b19);
        plr1.checkKill(plr1.pawn2,plr2,b19);
        plr1.checkKill(plr1.pawn2,plr4,b19);
  
        plr1.checkKill(plr1.pawn2,plr3,b20);
        plr1.checkKill(plr1.pawn2,plr2,b20);
        plr1.checkKill(plr1.pawn2,plr4,b20);
  
        plr1.checkKill(plr1.pawn2,plr3,b21);
        plr1.checkKill(plr1.pawn2,plr2,b21);
        plr1.checkKill(plr1.pawn2,plr4,b21);
        
        plr1.checkKill(plr1.pawn2,plr3,b22);
        plr1.checkKill(plr1.pawn2,plr2,b22);
        plr1.checkKill(plr1.pawn2,plr4,b22);

        plr1.checkKill(plr1.pawn2,plr3,b23);
        plr1.checkKill(plr1.pawn2,plr2,b23);
        plr1.checkKill(plr1.pawn2,plr4,b23);
        
        plr1.checkKill(plr1.pawn2,plr3,b24);
        plr1.checkKill(plr1.pawn2,plr2,b24);
        plr1.checkKill(plr1.pawn2,plr4,b24);
        
        plr1.checkKill(plr1.pawn2,plr3,b25);
        plr1.checkKill(plr1.pawn2,plr2,b25);
        plr1.checkKill(plr1.pawn2,plr4,b25);

        plr1.checkKill(plr1.pawn2,plr3,b26);
        plr1.checkKill(plr1.pawn2,plr2,b26);
        plr1.checkKill(plr1.pawn2,plr4,b26);
  
        plr1.checkKill(plr1.pawn2,plr3,b28);
        plr1.checkKill(plr1.pawn2,plr2,b28);
        plr1.checkKill(plr1.pawn2,plr4,b28);
        
        plr1.checkKill(plr1.pawn2,plr2,b27);
        plr1.checkKill(plr1.pawn2,plr3,b27);
        plr1.checkKill(plr1.pawn2,plr4,b27);
  
        
      }else if(rand === 2){
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);

                plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);

        plr1.checkKill(plr1.pawn2,plr3,b11);
        plr1.checkKill(plr1.pawn2,plr2,b11);
        plr1.checkKill(plr1.pawn2,plr4,b11);
        
        plr1.checkKill(plr1.pawn2,plr3,b1);
        plr1.checkKill(plr1.pawn2,plr2,b1);
        plr1.checkKill(plr1.pawn2,plr4,b1);
  
        plr1.checkKill(plr1.pawn2,plr3,b2);
        plr1.checkKill(plr1.pawn2,plr2,b2);
        plr1.checkKill(plr1.pawn2,plr4,b2);
        
        plr1.checkKill(plr1.pawn2,plr3,b4);
        plr1.checkKill(plr1.pawn2,plr2,b4);
        plr1.checkKill(plr1.pawn2,plr4,b4);
        
        plr1.checkKill(plr1.pawn2,plr3,b5);
        plr1.checkKill(plr1.pawn2,plr2,b5);
        plr1.checkKill(plr1.pawn2,plr4,b5);
  
        plr1.checkKill(plr1.pawn2,plr3,b6);
        plr1.checkKill(plr1.pawn2,plr2,b6);
        plr1.checkKill(plr1.pawn2,plr4,b6);

        plr1.checkKill(plr1.pawn2,plr3,b8);
        plr1.checkKill(plr1.pawn2,plr2,b8);
        plr1.checkKill(plr1.pawn2,plr4,b8);
        
        plr1.checkKill(plr1.pawn2,plr3,b9);
        plr1.checkKill(plr1.pawn2,plr2,b9);
        plr1.checkKill(plr1.pawn2,plr4,b9);

        plr1.checkKill(plr1.pawn2,plr3,b12);
        plr1.checkKill(plr1.pawn2,plr2,b12);
        plr1.checkKill(plr1.pawn2,plr4,b12);
  
        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);
        
        plr1.checkKill(plr1.pawn2,plr3,b15);
        plr1.checkKill(plr1.pawn2,plr2,b15);
        plr1.checkKill(plr1.pawn2,plr4,b15);
      
        plr1.checkKill(plr1.pawn2,plr3,b16);
        plr1.checkKill(plr1.pawn2,plr2,b16);
        plr1.checkKill(plr1.pawn2,plr4,b16);
  
        plr1.checkKill(plr1.pawn2,plr3,b18);
        plr1.checkKill(plr1.pawn2,plr2,b18);
        plr1.checkKill(plr1.pawn2,plr4,b18);
  
        plr1.checkKill(plr1.pawn2,plr3,b19);
        plr1.checkKill(plr1.pawn2,plr2,b19);
        plr1.checkKill(plr1.pawn2,plr4,b19);
  
        plr1.checkKill(plr1.pawn2,plr3,b20);
        plr1.checkKill(plr1.pawn2,plr2,b20);
        plr1.checkKill(plr1.pawn2,plr4,b20);
  
        plr1.checkKill(plr1.pawn2,plr3,b21);
        plr1.checkKill(plr1.pawn2,plr2,b21);
        plr1.checkKill(plr1.pawn2,plr4,b21);
        
        plr1.checkKill(plr1.pawn2,plr3,b22);
        plr1.checkKill(plr1.pawn2,plr2,b22);
        plr1.checkKill(plr1.pawn2,plr4,b22);

        plr1.checkKill(plr1.pawn2,plr3,b23);
        plr1.checkKill(plr1.pawn2,plr2,b23);
        plr1.checkKill(plr1.pawn2,plr4,b23);
        
        plr1.checkKill(plr1.pawn2,plr3,b24);
        plr1.checkKill(plr1.pawn2,plr2,b24);
        plr1.checkKill(plr1.pawn2,plr4,b24);
        
        plr1.checkKill(plr1.pawn2,plr3,b25);
        plr1.checkKill(plr1.pawn2,plr2,b25);
        plr1.checkKill(plr1.pawn2,plr4,b25);

        plr1.checkKill(plr1.pawn2,plr3,b26);
        plr1.checkKill(plr1.pawn2,plr2,b26);
        plr1.checkKill(plr1.pawn2,plr4,b26);
  
        plr1.checkKill(plr1.pawn2,plr3,b28);
        plr1.checkKill(plr1.pawn2,plr2,b28);
        plr1.checkKill(plr1.pawn2,plr4,b28);
        
        plr1.checkKill(plr1.pawn2,plr2,b27);
        plr1.checkKill(plr1.pawn2,plr3,b27);
        plr1.checkKill(plr1.pawn2,plr4,b27);


      }else if(rand === 3){
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);

        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);

        plr1.checkKill(plr1.pawn2,plr3,b11);
        plr1.checkKill(plr1.pawn2,plr2,b11);
        plr1.checkKill(plr1.pawn2,plr4,b11);
        
        plr1.checkKill(plr1.pawn2,plr3,b1);
        plr1.checkKill(plr1.pawn2,plr2,b1);
        plr1.checkKill(plr1.pawn2,plr4,b1);
  
        plr1.checkKill(plr1.pawn2,plr3,b2);
        plr1.checkKill(plr1.pawn2,plr2,b2);
        plr1.checkKill(plr1.pawn2,plr4,b2);
        
        plr1.checkKill(plr1.pawn2,plr3,b4);
        plr1.checkKill(plr1.pawn2,plr2,b4);
        plr1.checkKill(plr1.pawn2,plr4,b4);
        
        plr1.checkKill(plr1.pawn2,plr3,b5);
        plr1.checkKill(plr1.pawn2,plr2,b5);
        plr1.checkKill(plr1.pawn2,plr4,b5);
  
        plr1.checkKill(plr1.pawn2,plr3,b6);
        plr1.checkKill(plr1.pawn2,plr2,b6);
        plr1.checkKill(plr1.pawn2,plr4,b6);

        plr1.checkKill(plr1.pawn2,plr3,b8);
        plr1.checkKill(plr1.pawn2,plr2,b8);
        plr1.checkKill(plr1.pawn2,plr4,b8);
        
        plr1.checkKill(plr1.pawn2,plr3,b9);
        plr1.checkKill(plr1.pawn2,plr2,b9);
        plr1.checkKill(plr1.pawn2,plr4,b9);

        plr1.checkKill(plr1.pawn2,plr3,b12);
        plr1.checkKill(plr1.pawn2,plr2,b12);
        plr1.checkKill(plr1.pawn2,plr4,b12);
  
        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);
        
        plr1.checkKill(plr1.pawn2,plr3,b15);
        plr1.checkKill(plr1.pawn2,plr2,b15);
        plr1.checkKill(plr1.pawn2,plr4,b15);
      
        plr1.checkKill(plr1.pawn2,plr3,b16);
        plr1.checkKill(plr1.pawn2,plr2,b16);
        plr1.checkKill(plr1.pawn2,plr4,b16);
  
        plr1.checkKill(plr1.pawn2,plr3,b18);
        plr1.checkKill(plr1.pawn2,plr2,b18);
        plr1.checkKill(plr1.pawn2,plr4,b18);
  
        plr1.checkKill(plr1.pawn2,plr3,b19);
        plr1.checkKill(plr1.pawn2,plr2,b19);
        plr1.checkKill(plr1.pawn2,plr4,b19);
  
        plr1.checkKill(plr1.pawn2,plr3,b20);
        plr1.checkKill(plr1.pawn2,plr2,b20);
        plr1.checkKill(plr1.pawn2,plr4,b20);
  
        plr1.checkKill(plr1.pawn2,plr3,b21);
        plr1.checkKill(plr1.pawn2,plr2,b21);
        plr1.checkKill(plr1.pawn2,plr4,b21);
        
        plr1.checkKill(plr1.pawn2,plr3,b22);
        plr1.checkKill(plr1.pawn2,plr2,b22);
        plr1.checkKill(plr1.pawn2,plr4,b22);

        plr1.checkKill(plr1.pawn2,plr3,b23);
        plr1.checkKill(plr1.pawn2,plr2,b23);
        plr1.checkKill(plr1.pawn2,plr4,b23);
        
        plr1.checkKill(plr1.pawn2,plr3,b24);
        plr1.checkKill(plr1.pawn2,plr2,b24);
        plr1.checkKill(plr1.pawn2,plr4,b24);
        
        plr1.checkKill(plr1.pawn2,plr3,b25);
        plr1.checkKill(plr1.pawn2,plr2,b25);
        plr1.checkKill(plr1.pawn2,plr4,b25);

        plr1.checkKill(plr1.pawn2,plr3,b26);
        plr1.checkKill(plr1.pawn2,plr2,b26);
        plr1.checkKill(plr1.pawn2,plr4,b26);
  
        plr1.checkKill(plr1.pawn2,plr3,b28);
        plr1.checkKill(plr1.pawn2,plr2,b28);
        plr1.checkKill(plr1.pawn2,plr4,b28);
        
        plr1.checkKill(plr1.pawn2,plr2,b27);
        plr1.checkKill(plr1.pawn2,plr3,b27);
        plr1.checkKill(plr1.pawn2,plr4,b27);

        
      }else if(rand === 4){
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);

        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);

        plr1.checkKill(plr1.pawn2,plr3,b11);
        plr1.checkKill(plr1.pawn2,plr2,b11);
        plr1.checkKill(plr1.pawn2,plr4,b11);
        
        plr1.checkKill(plr1.pawn2,plr3,b1);
        plr1.checkKill(plr1.pawn2,plr2,b1);
        plr1.checkKill(plr1.pawn2,plr4,b1);
  
        plr1.checkKill(plr1.pawn2,plr3,b2);
        plr1.checkKill(plr1.pawn2,plr2,b2);
        plr1.checkKill(plr1.pawn2,plr4,b2);
        
        plr1.checkKill(plr1.pawn2,plr3,b4);
        plr1.checkKill(plr1.pawn2,plr2,b4);
        plr1.checkKill(plr1.pawn2,plr4,b4);
        
        plr1.checkKill(plr1.pawn2,plr3,b5);
        plr1.checkKill(plr1.pawn2,plr2,b5);
        plr1.checkKill(plr1.pawn2,plr4,b5);
  
        plr1.checkKill(plr1.pawn2,plr3,b6);
        plr1.checkKill(plr1.pawn2,plr2,b6);
        plr1.checkKill(plr1.pawn2,plr4,b6);

        plr1.checkKill(plr1.pawn2,plr3,b8);
        plr1.checkKill(plr1.pawn2,plr2,b8);
        plr1.checkKill(plr1.pawn2,plr4,b8);
        
        plr1.checkKill(plr1.pawn2,plr3,b9);
        plr1.checkKill(plr1.pawn2,plr2,b9);
        plr1.checkKill(plr1.pawn2,plr4,b9);

        plr1.checkKill(plr1.pawn2,plr3,b12);
        plr1.checkKill(plr1.pawn2,plr2,b12);
        plr1.checkKill(plr1.pawn2,plr4,b12);
  
        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);
        
        plr1.checkKill(plr1.pawn2,plr3,b15);
        plr1.checkKill(plr1.pawn2,plr2,b15);
        plr1.checkKill(plr1.pawn2,plr4,b15);
      
        plr1.checkKill(plr1.pawn2,plr3,b16);
        plr1.checkKill(plr1.pawn2,plr2,b16);
        plr1.checkKill(plr1.pawn2,plr4,b16);
  
        plr1.checkKill(plr1.pawn2,plr3,b18);
        plr1.checkKill(plr1.pawn2,plr2,b18);
        plr1.checkKill(plr1.pawn2,plr4,b18);
  
        plr1.checkKill(plr1.pawn2,plr3,b19);
        plr1.checkKill(plr1.pawn2,plr2,b19);
        plr1.checkKill(plr1.pawn2,plr4,b19);
  
        plr1.checkKill(plr1.pawn2,plr3,b20);
        plr1.checkKill(plr1.pawn2,plr2,b20);
        plr1.checkKill(plr1.pawn2,plr4,b20);
  
        plr1.checkKill(plr1.pawn2,plr3,b21);
        plr1.checkKill(plr1.pawn2,plr2,b21);
        plr1.checkKill(plr1.pawn2,plr4,b21);
        
        plr1.checkKill(plr1.pawn2,plr3,b22);
        plr1.checkKill(plr1.pawn2,plr2,b22);
        plr1.checkKill(plr1.pawn2,plr4,b22);

        plr1.checkKill(plr1.pawn2,plr3,b23);
        plr1.checkKill(plr1.pawn2,plr2,b23);
        plr1.checkKill(plr1.pawn2,plr4,b23);
        
        plr1.checkKill(plr1.pawn2,plr3,b24);
        plr1.checkKill(plr1.pawn2,plr2,b24);
        plr1.checkKill(plr1.pawn2,plr4,b24);
        
        plr1.checkKill(plr1.pawn2,plr3,b25);
        plr1.checkKill(plr1.pawn2,plr2,b25);
        plr1.checkKill(plr1.pawn2,plr4,b25);

        plr1.checkKill(plr1.pawn2,plr3,b26);
        plr1.checkKill(plr1.pawn2,plr2,b26);
        plr1.checkKill(plr1.pawn2,plr4,b26);
  
        plr1.checkKill(plr1.pawn2,plr3,b28);
        plr1.checkKill(plr1.pawn2,plr2,b28);
        plr1.checkKill(plr1.pawn2,plr4,b28);
        
        plr1.checkKill(plr1.pawn2,plr2,b27);
        plr1.checkKill(plr1.pawn2,plr3,b27);
        plr1.checkKill(plr1.pawn2,plr4,b27);
  
      }else if(rand === 5){
        plr1.moveForward(plr1.pawn2);

        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);

        plr1.checkKill(plr1.pawn2,plr3,b11);
        plr1.checkKill(plr1.pawn2,plr2,b11);
        plr1.checkKill(plr1.pawn2,plr4,b11);
        
        plr1.checkKill(plr1.pawn2,plr3,b1);
        plr1.checkKill(plr1.pawn2,plr2,b1);
        plr1.checkKill(plr1.pawn2,plr4,b1);
  
        plr1.checkKill(plr1.pawn2,plr3,b2);
        plr1.checkKill(plr1.pawn2,plr2,b2);
        plr1.checkKill(plr1.pawn2,plr4,b2);
        
        plr1.checkKill(plr1.pawn2,plr3,b4);
        plr1.checkKill(plr1.pawn2,plr2,b4);
        plr1.checkKill(plr1.pawn2,plr4,b4);
        
        plr1.checkKill(plr1.pawn2,plr3,b5);
        plr1.checkKill(plr1.pawn2,plr2,b5);
        plr1.checkKill(plr1.pawn2,plr4,b5);
  
        plr1.checkKill(plr1.pawn2,plr3,b6);
        plr1.checkKill(plr1.pawn2,plr2,b6);
        plr1.checkKill(plr1.pawn2,plr4,b6);

        plr1.checkKill(plr1.pawn2,plr3,b8);
        plr1.checkKill(plr1.pawn2,plr2,b8);
        plr1.checkKill(plr1.pawn2,plr4,b8);
        
        plr1.checkKill(plr1.pawn2,plr3,b9);
        plr1.checkKill(plr1.pawn2,plr2,b9);
        plr1.checkKill(plr1.pawn2,plr4,b9);

        plr1.checkKill(plr1.pawn2,plr3,b12);
        plr1.checkKill(plr1.pawn2,plr2,b12);
        plr1.checkKill(plr1.pawn2,plr4,b12);
  
        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);
        
        plr1.checkKill(plr1.pawn2,plr3,b15);
        plr1.checkKill(plr1.pawn2,plr2,b15);
        plr1.checkKill(plr1.pawn2,plr4,b15);
      
        plr1.checkKill(plr1.pawn2,plr3,b16);
        plr1.checkKill(plr1.pawn2,plr2,b16);
        plr1.checkKill(plr1.pawn2,plr4,b16);
  
        plr1.checkKill(plr1.pawn2,plr3,b18);
        plr1.checkKill(plr1.pawn2,plr2,b18);
        plr1.checkKill(plr1.pawn2,plr4,b18);
  
        plr1.checkKill(plr1.pawn2,plr3,b19);
        plr1.checkKill(plr1.pawn2,plr2,b19);
        plr1.checkKill(plr1.pawn2,plr4,b19);
  
        plr1.checkKill(plr1.pawn2,plr3,b20);
        plr1.checkKill(plr1.pawn2,plr2,b20);
        plr1.checkKill(plr1.pawn2,plr4,b20);
  
        plr1.checkKill(plr1.pawn2,plr3,b21);
        plr1.checkKill(plr1.pawn2,plr2,b21);
        plr1.checkKill(plr1.pawn2,plr4,b21);
        
        plr1.checkKill(plr1.pawn2,plr3,b22);
        plr1.checkKill(plr1.pawn2,plr2,b22);
        plr1.checkKill(plr1.pawn2,plr4,b22);

        plr1.checkKill(plr1.pawn2,plr3,b23);
        plr1.checkKill(plr1.pawn2,plr2,b23);
        plr1.checkKill(plr1.pawn2,plr4,b23);
        
        plr1.checkKill(plr1.pawn2,plr3,b24);
        plr1.checkKill(plr1.pawn2,plr2,b24);
        plr1.checkKill(plr1.pawn2,plr4,b24);
        
        plr1.checkKill(plr1.pawn2,plr3,b25);
        plr1.checkKill(plr1.pawn2,plr2,b25);
        plr1.checkKill(plr1.pawn2,plr4,b25);

        plr1.checkKill(plr1.pawn2,plr3,b26);
        plr1.checkKill(plr1.pawn2,plr2,b26);
        plr1.checkKill(plr1.pawn2,plr4,b26);
  
        plr1.checkKill(plr1.pawn2,plr3,b28);
        plr1.checkKill(plr1.pawn2,plr2,b28);
        plr1.checkKill(plr1.pawn2,plr4,b28);
        
        plr1.checkKill(plr1.pawn2,plr2,b27);
        plr1.checkKill(plr1.pawn2,plr3,b27);
        plr1.checkKill(plr1.pawn2,plr4,b27);
  
      }else if(rand === 6){
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);

        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);

        plr1.checkKill(plr1.pawn2,plr3,b11);
        plr1.checkKill(plr1.pawn2,plr2,b11);
        plr1.checkKill(plr1.pawn2,plr4,b11);
        
        plr1.checkKill(plr1.pawn2,plr3,b1);
        plr1.checkKill(plr1.pawn2,plr2,b1);
        plr1.checkKill(plr1.pawn2,plr4,b1);
  
        plr1.checkKill(plr1.pawn2,plr3,b2);
        plr1.checkKill(plr1.pawn2,plr2,b2);
        plr1.checkKill(plr1.pawn2,plr4,b2);
        
        plr1.checkKill(plr1.pawn2,plr3,b4);
        plr1.checkKill(plr1.pawn2,plr2,b4);
        plr1.checkKill(plr1.pawn2,plr4,b4);
        
        plr1.checkKill(plr1.pawn2,plr3,b5);
        plr1.checkKill(plr1.pawn2,plr2,b5);
        plr1.checkKill(plr1.pawn2,plr4,b5);
  
        plr1.checkKill(plr1.pawn2,plr3,b6);
        plr1.checkKill(plr1.pawn2,plr2,b6);
        plr1.checkKill(plr1.pawn2,plr4,b6);

        plr1.checkKill(plr1.pawn2,plr3,b8);
        plr1.checkKill(plr1.pawn2,plr2,b8);
        plr1.checkKill(plr1.pawn2,plr4,b8);
        
        plr1.checkKill(plr1.pawn2,plr3,b9);
        plr1.checkKill(plr1.pawn2,plr2,b9);
        plr1.checkKill(plr1.pawn2,plr4,b9);

        plr1.checkKill(plr1.pawn2,plr3,b12);
        plr1.checkKill(plr1.pawn2,plr2,b12);
        plr1.checkKill(plr1.pawn2,plr4,b12);
  
        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);
        
        plr1.checkKill(plr1.pawn2,plr3,b15);
        plr1.checkKill(plr1.pawn2,plr2,b15);
        plr1.checkKill(plr1.pawn2,plr4,b15);
      
        plr1.checkKill(plr1.pawn2,plr3,b16);
        plr1.checkKill(plr1.pawn2,plr2,b16);
        plr1.checkKill(plr1.pawn2,plr4,b16);
  
        plr1.checkKill(plr1.pawn2,plr3,b18);
        plr1.checkKill(plr1.pawn2,plr2,b18);
        plr1.checkKill(plr1.pawn2,plr4,b18);
  
        plr1.checkKill(plr1.pawn2,plr3,b19);
        plr1.checkKill(plr1.pawn2,plr2,b19);
        plr1.checkKill(plr1.pawn2,plr4,b19);
  
        plr1.checkKill(plr1.pawn2,plr3,b20);
        plr1.checkKill(plr1.pawn2,plr2,b20);
        plr1.checkKill(plr1.pawn2,plr4,b20);
  
        plr1.checkKill(plr1.pawn2,plr3,b21);
        plr1.checkKill(plr1.pawn2,plr2,b21);
        plr1.checkKill(plr1.pawn2,plr4,b21);
        
        plr1.checkKill(plr1.pawn2,plr3,b22);
        plr1.checkKill(plr1.pawn2,plr2,b22);
        plr1.checkKill(plr1.pawn2,plr4,b22);

        plr1.checkKill(plr1.pawn2,plr3,b23);
        plr1.checkKill(plr1.pawn2,plr2,b23);
        plr1.checkKill(plr1.pawn2,plr4,b23);
        
        plr1.checkKill(plr1.pawn2,plr3,b24);
        plr1.checkKill(plr1.pawn2,plr2,b24);
        plr1.checkKill(plr1.pawn2,plr4,b24);
        
        plr1.checkKill(plr1.pawn2,plr3,b25);
        plr1.checkKill(plr1.pawn2,plr2,b25);
        plr1.checkKill(plr1.pawn2,plr4,b25);

        plr1.checkKill(plr1.pawn2,plr3,b26);
        plr1.checkKill(plr1.pawn2,plr2,b26);
        plr1.checkKill(plr1.pawn2,plr4,b26);
  
        plr1.checkKill(plr1.pawn2,plr3,b28);
        plr1.checkKill(plr1.pawn2,plr2,b28);
        plr1.checkKill(plr1.pawn2,plr4,b28);
        
        plr1.checkKill(plr1.pawn2,plr2,b27);
        plr1.checkKill(plr1.pawn2,plr3,b27);
        plr1.checkKill(plr1.pawn2,plr4,b27);


      }else if(rand === 7){
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);


        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);

        plr1.checkKill(plr1.pawn2,plr3,b11);
        plr1.checkKill(plr1.pawn2,plr2,b11);
        plr1.checkKill(plr1.pawn2,plr4,b11);
        
        plr1.checkKill(plr1.pawn2,plr3,b1);
        plr1.checkKill(plr1.pawn2,plr2,b1);
        plr1.checkKill(plr1.pawn2,plr4,b1);
  
        plr1.checkKill(plr1.pawn2,plr3,b2);
        plr1.checkKill(plr1.pawn2,plr2,b2);
        plr1.checkKill(plr1.pawn2,plr4,b2);
        
        plr1.checkKill(plr1.pawn2,plr3,b4);
        plr1.checkKill(plr1.pawn2,plr2,b4);
        plr1.checkKill(plr1.pawn2,plr4,b4);
        
        plr1.checkKill(plr1.pawn2,plr3,b5);
        plr1.checkKill(plr1.pawn2,plr2,b5);
        plr1.checkKill(plr1.pawn2,plr4,b5);
  
        plr1.checkKill(plr1.pawn2,plr3,b6);
        plr1.checkKill(plr1.pawn2,plr2,b6);
        plr1.checkKill(plr1.pawn2,plr4,b6);

        plr1.checkKill(plr1.pawn2,plr3,b8);
        plr1.checkKill(plr1.pawn2,plr2,b8);
        plr1.checkKill(plr1.pawn2,plr4,b8);
        
        plr1.checkKill(plr1.pawn2,plr3,b9);
        plr1.checkKill(plr1.pawn2,plr2,b9);
        plr1.checkKill(plr1.pawn2,plr4,b9);

        plr1.checkKill(plr1.pawn2,plr3,b12);
        plr1.checkKill(plr1.pawn2,plr2,b12);
        plr1.checkKill(plr1.pawn2,plr4,b12);
  
        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);
        
        plr1.checkKill(plr1.pawn2,plr3,b15);
        plr1.checkKill(plr1.pawn2,plr2,b15);
        plr1.checkKill(plr1.pawn2,plr4,b15);
      
        plr1.checkKill(plr1.pawn2,plr3,b16);
        plr1.checkKill(plr1.pawn2,plr2,b16);
        plr1.checkKill(plr1.pawn2,plr4,b16);
  
        plr1.checkKill(plr1.pawn2,plr3,b18);
        plr1.checkKill(plr1.pawn2,plr2,b18);
        plr1.checkKill(plr1.pawn2,plr4,b18);
  
        plr1.checkKill(plr1.pawn2,plr3,b19);
        plr1.checkKill(plr1.pawn2,plr2,b19);
        plr1.checkKill(plr1.pawn2,plr4,b19);
  
        plr1.checkKill(plr1.pawn2,plr3,b20);
        plr1.checkKill(plr1.pawn2,plr2,b20);
        plr1.checkKill(plr1.pawn2,plr4,b20);
  
        plr1.checkKill(plr1.pawn2,plr3,b21);
        plr1.checkKill(plr1.pawn2,plr2,b21);
        plr1.checkKill(plr1.pawn2,plr4,b21);
        
        plr1.checkKill(plr1.pawn2,plr3,b22);
        plr1.checkKill(plr1.pawn2,plr2,b22);
        plr1.checkKill(plr1.pawn2,plr4,b22);

        plr1.checkKill(plr1.pawn2,plr3,b23);
        plr1.checkKill(plr1.pawn2,plr2,b23);
        plr1.checkKill(plr1.pawn2,plr4,b23);
        
        plr1.checkKill(plr1.pawn2,plr3,b24);
        plr1.checkKill(plr1.pawn2,plr2,b24);
        plr1.checkKill(plr1.pawn2,plr4,b24);
        
        plr1.checkKill(plr1.pawn2,plr3,b25);
        plr1.checkKill(plr1.pawn2,plr2,b25);
        plr1.checkKill(plr1.pawn2,plr4,b25);

        plr1.checkKill(plr1.pawn2,plr3,b26);
        plr1.checkKill(plr1.pawn2,plr2,b26);
        plr1.checkKill(plr1.pawn2,plr4,b26);
  
        plr1.checkKill(plr1.pawn2,plr3,b28);
        plr1.checkKill(plr1.pawn2,plr2,b28);
        plr1.checkKill(plr1.pawn2,plr4,b28);
        
        plr1.checkKill(plr1.pawn2,plr2,b27);
        plr1.checkKill(plr1.pawn2,plr3,b27);
        plr1.checkKill(plr1.pawn2,plr4,b27);


      }else if(rand === 8){
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);
        plr1.moveForward(plr1.pawn2);

        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);

        plr1.checkKill(plr1.pawn2,plr3,b11);
        plr1.checkKill(plr1.pawn2,plr2,b11);
        plr1.checkKill(plr1.pawn2,plr4,b11);
        
        plr1.checkKill(plr1.pawn2,plr3,b1);
        plr1.checkKill(plr1.pawn2,plr2,b1);
        plr1.checkKill(plr1.pawn2,plr4,b1);
  
        plr1.checkKill(plr1.pawn2,plr3,b2);
        plr1.checkKill(plr1.pawn2,plr2,b2);
        plr1.checkKill(plr1.pawn2,plr4,b2);
        
        plr1.checkKill(plr1.pawn2,plr3,b4);
        plr1.checkKill(plr1.pawn2,plr2,b4);
        plr1.checkKill(plr1.pawn2,plr4,b4);
        
        plr1.checkKill(plr1.pawn2,plr3,b5);
        plr1.checkKill(plr1.pawn2,plr2,b5);
        plr1.checkKill(plr1.pawn2,plr4,b5);
  
        plr1.checkKill(plr1.pawn2,plr3,b6);
        plr1.checkKill(plr1.pawn2,plr2,b6);
        plr1.checkKill(plr1.pawn2,plr4,b6);

        plr1.checkKill(plr1.pawn2,plr3,b8);
        plr1.checkKill(plr1.pawn2,plr2,b8);
        plr1.checkKill(plr1.pawn2,plr4,b8);
        
        plr1.checkKill(plr1.pawn2,plr3,b9);
        plr1.checkKill(plr1.pawn2,plr2,b9);
        plr1.checkKill(plr1.pawn2,plr4,b9);

        plr1.checkKill(plr1.pawn2,plr3,b12);
        plr1.checkKill(plr1.pawn2,plr2,b12);
        plr1.checkKill(plr1.pawn2,plr4,b12);
  
        plr1.checkKill(plr1.pawn2,plr3,b14);
        plr1.checkKill(plr1.pawn2,plr2,b14);
        plr1.checkKill(plr1.pawn2,plr4,b14);
        
        plr1.checkKill(plr1.pawn2,plr3,b15);
        plr1.checkKill(plr1.pawn2,plr2,b15);
        plr1.checkKill(plr1.pawn2,plr4,b15);
      
        plr1.checkKill(plr1.pawn2,plr3,b16);
        plr1.checkKill(plr1.pawn2,plr2,b16);
        plr1.checkKill(plr1.pawn2,plr4,b16);
  
        plr1.checkKill(plr1.pawn2,plr3,b18);
        plr1.checkKill(plr1.pawn2,plr2,b18);
        plr1.checkKill(plr1.pawn2,plr4,b18);
  
        plr1.checkKill(plr1.pawn2,plr3,b19);
        plr1.checkKill(plr1.pawn2,plr2,b19);
        plr1.checkKill(plr1.pawn2,plr4,b19);
  
        plr1.checkKill(plr1.pawn2,plr3,b20);
        plr1.checkKill(plr1.pawn2,plr2,b20);
        plr1.checkKill(plr1.pawn2,plr4,b20);
  
        plr1.checkKill(plr1.pawn2,plr3,b21);
        plr1.checkKill(plr1.pawn2,plr2,b21);
        plr1.checkKill(plr1.pawn2,plr4,b21);
        
        plr1.checkKill(plr1.pawn2,plr3,b22);
        plr1.checkKill(plr1.pawn2,plr2,b22);
        plr1.checkKill(plr1.pawn2,plr4,b22);

        plr1.checkKill(plr1.pawn2,plr3,b23);
        plr1.checkKill(plr1.pawn2,plr2,b23);
        plr1.checkKill(plr1.pawn2,plr4,b23);
        
        plr1.checkKill(plr1.pawn2,plr3,b24);
        plr1.checkKill(plr1.pawn2,plr2,b24);
        plr1.checkKill(plr1.pawn2,plr4,b24);
        
        plr1.checkKill(plr1.pawn2,plr3,b25);
        plr1.checkKill(plr1.pawn2,plr2,b25);
        plr1.checkKill(plr1.pawn2,plr4,b25);

        plr1.checkKill(plr1.pawn2,plr3,b26);
        plr1.checkKill(plr1.pawn2,plr2,b26);
        plr1.checkKill(plr1.pawn2,plr4,b26);
  
        plr1.checkKill(plr1.pawn2,plr3,b28);
        plr1.checkKill(plr1.pawn2,plr2,b28);
        plr1.checkKill(plr1.pawn2,plr4,b28);
        
        plr1.checkKill(plr1.pawn2,plr2,b27);
        plr1.checkKill(plr1.pawn2,plr3,b27);
        plr1.checkKill(plr1.pawn2,plr4,b27);

      }}) 

    
    
      pawn3.mousePressed(() => {
    
        rand = floor(random(1,8));
        console.log(rand);
    
        if(rand === 1){
          plr1.moveForward(plr1.pawn3);

          
        plr1.checkKill(plr1.pawn3,plr3,b14);
        plr1.checkKill(plr1.pawn3,plr2,b14);
        plr1.checkKill(plr1.pawn3,plr4,b14);

        plr1.checkKill(plr1.pawn3,plr3,b11);
        plr1.checkKill(plr1.pawn3,plr2,b11);
        plr1.checkKill(plr1.pawn3,plr4,b11);
        
        plr1.checkKill(plr1.pawn3,plr3,b1);
        plr1.checkKill(plr1.pawn3,plr2,b1);
        plr1.checkKill(plr1.pawn3,plr4,b1);
  
        plr1.checkKill(plr1.pawn3,plr3,b2);
        plr1.checkKill(plr1.pawn3,plr2,b2);
        plr1.checkKill(plr1.pawn3,plr4,b2);
        
        plr1.checkKill(plr1.pawn3,plr3,b4);
        plr1.checkKill(plr1.pawn3,plr2,b4);
        plr1.checkKill(plr1.pawn3,plr4,b4);
        
        plr1.checkKill(plr1.pawn3,plr3,b5);
        plr1.checkKill(plr1.pawn3,plr2,b5);
        plr1.checkKill(plr1.pawn3,plr4,b5);

        plr1.checkKill(plr1.pawn3,plr3,b6);
        plr1.checkKill(plr1.pawn3,plr2,b6);
        plr1.checkKill(plr1.pawn3,plr4,b6);

        plr1.checkKill(plr1.pawn3,plr3,b8);
        plr1.checkKill(plr1.pawn3,plr2,b8);
        plr1.checkKill(plr1.pawn3,plr4,b8);
      
        plr1.checkKill(plr1.pawn3,plr3,b9);
        plr1.checkKill(plr1.pawn3,plr2,b9);
        plr1.checkKill(plr1.pawn3,plr4,b9);

        plr1.checkKill(plr1.pawn3,plr3,b12);
        plr1.checkKill(plr1.pawn3,plr2,b12);
        plr1.checkKill(plr1.pawn3,plr4,b12);
  
        plr1.checkKill(plr1.pawn3,plr3,b14);
        plr1.checkKill(plr1.pawn3,plr2,b14);
        plr1.checkKill(plr1.pawn3,plr4,b14);

        plr1.checkKill(plr1.pawn3,plr3,b15);
        plr1.checkKill(plr1.pawn3,plr2,b15);
        plr1.checkKill(plr1.pawn3,plr4,b15);
      
        plr1.checkKill(plr1.pawn3,plr3,b16);
        plr1.checkKill(plr1.pawn3,plr2,b16);
        plr1.checkKill(plr1.pawn3,plr4,b16);
  
        plr1.checkKill(plr1.pawn3,plr3,b18);
        plr1.checkKill(plr1.pawn3,plr2,b18);
        plr1.checkKill(plr1.pawn3,plr4,b18);
  
        plr1.checkKill(plr1.pawn3,plr3,b19);
        plr1.checkKill(plr1.pawn3,plr2,b19);
        plr1.checkKill(plr1.pawn3,plr4,b19);

        plr1.checkKill(plr1.pawn3,plr3,b20);
        plr1.checkKill(plr1.pawn3,plr2,b20);
        plr1.checkKill(plr1.pawn3,plr4,b20);

        plr1.checkKill(plr1.pawn3,plr3,b21);
        plr1.checkKill(plr1.pawn3,plr2,b21);
        plr1.checkKill(plr1.pawn3,plr4,b21);

        plr1.checkKill(plr1.pawn3,plr3,b22);
        plr1.checkKill(plr1.pawn3,plr2,b22);
        plr1.checkKill(plr1.pawn3,plr4,b22);

        plr1.checkKill(plr1.pawn3,plr3,b23);
        plr1.checkKill(plr1.pawn3,plr2,b23);
        plr1.checkKill(plr1.pawn3,plr4,b23);
        
        plr1.checkKill(plr1.pawn3,plr3,b24);
        plr1.checkKill(plr1.pawn3,plr2,b24);
        plr1.checkKill(plr1.pawn3,plr4,b24);
        
        plr1.checkKill(plr1.pawn3,plr3,b25);
        plr1.checkKill(plr1.pawn3,plr2,b25);
        plr1.checkKill(plr1.pawn3,plr4,b25);

        plr1.checkKill(plr1.pawn3,plr3,b26);
        plr1.checkKill(plr1.pawn3,plr2,b26);
        plr1.checkKill(plr1.pawn3,plr4,b26);
  
        plr1.checkKill(plr1.pawn3,plr3,b28);
        plr1.checkKill(plr1.pawn3,plr2,b28);
        plr1.checkKill(plr1.pawn3,plr4,b28);
        
        plr1.checkKill(plr1.pawn3,plr2,b27);
        plr1.checkKill(plr1.pawn3,plr3,b27);
        plr1.checkKill(plr1.pawn3,plr4,b27);          
          
        }else if(rand === 2){
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);

          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b11);
          plr1.checkKill(plr1.pawn3,plr2,b11);
          plr1.checkKill(plr1.pawn3,plr4,b11);
          
          plr1.checkKill(plr1.pawn3,plr3,b1);
          plr1.checkKill(plr1.pawn3,plr2,b1);
          plr1.checkKill(plr1.pawn3,plr4,b1);
    
          plr1.checkKill(plr1.pawn3,plr3,b2);
          plr1.checkKill(plr1.pawn3,plr2,b2);
          plr1.checkKill(plr1.pawn3,plr4,b2);
          
          plr1.checkKill(plr1.pawn3,plr3,b4);
          plr1.checkKill(plr1.pawn3,plr2,b4);
          plr1.checkKill(plr1.pawn3,plr4,b4);
          
          plr1.checkKill(plr1.pawn3,plr3,b5);
          plr1.checkKill(plr1.pawn3,plr2,b5);
          plr1.checkKill(plr1.pawn3,plr4,b5);
  
          plr1.checkKill(plr1.pawn3,plr3,b6);
          plr1.checkKill(plr1.pawn3,plr2,b6);
          plr1.checkKill(plr1.pawn3,plr4,b6);
  
          plr1.checkKill(plr1.pawn3,plr3,b8);
          plr1.checkKill(plr1.pawn3,plr2,b8);
          plr1.checkKill(plr1.pawn3,plr4,b8);
        
          plr1.checkKill(plr1.pawn3,plr3,b9);
          plr1.checkKill(plr1.pawn3,plr2,b9);
          plr1.checkKill(plr1.pawn3,plr4,b9);
  
          plr1.checkKill(plr1.pawn3,plr3,b12);
          plr1.checkKill(plr1.pawn3,plr2,b12);
          plr1.checkKill(plr1.pawn3,plr4,b12);
    
          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b15);
          plr1.checkKill(plr1.pawn3,plr2,b15);
          plr1.checkKill(plr1.pawn3,plr4,b15);
        
          plr1.checkKill(plr1.pawn3,plr3,b16);
          plr1.checkKill(plr1.pawn3,plr2,b16);
          plr1.checkKill(plr1.pawn3,plr4,b16);
    
          plr1.checkKill(plr1.pawn3,plr3,b18);
          plr1.checkKill(plr1.pawn3,plr2,b18);
          plr1.checkKill(plr1.pawn3,plr4,b18);
    
          plr1.checkKill(plr1.pawn3,plr3,b19);
          plr1.checkKill(plr1.pawn3,plr2,b19);
          plr1.checkKill(plr1.pawn3,plr4,b19);
  
          plr1.checkKill(plr1.pawn3,plr3,b20);
          plr1.checkKill(plr1.pawn3,plr2,b20);
          plr1.checkKill(plr1.pawn3,plr4,b20);
  
          plr1.checkKill(plr1.pawn3,plr3,b21);
          plr1.checkKill(plr1.pawn3,plr2,b21);
          plr1.checkKill(plr1.pawn3,plr4,b21);
  
          plr1.checkKill(plr1.pawn3,plr3,b22);
          plr1.checkKill(plr1.pawn3,plr2,b22);
          plr1.checkKill(plr1.pawn3,plr4,b22);
  
          plr1.checkKill(plr1.pawn3,plr3,b23);
          plr1.checkKill(plr1.pawn3,plr2,b23);
          plr1.checkKill(plr1.pawn3,plr4,b23);
          
          plr1.checkKill(plr1.pawn3,plr3,b24);
          plr1.checkKill(plr1.pawn3,plr2,b24);
          plr1.checkKill(plr1.pawn3,plr4,b24);
          
          plr1.checkKill(plr1.pawn3,plr3,b25);
          plr1.checkKill(plr1.pawn3,plr2,b25);
          plr1.checkKill(plr1.pawn3,plr4,b25);
  
          plr1.checkKill(plr1.pawn3,plr3,b26);
          plr1.checkKill(plr1.pawn3,plr2,b26);
          plr1.checkKill(plr1.pawn3,plr4,b26);
    
          plr1.checkKill(plr1.pawn3,plr3,b28);
          plr1.checkKill(plr1.pawn3,plr2,b28);
          plr1.checkKill(plr1.pawn3,plr4,b28);
          
          plr1.checkKill(plr1.pawn3,plr2,b27);
          plr1.checkKill(plr1.pawn3,plr3,b27);
          plr1.checkKill(plr1.pawn3,plr4,b27);

        }else if(rand === 3){
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          
          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b11);
          plr1.checkKill(plr1.pawn3,plr2,b11);
          plr1.checkKill(plr1.pawn3,plr4,b11);
          
          plr1.checkKill(plr1.pawn3,plr3,b1);
          plr1.checkKill(plr1.pawn3,plr2,b1);
          plr1.checkKill(plr1.pawn3,plr4,b1);
    
          plr1.checkKill(plr1.pawn3,plr3,b2);
          plr1.checkKill(plr1.pawn3,plr2,b2);
          plr1.checkKill(plr1.pawn3,plr4,b2);
          
          plr1.checkKill(plr1.pawn3,plr3,b4);
          plr1.checkKill(plr1.pawn3,plr2,b4);
          plr1.checkKill(plr1.pawn3,plr4,b4);
          
          plr1.checkKill(plr1.pawn3,plr3,b5);
          plr1.checkKill(plr1.pawn3,plr2,b5);
          plr1.checkKill(plr1.pawn3,plr4,b5);
  
          plr1.checkKill(plr1.pawn3,plr3,b6);
          plr1.checkKill(plr1.pawn3,plr2,b6);
          plr1.checkKill(plr1.pawn3,plr4,b6);
  
          plr1.checkKill(plr1.pawn3,plr3,b8);
          plr1.checkKill(plr1.pawn3,plr2,b8);
          plr1.checkKill(plr1.pawn3,plr4,b8);
        
          plr1.checkKill(plr1.pawn3,plr3,b9);
          plr1.checkKill(plr1.pawn3,plr2,b9);
          plr1.checkKill(plr1.pawn3,plr4,b9);

          plr1.checkKill(plr1.pawn3,plr3,b12);
          plr1.checkKill(plr1.pawn3,plr2,b12);
          plr1.checkKill(plr1.pawn3,plr4,b12);
    
          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b15);
          plr1.checkKill(plr1.pawn3,plr2,b15);
          plr1.checkKill(plr1.pawn3,plr4,b15);
        
          plr1.checkKill(plr1.pawn3,plr3,b16);
          plr1.checkKill(plr1.pawn3,plr2,b16);
          plr1.checkKill(plr1.pawn3,plr4,b16);
    
          plr1.checkKill(plr1.pawn3,plr3,b18);
          plr1.checkKill(plr1.pawn3,plr2,b18);
          plr1.checkKill(plr1.pawn3,plr4,b18);
    
          plr1.checkKill(plr1.pawn3,plr3,b19);
          plr1.checkKill(plr1.pawn3,plr2,b19);
          plr1.checkKill(plr1.pawn3,plr4,b19);
  
          plr1.checkKill(plr1.pawn3,plr3,b20);
          plr1.checkKill(plr1.pawn3,plr2,b20);
          plr1.checkKill(plr1.pawn3,plr4,b20);
  
          plr1.checkKill(plr1.pawn3,plr3,b21);
          plr1.checkKill(plr1.pawn3,plr2,b21);
          plr1.checkKill(plr1.pawn3,plr4,b21);
  
          plr1.checkKill(plr1.pawn3,plr3,b22);
          plr1.checkKill(plr1.pawn3,plr2,b22);
          plr1.checkKill(plr1.pawn3,plr4,b22);
  
          plr1.checkKill(plr1.pawn3,plr3,b23);
          plr1.checkKill(plr1.pawn3,plr2,b23);
          plr1.checkKill(plr1.pawn3,plr4,b23);
          
          plr1.checkKill(plr1.pawn3,plr3,b24);
          plr1.checkKill(plr1.pawn3,plr2,b24);
          plr1.checkKill(plr1.pawn3,plr4,b24);
          
          plr1.checkKill(plr1.pawn3,plr3,b25);
          plr1.checkKill(plr1.pawn3,plr2,b25);
          plr1.checkKill(plr1.pawn3,plr4,b25);
  
          plr1.checkKill(plr1.pawn3,plr3,b26);
          plr1.checkKill(plr1.pawn3,plr2,b26);
          plr1.checkKill(plr1.pawn3,plr4,b26);
    
          plr1.checkKill(plr1.pawn3,plr3,b28);
          plr1.checkKill(plr1.pawn3,plr2,b28);
          plr1.checkKill(plr1.pawn3,plr4,b28);
          
          plr1.checkKill(plr1.pawn3,plr2,b27);
          plr1.checkKill(plr1.pawn3,plr3,b27);
          plr1.checkKill(plr1.pawn3,plr4,b27);
    
        }else if(rand === 4){
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);

          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b11);
          plr1.checkKill(plr1.pawn3,plr2,b11);
          plr1.checkKill(plr1.pawn3,plr4,b11);
          
          plr1.checkKill(plr1.pawn3,plr3,b1);
          plr1.checkKill(plr1.pawn3,plr2,b1);
          plr1.checkKill(plr1.pawn3,plr4,b1);
    
          plr1.checkKill(plr1.pawn3,plr3,b2);
          plr1.checkKill(plr1.pawn3,plr2,b2);
          plr1.checkKill(plr1.pawn3,plr4,b2);
          
          plr1.checkKill(plr1.pawn3,plr3,b4);
          plr1.checkKill(plr1.pawn3,plr2,b4);
          plr1.checkKill(plr1.pawn3,plr4,b4);
          
          plr1.checkKill(plr1.pawn3,plr3,b5);
          plr1.checkKill(plr1.pawn3,plr2,b5);
          plr1.checkKill(plr1.pawn3,plr4,b5);
  
          plr1.checkKill(plr1.pawn3,plr3,b6);
          plr1.checkKill(plr1.pawn3,plr2,b6);
          plr1.checkKill(plr1.pawn3,plr4,b6);
  
          plr1.checkKill(plr1.pawn3,plr3,b8);
          plr1.checkKill(plr1.pawn3,plr2,b8);
          plr1.checkKill(plr1.pawn3,plr4,b8);
        
          plr1.checkKill(plr1.pawn3,plr3,b9);
          plr1.checkKill(plr1.pawn3,plr2,b9);
          plr1.checkKill(plr1.pawn3,plr4,b9);
 
          plr1.checkKill(plr1.pawn3,plr3,b12);
          plr1.checkKill(plr1.pawn3,plr2,b12);
          plr1.checkKill(plr1.pawn3,plr4,b12);
    
          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b15);
          plr1.checkKill(plr1.pawn3,plr2,b15);
          plr1.checkKill(plr1.pawn3,plr4,b15);
        
          plr1.checkKill(plr1.pawn3,plr3,b16);
          plr1.checkKill(plr1.pawn3,plr2,b16);
          plr1.checkKill(plr1.pawn3,plr4,b16);
    
          plr1.checkKill(plr1.pawn3,plr3,b18);
          plr1.checkKill(plr1.pawn3,plr2,b18);
          plr1.checkKill(plr1.pawn3,plr4,b18);
    
          plr1.checkKill(plr1.pawn3,plr3,b19);
          plr1.checkKill(plr1.pawn3,plr2,b19);
          plr1.checkKill(plr1.pawn3,plr4,b19);
  
          plr1.checkKill(plr1.pawn3,plr3,b20);
          plr1.checkKill(plr1.pawn3,plr2,b20);
          plr1.checkKill(plr1.pawn3,plr4,b20);
  
          plr1.checkKill(plr1.pawn3,plr3,b21);
          plr1.checkKill(plr1.pawn3,plr2,b21);
          plr1.checkKill(plr1.pawn3,plr4,b21);
  
          plr1.checkKill(plr1.pawn3,plr3,b22);
          plr1.checkKill(plr1.pawn3,plr2,b22);
          plr1.checkKill(plr1.pawn3,plr4,b22);
  
          plr1.checkKill(plr1.pawn3,plr3,b23);
          plr1.checkKill(plr1.pawn3,plr2,b23);
          plr1.checkKill(plr1.pawn3,plr4,b23);
          
          plr1.checkKill(plr1.pawn3,plr3,b24);
          plr1.checkKill(plr1.pawn3,plr2,b24);
          plr1.checkKill(plr1.pawn3,plr4,b24);
          
          plr1.checkKill(plr1.pawn3,plr3,b25);
          plr1.checkKill(plr1.pawn3,plr2,b25);
          plr1.checkKill(plr1.pawn3,plr4,b25);
  
          plr1.checkKill(plr1.pawn3,plr3,b26);
          plr1.checkKill(plr1.pawn3,plr2,b26);
          plr1.checkKill(plr1.pawn3,plr4,b26);
    
          plr1.checkKill(plr1.pawn3,plr3,b28);
          plr1.checkKill(plr1.pawn3,plr2,b28);
          plr1.checkKill(plr1.pawn3,plr4,b28);
          
          plr1.checkKill(plr1.pawn3,plr2,b27);
          plr1.checkKill(plr1.pawn3,plr3,b27);
          plr1.checkKill(plr1.pawn3,plr4,b27);
    
        }else if(rand === 5){
          plr1.moveForward(plr1.pawn3);

          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b11);
          plr1.checkKill(plr1.pawn3,plr2,b11);
          plr1.checkKill(plr1.pawn3,plr4,b11);
          
          plr1.checkKill(plr1.pawn3,plr3,b1);
          plr1.checkKill(plr1.pawn3,plr2,b1);
          plr1.checkKill(plr1.pawn3,plr4,b1);
    
          plr1.checkKill(plr1.pawn3,plr3,b2);
          plr1.checkKill(plr1.pawn3,plr2,b2);
          plr1.checkKill(plr1.pawn3,plr4,b2);
          
          plr1.checkKill(plr1.pawn3,plr3,b4);
          plr1.checkKill(plr1.pawn3,plr2,b4);
          plr1.checkKill(plr1.pawn3,plr4,b4);
          
          plr1.checkKill(plr1.pawn3,plr3,b5);
          plr1.checkKill(plr1.pawn3,plr2,b5);
          plr1.checkKill(plr1.pawn3,plr4,b5);
  
          plr1.checkKill(plr1.pawn3,plr3,b6);
          plr1.checkKill(plr1.pawn3,plr2,b6);
          plr1.checkKill(plr1.pawn3,plr4,b6);
  
          plr1.checkKill(plr1.pawn3,plr3,b8);
          plr1.checkKill(plr1.pawn3,plr2,b8);
          plr1.checkKill(plr1.pawn3,plr4,b8);
        
          plr1.checkKill(plr1.pawn3,plr3,b9);
          plr1.checkKill(plr1.pawn3,plr2,b9);
          plr1.checkKill(plr1.pawn3,plr4,b9);
 
          plr1.checkKill(plr1.pawn3,plr3,b12);
          plr1.checkKill(plr1.pawn3,plr2,b12);
          plr1.checkKill(plr1.pawn3,plr4,b12);
    
          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b15);
          plr1.checkKill(plr1.pawn3,plr2,b15);
          plr1.checkKill(plr1.pawn3,plr4,b15);
        
          plr1.checkKill(plr1.pawn3,plr3,b16);
          plr1.checkKill(plr1.pawn3,plr2,b16);
          plr1.checkKill(plr1.pawn3,plr4,b16);
    
          plr1.checkKill(plr1.pawn3,plr3,b18);
          plr1.checkKill(plr1.pawn3,plr2,b18);
          plr1.checkKill(plr1.pawn3,plr4,b18);
    
          plr1.checkKill(plr1.pawn3,plr3,b19);
          plr1.checkKill(plr1.pawn3,plr2,b19);
          plr1.checkKill(plr1.pawn3,plr4,b19);
  
          plr1.checkKill(plr1.pawn3,plr3,b20);
          plr1.checkKill(plr1.pawn3,plr2,b20);
          plr1.checkKill(plr1.pawn3,plr4,b20);
  
          plr1.checkKill(plr1.pawn3,plr3,b21);
          plr1.checkKill(plr1.pawn3,plr2,b21);
          plr1.checkKill(plr1.pawn3,plr4,b21);
  
          plr1.checkKill(plr1.pawn3,plr3,b22);
          plr1.checkKill(plr1.pawn3,plr2,b22);
          plr1.checkKill(plr1.pawn3,plr4,b22);
  
          plr1.checkKill(plr1.pawn3,plr3,b23);
          plr1.checkKill(plr1.pawn3,plr2,b23);
          plr1.checkKill(plr1.pawn3,plr4,b23);
          
          plr1.checkKill(plr1.pawn3,plr3,b24);
          plr1.checkKill(plr1.pawn3,plr2,b24);
          plr1.checkKill(plr1.pawn3,plr4,b24);
          
          plr1.checkKill(plr1.pawn3,plr3,b25);
          plr1.checkKill(plr1.pawn3,plr2,b25);
          plr1.checkKill(plr1.pawn3,plr4,b25);
  
          plr1.checkKill(plr1.pawn3,plr3,b26);
          plr1.checkKill(plr1.pawn3,plr2,b26);
          plr1.checkKill(plr1.pawn3,plr4,b26);
    
          plr1.checkKill(plr1.pawn3,plr3,b28);
          plr1.checkKill(plr1.pawn3,plr2,b28);
          plr1.checkKill(plr1.pawn3,plr4,b28);
          
          plr1.checkKill(plr1.pawn3,plr2,b27);
          plr1.checkKill(plr1.pawn3,plr3,b27);
          plr1.checkKill(plr1.pawn3,plr4,b27);
    
        }else if(rand === 6){
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);

          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b11);
          plr1.checkKill(plr1.pawn3,plr2,b11);
          plr1.checkKill(plr1.pawn3,plr4,b11);
          
          plr1.checkKill(plr1.pawn3,plr3,b1);
          plr1.checkKill(plr1.pawn3,plr2,b1);
          plr1.checkKill(plr1.pawn3,plr4,b1);
    
          plr1.checkKill(plr1.pawn3,plr3,b2);
          plr1.checkKill(plr1.pawn3,plr2,b2);
          plr1.checkKill(plr1.pawn3,plr4,b2);
          
          plr1.checkKill(plr1.pawn3,plr3,b4);
          plr1.checkKill(plr1.pawn3,plr2,b4);
          plr1.checkKill(plr1.pawn3,plr4,b4);
          
          plr1.checkKill(plr1.pawn3,plr3,b5);
          plr1.checkKill(plr1.pawn3,plr2,b5);
          plr1.checkKill(plr1.pawn3,plr4,b5);
  
          plr1.checkKill(plr1.pawn3,plr3,b6);
          plr1.checkKill(plr1.pawn3,plr2,b6);
          plr1.checkKill(plr1.pawn3,plr4,b6);
  
          plr1.checkKill(plr1.pawn3,plr3,b8);
          plr1.checkKill(plr1.pawn3,plr2,b8);
          plr1.checkKill(plr1.pawn3,plr4,b8);
        
          plr1.checkKill(plr1.pawn3,plr3,b9);
          plr1.checkKill(plr1.pawn3,plr2,b9);
          plr1.checkKill(plr1.pawn3,plr4,b9);

          plr1.checkKill(plr1.pawn3,plr3,b12);
          plr1.checkKill(plr1.pawn3,plr2,b12);
          plr1.checkKill(plr1.pawn3,plr4,b12);
    
          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b15);
          plr1.checkKill(plr1.pawn3,plr2,b15);
          plr1.checkKill(plr1.pawn3,plr4,b15);
        
          plr1.checkKill(plr1.pawn3,plr3,b16);
          plr1.checkKill(plr1.pawn3,plr2,b16);
          plr1.checkKill(plr1.pawn3,plr4,b16);
    
          plr1.checkKill(plr1.pawn3,plr3,b18);
          plr1.checkKill(plr1.pawn3,plr2,b18);
          plr1.checkKill(plr1.pawn3,plr4,b18);
    
          plr1.checkKill(plr1.pawn3,plr3,b19);
          plr1.checkKill(plr1.pawn3,plr2,b19);
          plr1.checkKill(plr1.pawn3,plr4,b19);
  
          plr1.checkKill(plr1.pawn3,plr3,b20);
          plr1.checkKill(plr1.pawn3,plr2,b20);
          plr1.checkKill(plr1.pawn3,plr4,b20);
  
          plr1.checkKill(plr1.pawn3,plr3,b21);
          plr1.checkKill(plr1.pawn3,plr2,b21);
          plr1.checkKill(plr1.pawn3,plr4,b21);
  
          plr1.checkKill(plr1.pawn3,plr3,b22);
          plr1.checkKill(plr1.pawn3,plr2,b22);
          plr1.checkKill(plr1.pawn3,plr4,b22);
  
          plr1.checkKill(plr1.pawn3,plr3,b23);
          plr1.checkKill(plr1.pawn3,plr2,b23);
          plr1.checkKill(plr1.pawn3,plr4,b23);
          
          plr1.checkKill(plr1.pawn3,plr3,b24);
          plr1.checkKill(plr1.pawn3,plr2,b24);
          plr1.checkKill(plr1.pawn3,plr4,b24);
          
          plr1.checkKill(plr1.pawn3,plr3,b25);
          plr1.checkKill(plr1.pawn3,plr2,b25);
          plr1.checkKill(plr1.pawn3,plr4,b25);
  
          plr1.checkKill(plr1.pawn3,plr3,b26);
          plr1.checkKill(plr1.pawn3,plr2,b26);
          plr1.checkKill(plr1.pawn3,plr4,b26);
    
          plr1.checkKill(plr1.pawn3,plr3,b28);
          plr1.checkKill(plr1.pawn3,plr2,b28);
          plr1.checkKill(plr1.pawn3,plr4,b28);
          
          plr1.checkKill(plr1.pawn3,plr2,b27);
          plr1.checkKill(plr1.pawn3,plr3,b27);
          plr1.checkKill(plr1.pawn3,plr4,b27);

        }else if(rand === 7){
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b11);
          plr1.checkKill(plr1.pawn3,plr2,b11);
          plr1.checkKill(plr1.pawn3,plr4,b11);
          
          plr1.checkKill(plr1.pawn3,plr3,b1);
          plr1.checkKill(plr1.pawn3,plr2,b1);
          plr1.checkKill(plr1.pawn3,plr4,b1);
    
          plr1.checkKill(plr1.pawn3,plr3,b2);
          plr1.checkKill(plr1.pawn3,plr2,b2);
          plr1.checkKill(plr1.pawn3,plr4,b2);
          
          plr1.checkKill(plr1.pawn3,plr3,b4);
          plr1.checkKill(plr1.pawn3,plr2,b4);
          plr1.checkKill(plr1.pawn3,plr4,b4);
          
          plr1.checkKill(plr1.pawn3,plr3,b5);
          plr1.checkKill(plr1.pawn3,plr2,b5);
          plr1.checkKill(plr1.pawn3,plr4,b5);
  
          plr1.checkKill(plr1.pawn3,plr3,b6);
          plr1.checkKill(plr1.pawn3,plr2,b6);
          plr1.checkKill(plr1.pawn3,plr4,b6);
  
          plr1.checkKill(plr1.pawn3,plr3,b8);
          plr1.checkKill(plr1.pawn3,plr2,b8);
          plr1.checkKill(plr1.pawn3,plr4,b8);
        
          plr1.checkKill(plr1.pawn3,plr3,b9);
          plr1.checkKill(plr1.pawn3,plr2,b9);
          plr1.checkKill(plr1.pawn3,plr4,b9);
  
          plr1.checkKill(plr1.pawn3,plr3,b12);
          plr1.checkKill(plr1.pawn3,plr2,b12);
          plr1.checkKill(plr1.pawn3,plr4,b12);
    
          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b15);
          plr1.checkKill(plr1.pawn3,plr2,b15);
          plr1.checkKill(plr1.pawn3,plr4,b15);
        
          plr1.checkKill(plr1.pawn3,plr3,b16);
          plr1.checkKill(plr1.pawn3,plr2,b16);
          plr1.checkKill(plr1.pawn3,plr4,b16);
    
          plr1.checkKill(plr1.pawn3,plr3,b18);
          plr1.checkKill(plr1.pawn3,plr2,b18);
          plr1.checkKill(plr1.pawn3,plr4,b18);
    
          plr1.checkKill(plr1.pawn3,plr3,b19);
          plr1.checkKill(plr1.pawn3,plr2,b19);
          plr1.checkKill(plr1.pawn3,plr4,b19);
  
          plr1.checkKill(plr1.pawn3,plr3,b20);
          plr1.checkKill(plr1.pawn3,plr2,b20);
          plr1.checkKill(plr1.pawn3,plr4,b20);
  
          plr1.checkKill(plr1.pawn3,plr3,b21);
          plr1.checkKill(plr1.pawn3,plr2,b21);
          plr1.checkKill(plr1.pawn3,plr4,b21);
  
          plr1.checkKill(plr1.pawn3,plr3,b22);
          plr1.checkKill(plr1.pawn3,plr2,b22);
          plr1.checkKill(plr1.pawn3,plr4,b22);
  
          plr1.checkKill(plr1.pawn3,plr3,b23);
          plr1.checkKill(plr1.pawn3,plr2,b23);
          plr1.checkKill(plr1.pawn3,plr4,b23);
          
          plr1.checkKill(plr1.pawn3,plr3,b24);
          plr1.checkKill(plr1.pawn3,plr2,b24);
          plr1.checkKill(plr1.pawn3,plr4,b24);
          
          plr1.checkKill(plr1.pawn3,plr3,b25);
          plr1.checkKill(plr1.pawn3,plr2,b25);
          plr1.checkKill(plr1.pawn3,plr4,b25);
  
          plr1.checkKill(plr1.pawn3,plr3,b26);
          plr1.checkKill(plr1.pawn3,plr2,b26);
          plr1.checkKill(plr1.pawn3,plr4,b26);
    
          plr1.checkKill(plr1.pawn3,plr3,b28);
          plr1.checkKill(plr1.pawn3,plr2,b28);
          plr1.checkKill(plr1.pawn3,plr4,b28);
          
          plr1.checkKill(plr1.pawn3,plr2,b27);
          plr1.checkKill(plr1.pawn3,plr3,b27);
          plr1.checkKill(plr1.pawn3,plr4,b27);

        }else if(rand === 8){
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);
          plr1.moveForward(plr1.pawn3);

          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b11);
          plr1.checkKill(plr1.pawn3,plr2,b11);
          plr1.checkKill(plr1.pawn3,plr4,b11);
          
          plr1.checkKill(plr1.pawn3,plr3,b1);
          plr1.checkKill(plr1.pawn3,plr2,b1);
          plr1.checkKill(plr1.pawn3,plr4,b1);
    
          plr1.checkKill(plr1.pawn3,plr3,b2);
          plr1.checkKill(plr1.pawn3,plr2,b2);
          plr1.checkKill(plr1.pawn3,plr4,b2);
          
          plr1.checkKill(plr1.pawn3,plr3,b4);
          plr1.checkKill(plr1.pawn3,plr2,b4);
          plr1.checkKill(plr1.pawn3,plr4,b4);
          
          plr1.checkKill(plr1.pawn3,plr3,b5);
          plr1.checkKill(plr1.pawn3,plr2,b5);
          plr1.checkKill(plr1.pawn3,plr4,b5);
  
          plr1.checkKill(plr1.pawn3,plr3,b6);
          plr1.checkKill(plr1.pawn3,plr2,b6);
          plr1.checkKill(plr1.pawn3,plr4,b6);
  
          plr1.checkKill(plr1.pawn3,plr3,b8);
          plr1.checkKill(plr1.pawn3,plr2,b8);
          plr1.checkKill(plr1.pawn3,plr4,b8);
        
          plr1.checkKill(plr1.pawn3,plr3,b9);
          plr1.checkKill(plr1.pawn3,plr2,b9);
          plr1.checkKill(plr1.pawn3,plr4,b9);
  
          plr1.checkKill(plr1.pawn3,plr3,b12);
          plr1.checkKill(plr1.pawn3,plr2,b12);
          plr1.checkKill(plr1.pawn3,plr4,b12);
    
          plr1.checkKill(plr1.pawn3,plr3,b14);
          plr1.checkKill(plr1.pawn3,plr2,b14);
          plr1.checkKill(plr1.pawn3,plr4,b14);
  
          plr1.checkKill(plr1.pawn3,plr3,b15);
          plr1.checkKill(plr1.pawn3,plr2,b15);
          plr1.checkKill(plr1.pawn3,plr4,b15);
        
          plr1.checkKill(plr1.pawn3,plr3,b16);
          plr1.checkKill(plr1.pawn3,plr2,b16);
          plr1.checkKill(plr1.pawn3,plr4,b16);
    
          plr1.checkKill(plr1.pawn3,plr3,b18);
          plr1.checkKill(plr1.pawn3,plr2,b18);
          plr1.checkKill(plr1.pawn3,plr4,b18);
    
          plr1.checkKill(plr1.pawn3,plr3,b19);
          plr1.checkKill(plr1.pawn3,plr2,b19);
          plr1.checkKill(plr1.pawn3,plr4,b19);
  
          plr1.checkKill(plr1.pawn3,plr3,b20);
          plr1.checkKill(plr1.pawn3,plr2,b20);
          plr1.checkKill(plr1.pawn3,plr4,b20);
  
          plr1.checkKill(plr1.pawn3,plr3,b21);
          plr1.checkKill(plr1.pawn3,plr2,b21);
          plr1.checkKill(plr1.pawn3,plr4,b21);
  
          plr1.checkKill(plr1.pawn3,plr3,b22);
          plr1.checkKill(plr1.pawn3,plr2,b22);
          plr1.checkKill(plr1.pawn3,plr4,b22);
  
          plr1.checkKill(plr1.pawn3,plr3,b23);
          plr1.checkKill(plr1.pawn3,plr2,b23);
          plr1.checkKill(plr1.pawn3,plr4,b23);
          
          plr1.checkKill(plr1.pawn3,plr3,b24);
          plr1.checkKill(plr1.pawn3,plr2,b24);
          plr1.checkKill(plr1.pawn3,plr4,b24);
          
          plr1.checkKill(plr1.pawn3,plr3,b25);
          plr1.checkKill(plr1.pawn3,plr2,b25);
          plr1.checkKill(plr1.pawn3,plr4,b25);
  
          plr1.checkKill(plr1.pawn3,plr3,b26);
          plr1.checkKill(plr1.pawn3,plr2,b26);
          plr1.checkKill(plr1.pawn3,plr4,b26);
    
          plr1.checkKill(plr1.pawn3,plr3,b28);
          plr1.checkKill(plr1.pawn3,plr2,b28);
          plr1.checkKill(plr1.pawn3,plr4,b28);
          
          plr1.checkKill(plr1.pawn3,plr2,b27);
          plr1.checkKill(plr1.pawn3,plr3,b27);
          plr1.checkKill(plr1.pawn3,plr4,b27);

        }})
        

        pawn4.mousePressed(() => {
    
          rand = floor(random(1,8));
          console.log(rand);
      
          if(rand === 1){
            plr1.moveForward(plr1.pawn4);

            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);

            plr1.checkKill(plr1.pawn4,plr3,b11);
            plr1.checkKill(plr1.pawn4,plr2,b11);
            plr1.checkKill(plr1.pawn4,plr4,b11);
            
            plr1.checkKill(plr1.pawn4,plr3,b1);
            plr1.checkKill(plr1.pawn4,plr2,b1);
            plr1.checkKill(plr1.pawn4,plr4,b1);
      
            plr1.checkKill(plr1.pawn4,plr3,b2);
            plr1.checkKill(plr1.pawn4,plr2,b2);
            plr1.checkKill(plr1.pawn4,plr4,b2);
            
            plr1.checkKill(plr1.pawn4,plr3,b4);
            plr1.checkKill(plr1.pawn4,plr2,b4);
            plr1.checkKill(plr1.pawn4,plr4,b4);
            
            plr1.checkKill(plr1.pawn4,plr3,b5);
            plr1.checkKill(plr1.pawn4,plr2,b5);
            plr1.checkKill(plr1.pawn4,plr4,b5);
    
            plr1.checkKill(plr1.pawn4,plr3,b6);
            plr1.checkKill(plr1.pawn4,plr2,b6);
            plr1.checkKill(plr1.pawn4,plr4,b6);
    
            plr1.checkKill(plr1.pawn4,plr3,b8);
            plr1.checkKill(plr1.pawn4,plr2,b8);
            plr1.checkKill(plr1.pawn4,plr4,b8);
          
            plr1.checkKill(plr1.pawn4,plr3,b9);
            plr1.checkKill(plr1.pawn4,plr2,b9);
            plr1.checkKill(plr1.pawn4,plr4,b9);
    
            plr1.checkKill(plr1.pawn4,plr3,b12);
            plr1.checkKill(plr1.pawn4,plr2,b12);
            plr1.checkKill(plr1.pawn4,plr4,b12);
      
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b15);
            plr1.checkKill(plr1.pawn4,plr2,b15);
            plr1.checkKill(plr1.pawn4,plr4,b15);
          
            plr1.checkKill(plr1.pawn4,plr3,b16);
            plr1.checkKill(plr1.pawn4,plr2,b16);
            plr1.checkKill(plr1.pawn4,plr4,b16);
      
            plr1.checkKill(plr1.pawn4,plr3,b18);
            plr1.checkKill(plr1.pawn4,plr2,b18);
            plr1.checkKill(plr1.pawn4,plr4,b18);
      
            plr1.checkKill(plr1.pawn4,plr3,b19);
            plr1.checkKill(plr1.pawn4,plr2,b19);
            plr1.checkKill(plr1.pawn4,plr4,b19);
    
            plr1.checkKill(plr1.pawn4,plr3,b20);
            plr1.checkKill(plr1.pawn4,plr2,b20);
            plr1.checkKill(plr1.pawn4,plr4,b20);
    
            plr1.checkKill(plr1.pawn4,plr3,b21);
            plr1.checkKill(plr1.pawn4,plr2,b21);
            plr1.checkKill(plr1.pawn4,plr4,b21);
    
            plr1.checkKill(plr1.pawn4,plr3,b22);
            plr1.checkKill(plr1.pawn4,plr2,b22);
            plr1.checkKill(plr1.pawn4,plr4,b22);
    
            plr1.checkKill(plr1.pawn4,plr3,b23);
            plr1.checkKill(plr1.pawn4,plr2,b23);
            plr1.checkKill(plr1.pawn4,plr4,b23);
            
            plr1.checkKill(plr1.pawn4,plr3,b24);
            plr1.checkKill(plr1.pawn4,plr2,b24);
            plr1.checkKill(plr1.pawn4,plr4,b24);
            
            plr1.checkKill(plr1.pawn4,plr3,b25);
            plr1.checkKill(plr1.pawn4,plr2,b25);
            plr1.checkKill(plr1.pawn4,plr4,b25);
    
            plr1.checkKill(plr1.pawn4,plr3,b26);
            plr1.checkKill(plr1.pawn4,plr2,b26);
            plr1.checkKill(plr1.pawn4,plr4,b26);
      
            plr1.checkKill(plr1.pawn4,plr3,b28);
            plr1.checkKill(plr1.pawn4,plr2,b28);
            plr1.checkKill(plr1.pawn4,plr4,b28);
            
            plr1.checkKill(plr1.pawn4,plr2,b27);
            plr1.checkKill(plr1.pawn4,plr3,b27);
            plr1.checkKill(plr1.pawn4,plr4,b27);
            
          }else if(rand === 2){
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b11);
            plr1.checkKill(plr1.pawn4,plr2,b11);
            plr1.checkKill(plr1.pawn4,plr4,b11);
            
            plr1.checkKill(plr1.pawn4,plr3,b1);
            plr1.checkKill(plr1.pawn4,plr2,b1);
            plr1.checkKill(plr1.pawn4,plr4,b1);
      
            plr1.checkKill(plr1.pawn4,plr3,b2);
            plr1.checkKill(plr1.pawn4,plr2,b2);
            plr1.checkKill(plr1.pawn4,plr4,b2);
            
            plr1.checkKill(plr1.pawn4,plr3,b4);
            plr1.checkKill(plr1.pawn4,plr2,b4);
            plr1.checkKill(plr1.pawn4,plr4,b4);
            
            plr1.checkKill(plr1.pawn4,plr3,b5);
            plr1.checkKill(plr1.pawn4,plr2,b5);
            plr1.checkKill(plr1.pawn4,plr4,b5);
    
            plr1.checkKill(plr1.pawn4,plr3,b6);
            plr1.checkKill(plr1.pawn4,plr2,b6);
            plr1.checkKill(plr1.pawn4,plr4,b6);
    
            plr1.checkKill(plr1.pawn4,plr3,b8);
            plr1.checkKill(plr1.pawn4,plr2,b8);
            plr1.checkKill(plr1.pawn4,plr4,b8);
          
            plr1.checkKill(plr1.pawn4,plr3,b9);
            plr1.checkKill(plr1.pawn4,plr2,b9);
            plr1.checkKill(plr1.pawn4,plr4,b9);
    
            plr1.checkKill(plr1.pawn4,plr3,b12);
            plr1.checkKill(plr1.pawn4,plr2,b12);
            plr1.checkKill(plr1.pawn4,plr4,b12);
      
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b15);
            plr1.checkKill(plr1.pawn4,plr2,b15);
            plr1.checkKill(plr1.pawn4,plr4,b15);
          
            plr1.checkKill(plr1.pawn4,plr3,b16);
            plr1.checkKill(plr1.pawn4,plr2,b16);
            plr1.checkKill(plr1.pawn4,plr4,b16);
      
            plr1.checkKill(plr1.pawn4,plr3,b18);
            plr1.checkKill(plr1.pawn4,plr2,b18);
            plr1.checkKill(plr1.pawn4,plr4,b18);
      
            plr1.checkKill(plr1.pawn4,plr3,b19);
            plr1.checkKill(plr1.pawn4,plr2,b19);
            plr1.checkKill(plr1.pawn4,plr4,b19);
    
            plr1.checkKill(plr1.pawn4,plr3,b20);
            plr1.checkKill(plr1.pawn4,plr2,b20);
            plr1.checkKill(plr1.pawn4,plr4,b20);
    
            plr1.checkKill(plr1.pawn4,plr3,b21);
            plr1.checkKill(plr1.pawn4,plr2,b21);
            plr1.checkKill(plr1.pawn4,plr4,b21);
    
            plr1.checkKill(plr1.pawn4,plr3,b22);
            plr1.checkKill(plr1.pawn4,plr2,b22);
            plr1.checkKill(plr1.pawn4,plr4,b22);
    
            plr1.checkKill(plr1.pawn4,plr3,b23);
            plr1.checkKill(plr1.pawn4,plr2,b23);
            plr1.checkKill(plr1.pawn4,plr4,b23);
            
            plr1.checkKill(plr1.pawn4,plr3,b24);
            plr1.checkKill(plr1.pawn4,plr2,b24);
            plr1.checkKill(plr1.pawn4,plr4,b24);
            
            plr1.checkKill(plr1.pawn4,plr3,b25);
            plr1.checkKill(plr1.pawn4,plr2,b25);
            plr1.checkKill(plr1.pawn4,plr4,b25);
    
            plr1.checkKill(plr1.pawn4,plr3,b26);
            plr1.checkKill(plr1.pawn4,plr2,b26);
            plr1.checkKill(plr1.pawn4,plr4,b26);
      
            plr1.checkKill(plr1.pawn4,plr3,b28);
            plr1.checkKill(plr1.pawn4,plr2,b28);
            plr1.checkKill(plr1.pawn4,plr4,b28);
            
            plr1.checkKill(plr1.pawn4,plr2,b27);
            plr1.checkKill(plr1.pawn4,plr3,b27);
            plr1.checkKill(plr1.pawn4,plr4,b27);
            
          }else if(rand === 3){
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);

          plr1.checkKill(plr1.pawn4,plr3,b14);
          plr1.checkKill(plr1.pawn4,plr2,b14);
          plr1.checkKill(plr1.pawn4,plr4,b14);
  
          plr1.checkKill(plr1.pawn4,plr3,b11);
          plr1.checkKill(plr1.pawn4,plr2,b11);
          plr1.checkKill(plr1.pawn4,plr4,b11);
          
          plr1.checkKill(plr1.pawn4,plr3,b1);
          plr1.checkKill(plr1.pawn4,plr2,b1);
          plr1.checkKill(plr1.pawn4,plr4,b1);
    
          plr1.checkKill(plr1.pawn4,plr3,b2);
          plr1.checkKill(plr1.pawn4,plr2,b2);
          plr1.checkKill(plr1.pawn4,plr4,b2);
          
          plr1.checkKill(plr1.pawn4,plr3,b4);
          plr1.checkKill(plr1.pawn4,plr2,b4);
          plr1.checkKill(plr1.pawn4,plr4,b4);
          
          plr1.checkKill(plr1.pawn4,plr3,b5);
          plr1.checkKill(plr1.pawn4,plr2,b5);
          plr1.checkKill(plr1.pawn4,plr4,b5);
  
          plr1.checkKill(plr1.pawn4,plr3,b6);
          plr1.checkKill(plr1.pawn4,plr2,b6);
          plr1.checkKill(plr1.pawn4,plr4,b6);
  
          plr1.checkKill(plr1.pawn4,plr3,b8);
          plr1.checkKill(plr1.pawn4,plr2,b8);
          plr1.checkKill(plr1.pawn4,plr4,b8);
        
          plr1.checkKill(plr1.pawn4,plr3,b9);
          plr1.checkKill(plr1.pawn4,plr2,b9);
          plr1.checkKill(plr1.pawn4,plr4,b9);
  
          plr1.checkKill(plr1.pawn4,plr3,b12);
          plr1.checkKill(plr1.pawn4,plr2,b12);
          plr1.checkKill(plr1.pawn4,plr4,b12);
    
          plr1.checkKill(plr1.pawn4,plr3,b14);
          plr1.checkKill(plr1.pawn4,plr2,b14);
          plr1.checkKill(plr1.pawn4,plr4,b14);
  
          plr1.checkKill(plr1.pawn4,plr3,b15);
          plr1.checkKill(plr1.pawn4,plr2,b15);
          plr1.checkKill(plr1.pawn4,plr4,b15);
        
          plr1.checkKill(plr1.pawn4,plr3,b16);
          plr1.checkKill(plr1.pawn4,plr2,b16);
          plr1.checkKill(plr1.pawn4,plr4,b16);
    
          plr1.checkKill(plr1.pawn4,plr3,b18);
          plr1.checkKill(plr1.pawn4,plr2,b18);
          plr1.checkKill(plr1.pawn4,plr4,b18);
    
          plr1.checkKill(plr1.pawn4,plr3,b19);
          plr1.checkKill(plr1.pawn4,plr2,b19);
          plr1.checkKill(plr1.pawn4,plr4,b19);
  
          plr1.checkKill(plr1.pawn4,plr3,b20);
          plr1.checkKill(plr1.pawn4,plr2,b20);
          plr1.checkKill(plr1.pawn4,plr4,b20);
  
          plr1.checkKill(plr1.pawn4,plr3,b21);
          plr1.checkKill(plr1.pawn4,plr2,b21);
          plr1.checkKill(plr1.pawn4,plr4,b21);
  
          plr1.checkKill(plr1.pawn4,plr3,b22);
          plr1.checkKill(plr1.pawn4,plr2,b22);
          plr1.checkKill(plr1.pawn4,plr4,b22);
  
          plr1.checkKill(plr1.pawn4,plr3,b23);
          plr1.checkKill(plr1.pawn4,plr2,b23);
          plr1.checkKill(plr1.pawn4,plr4,b23);
          
          plr1.checkKill(plr1.pawn4,plr3,b24);
          plr1.checkKill(plr1.pawn4,plr2,b24);
          plr1.checkKill(plr1.pawn4,plr4,b24);
          
          plr1.checkKill(plr1.pawn4,plr3,b25);
          plr1.checkKill(plr1.pawn4,plr2,b25);
          plr1.checkKill(plr1.pawn4,plr4,b25);
  
          plr1.checkKill(plr1.pawn4,plr3,b26);
          plr1.checkKill(plr1.pawn4,plr2,b26);
          plr1.checkKill(plr1.pawn4,plr4,b26);
    
          plr1.checkKill(plr1.pawn4,plr3,b28);
          plr1.checkKill(plr1.pawn4,plr2,b28);
          plr1.checkKill(plr1.pawn4,plr4,b28);
          
          plr1.checkKill(plr1.pawn4,plr2,b27);
          plr1.checkKill(plr1.pawn4,plr3,b27);
          plr1.checkKill(plr1.pawn4,plr4,b27);
          
          }else if(rand === 4){
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b11);
            plr1.checkKill(plr1.pawn4,plr2,b11);
            plr1.checkKill(plr1.pawn4,plr4,b11);
            
            plr1.checkKill(plr1.pawn4,plr3,b1);
            plr1.checkKill(plr1.pawn4,plr2,b1);
            plr1.checkKill(plr1.pawn4,plr4,b1);
      
            plr1.checkKill(plr1.pawn4,plr3,b2);
            plr1.checkKill(plr1.pawn4,plr2,b2);
            plr1.checkKill(plr1.pawn4,plr4,b2);
            
            plr1.checkKill(plr1.pawn4,plr3,b4);
            plr1.checkKill(plr1.pawn4,plr2,b4);
            plr1.checkKill(plr1.pawn4,plr4,b4);
            
            plr1.checkKill(plr1.pawn4,plr3,b5);
            plr1.checkKill(plr1.pawn4,plr2,b5);
            plr1.checkKill(plr1.pawn4,plr4,b5);
    
            plr1.checkKill(plr1.pawn4,plr3,b6);
            plr1.checkKill(plr1.pawn4,plr2,b6);
            plr1.checkKill(plr1.pawn4,plr4,b6);
    
            plr1.checkKill(plr1.pawn4,plr3,b8);
            plr1.checkKill(plr1.pawn4,plr2,b8);
            plr1.checkKill(plr1.pawn4,plr4,b8);
          
            plr1.checkKill(plr1.pawn4,plr3,b9);
            plr1.checkKill(plr1.pawn4,plr2,b9);
            plr1.checkKill(plr1.pawn4,plr4,b9);
    
            plr1.checkKill(plr1.pawn4,plr3,b12);
            plr1.checkKill(plr1.pawn4,plr2,b12);
            plr1.checkKill(plr1.pawn4,plr4,b12);
      
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b15);
            plr1.checkKill(plr1.pawn4,plr2,b15);
            plr1.checkKill(plr1.pawn4,plr4,b15);
          
            plr1.checkKill(plr1.pawn4,plr3,b16);
            plr1.checkKill(plr1.pawn4,plr2,b16);
            plr1.checkKill(plr1.pawn4,plr4,b16);
      
            plr1.checkKill(plr1.pawn4,plr3,b18);
            plr1.checkKill(plr1.pawn4,plr2,b18);
            plr1.checkKill(plr1.pawn4,plr4,b18);
      
            plr1.checkKill(plr1.pawn4,plr3,b19);
            plr1.checkKill(plr1.pawn4,plr2,b19);
            plr1.checkKill(plr1.pawn4,plr4,b19);
    
            plr1.checkKill(plr1.pawn4,plr3,b20);
            plr1.checkKill(plr1.pawn4,plr2,b20);
            plr1.checkKill(plr1.pawn4,plr4,b20);
    
            plr1.checkKill(plr1.pawn4,plr3,b21);
            plr1.checkKill(plr1.pawn4,plr2,b21);
            plr1.checkKill(plr1.pawn4,plr4,b21);
    
            plr1.checkKill(plr1.pawn4,plr3,b22);
            plr1.checkKill(plr1.pawn4,plr2,b22);
            plr1.checkKill(plr1.pawn4,plr4,b22);
    
            plr1.checkKill(plr1.pawn4,plr3,b23);
            plr1.checkKill(plr1.pawn4,plr2,b23);
            plr1.checkKill(plr1.pawn4,plr4,b23);
            
            plr1.checkKill(plr1.pawn4,plr3,b24);
            plr1.checkKill(plr1.pawn4,plr2,b24);
            plr1.checkKill(plr1.pawn4,plr4,b24);
            
            plr1.checkKill(plr1.pawn4,plr3,b25);
            plr1.checkKill(plr1.pawn4,plr2,b25);
            plr1.checkKill(plr1.pawn4,plr4,b25);
    
            plr1.checkKill(plr1.pawn4,plr3,b26);
            plr1.checkKill(plr1.pawn4,plr2,b26);
            plr1.checkKill(plr1.pawn4,plr4,b26);
      
            plr1.checkKill(plr1.pawn4,plr3,b28);
            plr1.checkKill(plr1.pawn4,plr2,b28);
            plr1.checkKill(plr1.pawn4,plr4,b28);
            
            plr1.checkKill(plr1.pawn4,plr2,b27);
            plr1.checkKill(plr1.pawn4,plr3,b27);
            plr1.checkKill(plr1.pawn4,plr4,b27);
  
      
          }else if(rand === 5){
            plr1.moveForward(plr1.pawn4);
            
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b11);
            plr1.checkKill(plr1.pawn4,plr2,b11);
            plr1.checkKill(plr1.pawn4,plr4,b11);
            
            plr1.checkKill(plr1.pawn4,plr3,b1);
            plr1.checkKill(plr1.pawn4,plr2,b1);
            plr1.checkKill(plr1.pawn4,plr4,b1);
      
            plr1.checkKill(plr1.pawn4,plr3,b2);
            plr1.checkKill(plr1.pawn4,plr2,b2);
            plr1.checkKill(plr1.pawn4,plr4,b2);
            
            plr1.checkKill(plr1.pawn4,plr3,b4);
            plr1.checkKill(plr1.pawn4,plr2,b4);
            plr1.checkKill(plr1.pawn4,plr4,b4);
            
            plr1.checkKill(plr1.pawn4,plr3,b5);
            plr1.checkKill(plr1.pawn4,plr2,b5);
            plr1.checkKill(plr1.pawn4,plr4,b5);
    
            plr1.checkKill(plr1.pawn4,plr3,b6);
            plr1.checkKill(plr1.pawn4,plr2,b6);
            plr1.checkKill(plr1.pawn4,plr4,b6);
    
            plr1.checkKill(plr1.pawn4,plr3,b8);
            plr1.checkKill(plr1.pawn4,plr2,b8);
            plr1.checkKill(plr1.pawn4,plr4,b8);
          
            plr1.checkKill(plr1.pawn4,plr3,b9);
            plr1.checkKill(plr1.pawn4,plr2,b9);
            plr1.checkKill(plr1.pawn4,plr4,b9);
    
            plr1.checkKill(plr1.pawn4,plr3,b12);
            plr1.checkKill(plr1.pawn4,plr2,b12);
            plr1.checkKill(plr1.pawn4,plr4,b12);
      
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b15);
            plr1.checkKill(plr1.pawn4,plr2,b15);
            plr1.checkKill(plr1.pawn4,plr4,b15);
          
            plr1.checkKill(plr1.pawn4,plr3,b16);
            plr1.checkKill(plr1.pawn4,plr2,b16);
            plr1.checkKill(plr1.pawn4,plr4,b16);
      
            plr1.checkKill(plr1.pawn4,plr3,b18);
            plr1.checkKill(plr1.pawn4,plr2,b18);
            plr1.checkKill(plr1.pawn4,plr4,b18);
      
            plr1.checkKill(plr1.pawn4,plr3,b19);
            plr1.checkKill(plr1.pawn4,plr2,b19);
            plr1.checkKill(plr1.pawn4,plr4,b19);
    
            plr1.checkKill(plr1.pawn4,plr3,b20);
            plr1.checkKill(plr1.pawn4,plr2,b20);
            plr1.checkKill(plr1.pawn4,plr4,b20);
    
            plr1.checkKill(plr1.pawn4,plr3,b21);
            plr1.checkKill(plr1.pawn4,plr2,b21);
            plr1.checkKill(plr1.pawn4,plr4,b21);
    
            plr1.checkKill(plr1.pawn4,plr3,b22);
            plr1.checkKill(plr1.pawn4,plr2,b22);
            plr1.checkKill(plr1.pawn4,plr4,b22);
    
            plr1.checkKill(plr1.pawn4,plr3,b23);
            plr1.checkKill(plr1.pawn4,plr2,b23);
            plr1.checkKill(plr1.pawn4,plr4,b23);
            
            plr1.checkKill(plr1.pawn4,plr3,b24);
            plr1.checkKill(plr1.pawn4,plr2,b24);
            plr1.checkKill(plr1.pawn4,plr4,b24);
            
            plr1.checkKill(plr1.pawn4,plr3,b25);
            plr1.checkKill(plr1.pawn4,plr2,b25);
            plr1.checkKill(plr1.pawn4,plr4,b25);
    
            plr1.checkKill(plr1.pawn4,plr3,b26);
            plr1.checkKill(plr1.pawn4,plr2,b26);
            plr1.checkKill(plr1.pawn4,plr4,b26);
      
            plr1.checkKill(plr1.pawn4,plr3,b28);
            plr1.checkKill(plr1.pawn4,plr2,b28);
            plr1.checkKill(plr1.pawn4,plr4,b28);
            
            plr1.checkKill(plr1.pawn4,plr2,b27);
            plr1.checkKill(plr1.pawn4,plr3,b27);
            plr1.checkKill(plr1.pawn4,plr4,b27);
      
          }else if(rand === 6){
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);

            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b11);
            plr1.checkKill(plr1.pawn4,plr2,b11);
            plr1.checkKill(plr1.pawn4,plr4,b11);
            
            plr1.checkKill(plr1.pawn4,plr3,b1);
            plr1.checkKill(plr1.pawn4,plr2,b1);
            plr1.checkKill(plr1.pawn4,plr4,b1);
      
            plr1.checkKill(plr1.pawn4,plr3,b2);
            plr1.checkKill(plr1.pawn4,plr2,b2);
            plr1.checkKill(plr1.pawn4,plr4,b2);
            
            plr1.checkKill(plr1.pawn4,plr3,b4);
            plr1.checkKill(plr1.pawn4,plr2,b4);
            plr1.checkKill(plr1.pawn4,plr4,b4);
            
            plr1.checkKill(plr1.pawn4,plr3,b5);
            plr1.checkKill(plr1.pawn4,plr2,b5);
            plr1.checkKill(plr1.pawn4,plr4,b5);
    
            plr1.checkKill(plr1.pawn4,plr3,b6);
            plr1.checkKill(plr1.pawn4,plr2,b6);
            plr1.checkKill(plr1.pawn4,plr4,b6);
    
            plr1.checkKill(plr1.pawn4,plr3,b8);
            plr1.checkKill(plr1.pawn4,plr2,b8);
            plr1.checkKill(plr1.pawn4,plr4,b8);
          
            plr1.checkKill(plr1.pawn4,plr3,b9);
            plr1.checkKill(plr1.pawn4,plr2,b9);
            plr1.checkKill(plr1.pawn4,plr4,b9);
    
            plr1.checkKill(plr1.pawn4,plr3,b12);
            plr1.checkKill(plr1.pawn4,plr2,b12);
            plr1.checkKill(plr1.pawn4,plr4,b12);
      
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b15);
            plr1.checkKill(plr1.pawn4,plr2,b15);
            plr1.checkKill(plr1.pawn4,plr4,b15);
          
            plr1.checkKill(plr1.pawn4,plr3,b16);
            plr1.checkKill(plr1.pawn4,plr2,b16);
            plr1.checkKill(plr1.pawn4,plr4,b16);
      
            plr1.checkKill(plr1.pawn4,plr3,b18);
            plr1.checkKill(plr1.pawn4,plr2,b18);
            plr1.checkKill(plr1.pawn4,plr4,b18);
      
            plr1.checkKill(plr1.pawn,plr3,b19);
            plr1.checkKill(plr1.pawn,plr2,b19);
            plr1.checkKill(plr1.pawn,plr4,b19);
    
            plr1.checkKill(plr1.pawn4,plr3,b20);
            plr1.checkKill(plr1.pawn4,plr2,b20);
            plr1.checkKill(plr1.pawn4,plr4,b20);
    
            plr1.checkKill(plr1.pawn4,plr3,b21);
            plr1.checkKill(plr1.pawn4,plr2,b21);
            plr1.checkKill(plr1.pawn4,plr4,b21);
    
            plr1.checkKill(plr1.pawn4,plr3,b22);
            plr1.checkKill(plr1.pawn4,plr2,b22);
            plr1.checkKill(plr1.pawn4,plr4,b22);
    
            plr1.checkKill(plr1.pawn4,plr3,b23);
            plr1.checkKill(plr1.pawn4,plr2,b23);
            plr1.checkKill(plr1.pawn4,plr4,b23);
            
            plr1.checkKill(plr1.pawn4,plr3,b24);
            plr1.checkKill(plr1.pawn4,plr2,b24);
            plr1.checkKill(plr1.pawn4,plr4,b24);
            
            plr1.checkKill(plr1.pawn4,plr3,b25);
            plr1.checkKill(plr1.pawn4,plr2,b25);
            plr1.checkKill(plr1.pawn4,plr4,b25);
    
            plr1.checkKill(plr1.pawn4,plr3,b26);
            plr1.checkKill(plr1.pawn4,plr2,b26);
            plr1.checkKill(plr1.pawn4,plr4,b26);
      
            plr1.checkKill(plr1.pawn4,plr3,b28);
            plr1.checkKill(plr1.pawn4,plr2,b28);
            plr1.checkKill(plr1.pawn4,plr4,b28);
            
            plr1.checkKill(plr1.pawn4,plr2,b27);
            plr1.checkKill(plr1.pawn4,plr3,b27);
            plr1.checkKill(plr1.pawn4,plr4,b27);

          }else if(rand === 7){
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);

            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b11);
            plr1.checkKill(plr1.pawn4,plr2,b11);
            plr1.checkKill(plr1.pawn4,plr4,b11);
            
            plr1.checkKill(plr1.pawn4,plr3,b1);
            plr1.checkKill(plr1.pawn4,plr2,b1);
            plr1.checkKill(plr1.pawn4,plr4,b1);
      
            plr1.checkKill(plr1.pawn4,plr3,b2);
            plr1.checkKill(plr1.pawn4,plr2,b2);
            plr1.checkKill(plr1.pawn4,plr4,b2);
            
            plr1.checkKill(plr1.pawn4,plr3,b4);
            plr1.checkKill(plr1.pawn4,plr2,b4);
            plr1.checkKill(plr1.pawn4,plr4,b4);
            
            plr1.checkKill(plr1.pawn4,plr3,b5);
            plr1.checkKill(plr1.pawn4,plr2,b5);
            plr1.checkKill(plr1.pawn4,plr4,b5);
    
            plr1.checkKill(plr1.pawn4,plr3,b6);
            plr1.checkKill(plr1.pawn4,plr2,b6);
            plr1.checkKill(plr1.pawn4,plr4,b6);
    
            plr1.checkKill(plr1.pawn4,plr3,b8);
            plr1.checkKill(plr1.pawn4,plr2,b8);
            plr1.checkKill(plr1.pawn4,plr4,b8);
          
            plr1.checkKill(plr1.pawn4,plr3,b9);
            plr1.checkKill(plr1.pawn4,plr2,b9);
            plr1.checkKill(plr1.pawn4,plr4,b9);
    
            plr1.checkKill(plr1.pawn4,plr3,b12);
            plr1.checkKill(plr1.pawn4,plr2,b12);
            plr1.checkKill(plr1.pawn4,plr4,b12);
      
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b15);
            plr1.checkKill(plr1.pawn4,plr2,b15);
            plr1.checkKill(plr1.pawn4,plr4,b15);
          
            plr1.checkKill(plr1.pawn4,plr3,b16);
            plr1.checkKill(plr1.pawn4,plr2,b16);
            plr1.checkKill(plr1.pawn4,plr4,b16);
      
            plr1.checkKill(plr1.pawn4,plr3,b18);
            plr1.checkKill(plr1.pawn4,plr2,b18);
            plr1.checkKill(plr1.pawn4,plr4,b18);
      
            plr1.checkKill(plr1.pawn4,plr3,b19);
            plr1.checkKill(plr1.pawn4,plr2,b19);
            plr1.checkKill(plr1.pawn4,plr4,b19);
    
            plr1.checkKill(plr1.pawn4,plr3,b20);
            plr1.checkKill(plr1.pawn4,plr2,b20);
            plr1.checkKill(plr1.pawn4,plr4,b20);
    
            plr1.checkKill(plr1.pawn4,plr3,b21);
            plr1.checkKill(plr1.pawn4,plr2,b21);
            plr1.checkKill(plr1.pawn4,plr4,b21);
    
            plr1.checkKill(plr1.pawn4,plr3,b22);
            plr1.checkKill(plr1.pawn4,plr2,b22);
            plr1.checkKill(plr1.pawn4,plr4,b22);
    
            plr1.checkKill(plr1.pawn4,plr3,b23);
            plr1.checkKill(plr1.pawn4,plr2,b23);
            plr1.checkKill(plr1.pawn4,plr4,b23);
            
            plr1.checkKill(plr1.pawn4,plr3,b24);
            plr1.checkKill(plr1.pawn4,plr2,b24);
            plr1.checkKill(plr1.pawn4,plr4,b24);
            
            plr1.checkKill(plr1.pawn4,plr3,b25);
            plr1.checkKill(plr1.pawn4,plr2,b25);
            plr1.checkKill(plr1.pawn4,plr4,b25);
    
            plr1.checkKill(plr1.pawn4,plr3,b26);
            plr1.checkKill(plr1.pawn4,plr2,b26);
            plr1.checkKill(plr1.pawn4,plr4,b26);
      
            plr1.checkKill(plr1.pawn4,plr3,b28);
            plr1.checkKill(plr1.pawn4,plr2,b28);
            plr1.checkKill(plr1.pawn4,plr4,b28);
            
            plr1.checkKill(plr1.pawn4,plr2,b27);
            plr1.checkKill(plr1.pawn4,plr3,b27);
            plr1.checkKill(plr1.pawn4,plr4,b27);

          }else if(rand === 8){
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            plr1.moveForward(plr1.pawn4);
            
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b11);
            plr1.checkKill(plr1.pawn4,plr2,b11);
            plr1.checkKill(plr1.pawn4,plr4,b11);
            
            plr1.checkKill(plr1.pawn4,plr3,b1);
            plr1.checkKill(plr1.pawn4,plr2,b1);
            plr1.checkKill(plr1.pawn4,plr4,b1);
      
            plr1.checkKill(plr1.pawn4,plr3,b2);
            plr1.checkKill(plr1.pawn4,plr2,b2);
            plr1.checkKill(plr1.pawn4,plr4,b2);
            
            plr1.checkKill(plr1.pawn4,plr3,b4);
            plr1.checkKill(plr1.pawn4,plr2,b4);
            plr1.checkKill(plr1.pawn4,plr4,b4);
            
            plr1.checkKill(plr1.pawn4,plr3,b5);
            plr1.checkKill(plr1.pawn4,plr2,b5);
            plr1.checkKill(plr1.pawn4,plr4,b5);
    
            plr1.checkKill(plr1.pawn4,plr3,b6);
            plr1.checkKill(plr1.pawn4,plr2,b6);
            plr1.checkKill(plr1.pawn4,plr4,b6);
    
            plr1.checkKill(plr1.pawn4,plr3,b8);
            plr1.checkKill(plr1.pawn4,plr2,b8);
            plr1.checkKill(plr1.pawn4,plr4,b8);
          
            plr1.checkKill(plr1.pawn4,plr3,b9);
            plr1.checkKill(plr1.pawn4,plr2,b9);
            plr1.checkKill(plr1.pawn4,plr4,b9);
    
            plr1.checkKill(plr1.pawn4,plr3,b12);
            plr1.checkKill(plr1.pawn4,plr2,b12);
            plr1.checkKill(plr1.pawn4,plr4,b12);
      
            plr1.checkKill(plr1.pawn4,plr3,b14);
            plr1.checkKill(plr1.pawn4,plr2,b14);
            plr1.checkKill(plr1.pawn4,plr4,b14);
    
            plr1.checkKill(plr1.pawn4,plr3,b15);
            plr1.checkKill(plr1.pawn4,plr2,b15);
            plr1.checkKill(plr1.pawn4,plr4,b15);
          
            plr1.checkKill(plr1.pawn4,plr3,b16);
            plr1.checkKill(plr1.pawn4,plr2,b16);
            plr1.checkKill(plr1.pawn4,plr4,b16);
      
            plr1.checkKill(plr1.pawn4,plr3,b18);
            plr1.checkKill(plr1.pawn4,plr2,b18);
            plr1.checkKill(plr1.pawn4,plr4,b18);
      
            plr1.checkKill(plr1.pawn4,plr3,b19);
            plr1.checkKill(plr1.pawn4,plr2,b19);
            plr1.checkKill(plr1.pawn4,plr4,b19);
    
            plr1.checkKill(plr1.pawn4,plr3,b20);
            plr1.checkKill(plr1.pawn4,plr2,b20);
            plr1.checkKill(plr1.pawn4,plr4,b20);
    
            plr1.checkKill(plr1.pawn4,plr3,b21);
            plr1.checkKill(plr1.pawn4,plr2,b21);
            plr1.checkKill(plr1.pawn4,plr4,b21);
    
            plr1.checkKill(plr1.pawn4,plr3,b22);
            plr1.checkKill(plr1.pawn4,plr2,b22);
            plr1.checkKill(plr1.pawn4,plr4,b22);
    
            plr1.checkKill(plr1.pawn4,plr3,b23);
            plr1.checkKill(plr1.pawn4,plr2,b23);
            plr1.checkKill(plr1.pawn4,plr4,b23);
            
            plr1.checkKill(plr1.pawn4,plr3,b24);
            plr1.checkKill(plr1.pawn4,plr2,b24);
            plr1.checkKill(plr1.pawn4,plr4,b24);
            
            plr1.checkKill(plr1.pawn4,plr3,b25);
            plr1.checkKill(plr1.pawn4,plr2,b25);
            plr1.checkKill(plr1.pawn4,plr4,b25);
    
            plr1.checkKill(plr1.pawn4,plr3,b26);
            plr1.checkKill(plr1.pawn4,plr2,b26);
            plr1.checkKill(plr1.pawn4,plr4,b26);
      
            plr1.checkKill(plr1.pawn4,plr3,b28);
            plr1.checkKill(plr1.pawn4,plr2,b28);
            plr1.checkKill(plr1.pawn4,plr4,b28);
            
            plr1.checkKill(plr1.pawn4,plr2,b27);
            plr1.checkKill(plr1.pawn4,plr3,b27);
            plr1.checkKill(plr1.pawn4,plr4,b27);

          }})
    

  if(rand === 1){
    text(rand,70,200);
  }else if(rand === 2){
    text(rand,70,200);
  }else if(rand === 3){
    text(rand,70,200);
  }else if(rand === 4){
    text(rand,70,200);
  }else if(rand === 5){
    rand = 1;
    text(rand,70,200);
  }else if(rand === 6){
    rand = 2;
    text(rand,70,200);
  }else if(rand === 7){
    rand = 3;
    text(rand,70,200);
  }else{
    text(rand,70,200);
  }

  drawSprites();
  
}

function createBoard(){
  b1 = createSprite(190,170,100,100);

  b2 = createSprite(190,60,100,100);
  
  b3 = createSprite(190,280,100,100);

  cross1 = createSprite(190,280,100,10);
  cross1.depth = 4;
  cross1.shapeColor = 0;

  cross2 = createSprite(190,280,10,100);
  cross2.depth = 4;
  cross2.shapeColor = 0;

  b4 = createSprite(190,390,100,100);
 
  b5 = createSprite(190,500,100,100);


  b6 = createSprite(300,60,100,100);  
  b7 = createSprite(410,60,100,100);

  cross7 = createSprite(410,60,100,10);
  cross7.depth = 9;
  cross7.shapeColor = 0;

  cross8 = createSprite(410,60,10,100);
  cross8.depth = 9;
  cross8.shapeColor = 0;



  b8 = createSprite(520,60,100,100);
  b9 = createSprite(630,60,100,100);
 

  b11 = createSprite(630,170,100,100);
  b13 = createSprite(630,280,100,100);

  cross5 = createSprite(630,280,100,10);
  cross5.depth = 13;
  cross5.shapeColor = 0;

  cross6 = createSprite(630,280,10,100);
  cross6.depth = 13;
  cross6.shapeColor = 0;




  b14 = createSprite(630,390,100,100);

  b16 = createSprite(300,500,100,100);
  b17 = createSprite(410,500,100,100);

  cross3 = createSprite(410,500,100,10);
  cross3.depth = 17;
  cross3.shapeColor = 0;

  cross4 = createSprite(410,500,10,100);
  cross4.depth = 17;
  cross4.shapeColor = 0;

  b18 = createSprite(520,500,100,100);
  b19 = createSprite(630,500,100,100);



  b20 = createSprite(300,170,100,100);
  b21 = createSprite(410,170,100,100);
  b22 = createSprite(520,170,100,100);

  b23 = createSprite(300,280,100,100);
  b24 = createSprite(410,280,100,100);
  b24.shapeColor = rgb(4,244,216);
  b25 = createSprite(520,280,100,100);

  b26 = createSprite(300,390,100,100);
  b27 = createSprite(520,390,100,100);
  b28 = createSprite(410,390,100,100);
  


  l1 = createSprite(410,115,540,10);
  l1.shapeColor = "black";
  
  l2 = createSprite(410,225,540,10);
  l2.shapeColor = "black";

  l3 = createSprite(410,335,540,10);
  l3.shapeColor = "black";

  l4 = createSprite(410,445,540,10);
  l4.shapeColor = "black";

  l5 = createSprite(245,280,10,540);
  l5.shapeColor = "black";
  
  l6 = createSprite(355,280,10,540);
  l6.shapeColor = "black";

  l7 = createSprite(465,280,10,540);
  l7.shapeColor = "black";

  l8 = createSprite(575,280,10,540);
  l8.shapeColor = "black";

  ol1 = createSprite(135,280,10,540);
  ol1.shapeColor = 0;

  ol2 = createSprite(410,5,560,10);
  ol2.shapeColor = 0;

  ol3 = createSprite(685,280,10,540);
  ol3.shapeColor = 0;

  ol4 = createSprite(410,555,560,10);
  ol4.shapeColor = 0;
}