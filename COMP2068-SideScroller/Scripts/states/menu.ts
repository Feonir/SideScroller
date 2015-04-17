/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />


module states {
    //Game Menu STATE ----------------------------------------------------------------------------------
    export class Menu {

        //INSTANCE VARIABLES ----------------------------------------------------------------------
        public game: createjs.Container;
        public oceanBackground: objects.Background;
        public startButton: objects.Button;

        //CONSTRUCTOR ------------------------------------------------------------------------------
        constructor() {
            this.game = new createjs.Container();

            this.oceanBackground = new objects.Background();
            this.game.addChild(this.oceanBackground);

            //Our menu Label to begin the game.
            var menuStartLabel: objects.Label = new objects.Label("Naval Rescue", constants.SCREEN_CENTER_WIDTH,constants.SCREEN_CENTER_HEIGHT);
            menuStartLabel.font = "60px Consolas";
            menuStartLabel.regX = menuStartLabel.getMeasuredWidth() * 0.5;
            menuStartLabel.regY = menuStartLabel.getMeasuredWidth() * 0.5;
            this.game.addChild(menuStartLabel);
            
            //Make the start button, add event listener and functionality then add to game screen.
            this.startButton = new objects.Button("startButton", constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT + 200);
            this.startButton.on("click", this.startButtonClicked, this);
            this.game.addChild(this.startButton);



            //Load up the game song, and loop it.
            var theme = assetLoader.getResult("dangerZone");
            createjs.Sound.play("dangerZone", { loop: -1 });


            stage.addChild(this.game);
        }//End of Constructor

        //PUBLIC METHODS ---------------------------------------------------------------------------

        startButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }


        public update() {
            //Scroll the ocean.
            this.oceanBackground.update();

        }//End of Update Function

    }

} 