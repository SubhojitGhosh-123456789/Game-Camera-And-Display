var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4, cars;
var distance=0;

function setup(){
  database = firebase.database();

  createCanvas(displayWidth+100, displayHeight-30);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  //background("white");

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
  
}

