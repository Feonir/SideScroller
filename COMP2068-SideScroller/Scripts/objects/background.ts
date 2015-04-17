module objects {

    export class Background extends createjs.Bitmap {


        //PUBLIC VARIABLES
        public soundString: string;
        //PRIVATE VARIABLES
        private _dx;


        //CONSTRUCTOR --------------------------------------------------------------------------------------------------

        constructor() {
            super(assetLoader.getResult("backgroundOcean"));

            this._dx = 5;
            
            this._reset();
        }

        //PUBLIC METHODS -----------------------------------------------------------------------------------------------

        public update() {
            this.x -= this._dx;

            this._checkBounds();
        }

        private _reset() {
            this.y = 0;
            this.x = 0;
        }

        private _checkBounds() {
            if (this.x <= -800){
                this._reset();
            }
        }
    }
}    