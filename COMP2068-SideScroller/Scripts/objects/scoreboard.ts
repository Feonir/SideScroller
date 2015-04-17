module objects{
    //SCOREBOARD CLASS ---------------------------------------------------------------------------
    export class Scoreboard {

        //Public Variables -----------------------------------------------------------------------
        public lives: number;
        public score: number;

        //Private Variables ----------------------------------------------------------------------
        _livesLabel: createjs.Text;
        _scoreLabel: createjs.Text;
        private _game: createjs.Container;

        //CONSTRUCTOR ----------------------------------------------------------------------------
        constructor(game: createjs.Container) {

            this.lives = constants.PLAYER_LIVES;
            this.score = 0;

            this._livesLabel = new createjs.Text("Lives: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._livesLabel.x = 15;
            game.addChild(this._livesLabel);

            this._scoreLabel = new createjs.Text("Planes Fueled: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR );
            this._scoreLabel.x = 500;
            game.addChild(this._scoreLabel);

        }

        update() {
            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "SCORE: " + this.score.toString();
        }

    }
      
} 