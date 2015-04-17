module objects {

    export class Carrier extends objects.GameObject {

        //CONSTRUCTOR --------------------------------------------------------------------------------------------------

        constructor() {
            super("finalCarrier");
            this.name = "finalCarrier";

            this.x = 95;

            //Play sound here for the engine
            this.soundString = "finalOcean";
        }

        //PUBLIC METHODS -----------------------------------------------------------------------------------------------

        public update() {
            this.y = stage.mouseY;
            this.x = stage.mouseX;

            this._checkBounds();
        }


        //PRIVATE METHODS
        private _checkBounds() {

            if (stage.mouseX > 400) {
                this.x = 400;
            }

            if ((this.x - (this.width * 0.5)) < 5) {
                this.x = 5 + (this.width * 0.5);
            }
        }
    }
} 