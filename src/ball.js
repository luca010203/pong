import Rectangle from './rectangle';

export default class Ball extends Rectangle{
    constructor(game) {
        super(0, 0, 80, 80);
        
        this.game = game;
        this.speed = 600;
        this.reset();
    

    }

    update(deltatime) {
        this.position.x += this.velocity.x * deltatime;
        this.position.y += this.velocity.y * deltatime;
    }


    draw() {
        this.game.context.fillRect(this.left | 0, this.top | 0, this.size.x, this.size.y);
    }

    reset() {
        this.position.x = this.game.Canvas.width/2;
        this.position.y = this.game.Canvas.height/2;




        const degrees = 110;
        // const degrees = 150 + this.game.getRandNumBetween(0, 60); //player 1
        // const degrees = 330 + this.game.getRandNumBetween(0, 60);  player 2



        const radians = this.game.toRadians(degrees);
        this.velocity.x = this.speed * Math.cos(radians);
        this.velocity.y = this.speed * -Math.sin(radians);
    }

}