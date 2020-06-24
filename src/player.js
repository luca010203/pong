import paddle from './paddle';

export default class player {
    constructor(game, index) {
        this.game = game;
        this.index = index;
        this.paddle = new paddle(game, index);
    }


    update(deltatime) {
        this.paddle.update(deltatime);
    }


    draw() {
        this.paddle.draw();
    }


}