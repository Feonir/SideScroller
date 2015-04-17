module objects {
    export class Button extends createjs.Bitmap {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        
        constructor(buttonPath: string, x: number, y: number) {
            super(assetLoader.getResult(buttonPath));

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.x = x;
            this.y = y;
            this.addEventListener("mouseover", this._buttonOver);
            this.addEventListener("mouseout", this._buttonOut);
        }

        // EVENT HANDLERS

        private _buttonOut(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }

        private _buttonOver(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.5;
        }

    }

}