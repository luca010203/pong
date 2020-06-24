import player from './player';


export default class human extends player {
    constructor(game, index) {
        super(game, index);
    }

    checkInput() {
        const kb = this.game.keyboard;
    

        this.paddle.velocity.y = 0;
        this.paddle.velocity.y += (kb.isKeyDown(kb.up)) ? -this.paddle.speed : 0;
        this.paddle.velocity.y += (kb.isKeyDown(kb.down)) ? -this.paddle.speed : 0;
    }
}