class Player extends GameObject {

    #physics;
    #isJumping;

    constructor(x, y) {
        super( x * Block.SIZE, y * Block.SIZE, Block.SIZE, Block.SIZE, 'assets/link-down.png');
        this.#physics = new Physics(4);
        this.#isJumping = false;
    }

    jump() {
        if (this.#isJumping === false) {
            this.#physics.jump();
            this.#isJumping = true;
        }
    }

    move() {
        const dx = this.getX() + this.#physics.getVelocityX();
        const dy = this.getY() + this.#physics.getVelocityY();
        super.move(dx, dy);
    }

    update() {
        this.#physics.update();
        this.move();
    }

}