import canvas from './canvas';


export default class background extends canvas {

    constructor(game) {
        super('bg_canvas', 'black', 'white', 1);

        this.game = game;
    }


    draw() {
        const cw = this.canvas.width;
        const ch = this.canvas.heigth;
        const bl = this.game.blocksize;

        this.context.fillRect(0, 0, cw, bl);
        this.context.fillRect(0, ch- bl, cw, bl);

        const count = (ch / 2 / bl) | 0;
        for(let i = 1; i <= count; i++) {
            if(i % 2 !== 0) {
            this.context.fillRect(cw / 2 - bl / 2, ch / 2 - bl / 2 - (i - 1) * bl, bl, bl);
            this.context.fillRect(cw / 2 - bl / 2, ch / 2 - bl / 2 + (i - 1) * bl, bl, bl);
            }
        }
    }
}