class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(100,0);
        this.input.position(130,160);
        this.button.position(250,200);

        //Writing the function after the button is clicked

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;

            player.updateCount(playerCount);
            player.update();            
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(130,160);
        })
    }
}