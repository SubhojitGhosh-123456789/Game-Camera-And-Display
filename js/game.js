class Game {
    constructor(){}
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
       database.ref("/").update({
           gameState : state
       })
    }

    async start(){
        if(gameState === 0){
          form = new Form();
          form.display();
          player = new Player();
          var playerCountRef = await database.ref("playerCount").once("value");
          if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
          }
      
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var display_postion = 130;
            for(var plr in allPlayers){
                if(plr === "player"+player.index){
                    fill("red");
                }else{
                    fill("black");
                }

                display_postion += 20;
                textSize(15);
                text(allPlayers[plr].name+" ; "+allPlayers[plr].distance, 120, display_postion);
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
           player.distance +=50;
           player.update();
        }
    }

}