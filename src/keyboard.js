export default class keyboard { 
    constructor(game) {
        this.game = game;
        this.up = 38;
        this.down = 40;
        this.spacebar = 32;
        this.keys = [];

        document.addEventListener('keydown', (event) => {
            this.keys[event.keyCode] = true;
        }, 
        false
    );


        document.addEventListener('keyup', (event) => {
            this.keys[event.keyCode] = true;
        }, false);

    }

    isKeyDown(key) {
        return this.keys[key] === true ? true : false;
    }


}