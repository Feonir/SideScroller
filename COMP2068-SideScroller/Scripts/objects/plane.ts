module objects {

    export class Plane extends objects.GameObject {


        //CONSTRUCTOR --------------------------------------------------------------------------------------------------

        constructor() {
            super("finalPlane");
            this.name = "finalPlane";
            this._dx = 5;



            //Put sound here, Example (Declare audio in assetManager):
            this.soundString="rescuePlane";

            this._reset();
        }

        //PUBLIC METHODS -----------------------------------------------------------------------------------------------

        public update() {
            this.x -= this._dx;

            this._checkBounds();
        }


        //PRIVATE METHODS
        private _reset() {
            //Set treasure to start at random y, outside of canvas
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = constants.SCREEN_WIDTH + this.width;
        }

        private _checkBounds() {
            if ((this.x + this.width) < 0) {
                this._reset();
            }
        }
    }
}   