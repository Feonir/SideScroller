/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />


module states {
    //GAMEOVER STATE ----------------------------------------------------------------------------------
    export class GameOver {

        //INSTANCE VARIABLES ----------------------------------------------------------------------
        public game: createjs.Container;
        public background: objects.Background;
        public resetButton: objects.Button;

        //CONSTRUCTOR ------------------------------------------------------------------------------
        constructor() {
            this.game = new createjs.Container();

            this.background = new objects.Background();
            this.game.addChild(this.background);

            var gameOverLabel: objects.Label = new objects.Label("GAME OVER", constants.SCREEN_CENTER_WIDTH, (constants.SCREEN_CENTER_HEIGHT - 100));
            gameOverLabel.font = "60px Consolas";
            gameOverLabel.regX = gameOverLabel.getMeasuredWidth() * 0.5;
            gameOverLabel.regY = gameOverLabel.getMeasuredWidth() * 0.5;
            this.game.addChild(gameOverLabel);

            var finalScoreLabel: objects.Label = new objects.Label("Final Score: " + finalScore, constants.SCREEN_CENTER_WIDTH, (constants.SCREEN_CENTER_HEIGHT - 100));
            this.game.addChild(finalScoreLabel);

            var highScoreLabel: objects.Label = new objects.Label("High Score: " + highScore, constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(highScoreLabel);

            this.resetButton = new objects.Button("restartButton", constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT + 100);

            this.game.addChild(this.resetButton);

            this.resetButton.on("click", this.resetButtonClicked, this);

            createjs.Sound.play("carrierRuined", { loop: -1});

            stage.addChild(this.game);
        }//End of Constructor

        //PUBLIC METHODS ---------------------------------------------------------------------------

        resetButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }


        public update() {

            this.background.update();
            
        }//End of Update Function

    }

} 