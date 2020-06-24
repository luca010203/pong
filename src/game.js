import canvas from './canvas';
import Ball from './ball';
import human from './human';
import computer from './computer';
import keyboard from './keyboard';
import background from './background';

export default class Game extends canvas{
    constructor() {
        super('game_canvas', null, 'white', 3);


        this.blocksize = 10;

        this.background = new background(this);
        this.keyboard = new keyboard(this);
        this.player1 = new human(this, 1);
        this.player2 = new computer(this, 2);
        this.ball = new Ball(this);

        // this.createSimpleGameLoop();
        this.createAdvancedGameLoop();
    }

    // createSimpleGameLoop() {
    //     const interval = setInterval(() => {
    //         this.clear();
    //         this.ball.update(1);
    //         this.ball.draw();
    //     }, 1000 / 60);
    // }


    createAdvancedGameLoop() {
        this.step = 1/120;
        this.accumulator = 0;

        let lastTime;
        const callback = (millis) => {
            if(lastTime) {
                const deltatime = (millis - lastTime) / 1000;

                this.player1.checkInput();
                this.player2.checkInput();


                this.update(deltatime);
                this.draw();
            }
            lastTime = millis;
            requestAnimationFrame(callback);
        };
        callback();
    }



    collide(ball, paddle, deltatime) {

        return(ball.right + ball.velocity.x >= paddle.left + paddle.velocity.x && ball.left + ball.velocity.x <= paddle.right + paddle.velocity.x && ball.bottom + ball.velocity.y >= paddle.top + paddle.velocity.y && ball.top + ball.velocity.y <= paddle.bottom + paddle.velocity.y) ? true : false;
    }




    checkcollision(deltatime){

        if(this.ball.top + this.ball.velocity.y * deltatime < this.blocksize || this.ball.bottom + this.ball.velocity.y * deltatime > this.Canvas.height - this.blocksize) {
            this.ball.velocity.y *= -1;
        }



        this.paddle = this.ball.position.x < this.Canvas.width / 2 ? this.player1.paddle : this.player2.paddle;
        
        if(this.collide(this.ball, this.paddle, deltatime)) {
        if(this.ball.bottom > this.padde.top && this.ball.top < this.paddle.bottom) {
            this.ball.position.x = this.paddle.index === 1 ? this.paddle.right + this.ball.size.x / 2: this.paddle.left - this.ball.size.x / 2;
            this.ball.velocity.x *= -1;


        }else if(this.ball.position.y < this.paddle.position.y) {
            this.ball.position.y = this.paddle.top - this.ball.size.y / 2;
            this.ball.velocity *= -1;
            this.ball.velocity.y = this.paddle.velocity.y < 0 && this.paddle.velocity < this.ball.velocity.y ? this.paddle.velocity.y * 1.1 : this.ball.velocity.y;

        }else if(this.ball.position.y > this.paddle.position.y) {
            this.ball.position.y = this.paddle.bottom + this.ball.size.y / 2;
            this.ball.velocity *= -1;
            this.ball.velocity.y = this.paddle.velocity.y > 0 && this.paddle.velocity.y > this.ball.velocity.y ? this.paddle.velocity * 1.1 : this.ball.velocity.y;
        }
    }


    if(this.ball.left > this.canvas.width || this.ball.right < 0) {
        if(this.ball.left > this.canvas.width) console.log('bal verlaat speelveld rechts');
        if(this.ball.right < 0) console.log('bal verlaat speelveld links');
        }
    }
}

    simulate(deltatime) {
        this.player1.update(deltatime);
        this.player2.update(deltatime);
        this.ball.update(deltatime);

        this.checkcollision(deltatime);
    }

    update(deltatime) {
        this.accumulator += deltatime;
        while(this.accumulator > this.step) {
            this.simulate(this.step);
            this.accumulator -= this.step;
        }
    }


    draw() {
        this.clear();
        this.background.draw();
        this.player1.draw();
        this.player2.draw();
        this.ball.draw();
    }





    clear() {
        this.context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
    }


    toRadians(deg) {
        return deg + (Math.PI / 180);
    }

    toDegrees(rad) {
        return (rad * 180) / Math.PI;
    }



    getRandNumBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


}