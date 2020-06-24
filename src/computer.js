import player from './player';

export default class computer extends player {
    constructor(game, index) {
        super(game, index);
    }


    checkInput() {
        console.log(this.paddle.velocity.y);
        
        // this.paddle.velocity.y = 0;
        this.paddle.velocity.y += 2;
    }
}