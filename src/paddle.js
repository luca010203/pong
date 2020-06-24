import Rectangle from "./rectangle";

export default class paddle extends Rectangle {
    constructor(game, index) {
        super(0, 0, 40, 180);

        this.game = game;
        this.index = index;
        this.speed = 500;
        this.reset();
    }


    update(deltatime){
        this.position.x += this.velocity.x * deltatime;
        this.position.y += this.velocity.y * deltatime;
    }



    draw() {
        this.game.context.fillRect(this.left | 0, this.top | 0, this.size.x, this.size.y);
    }



    reset() {
        this.position.x = this.index === 1 ? 50 : this.game.Canvas.width - 50;
        this.position.y = this.game.Canvas.height / 2;
    }



}