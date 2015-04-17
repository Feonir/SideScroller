/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/mine.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/carrier.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {
    //PLAY STATE ----------------------------------------------------------------------------------
    export class Play{

        //INSTANCE VARIABLES ----------------------------------------------------------------------
        public game: createjs.Container;
        public background: objects.Background;
        public carrier: objects.Carrier;
        public plane: objects.Plane;        
        public navalMine: objects.Mine[] = [];

        //Text Objects
        public scoreboard: objects.Scoreboard;

        //CONSTRUCTOR ------------------------------------------------------------------------------
        constructor() {
            this.game = new createjs.Container();

            this.background = new objects.Background();
            this.game.addChild(this.background);

            this.carrier = new objects.Carrier();
            this.game.addChild(this.carrier);
            createjs.Sound.play(this.carrier.soundString, { loop: -1 });

            for (var mine = constants.ENEMY_NUM; mine > 0; mine--) {
                this.navalMine[mine] = new objects.Mine();
                this.game.addChild(this.navalMine[mine]);
            }            

            this.plane = new objects.Plane();
            this.game.addChild(this.plane);

            this.scoreboard = new objects.Scoreboard(this.game);

            stage.addChild(this.game);
        }//End of Constructor

        //PUBLIC METHODS ---------------------------------------------------------------------------

        //Calculates the distance between two points
        public getDistance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        //Check collision method
        public checkCollision(collider: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = this.carrier.x;
            p1.y = this.carrier.y;

            p2.x = collider.x;
            p2.y = collider.y;

            if (this.getDistance(p1, p2) < ((this.carrier.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) {
                    console.log("Collision");
                    collider.isColliding = true;
                    createjs.Sound.play(collider.soundString);
                    switch (collider.name) {
                        case "finalPlane":
                            this.scoreboard.score += 1;
                            break;
                        case "finalMine":
                            this.scoreboard.lives -= 1;
                            break;
                    }
                }
            } else {
                collider.isColliding = false;
            }
        } //Check Collision End

        public update() {

            this.background.update();
            this.carrier.update();
            this.plane.update();

            if (this.scoreboard.lives > 0) {
                for (var enemy = constants.ENEMY_NUM; enemy > 0; enemy--) {
                    this.navalMine[enemy].update();
                    this.checkCollision(this.navalMine[enemy]);
                }

                this.checkCollision(this.plane);
            }
            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;
                if (finalScore > highScore){
                    highScore = finalScore;
                }
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
        }//End of Update Function

    }

} 