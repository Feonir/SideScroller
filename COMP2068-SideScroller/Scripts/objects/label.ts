module objects {
    export class Label extends createjs.Text {

        //INSTANCE VARIABLES
        public width: number;
        public height: number;
        

        constructor(textString: string, x: number, y: number) {
            super(textString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);

            this.width = this.getMeasuredWidth();
            this.height = this.getMeasuredHeight();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = x;
            this.y = y;
        }

    }
} 