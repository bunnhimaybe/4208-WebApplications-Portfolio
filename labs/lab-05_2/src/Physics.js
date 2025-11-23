class Physics {
    #speed;
    #gravity;
    #terminal;
    #velocityX;
    #velocityY;

    constructor(speed) {
        this.#speed = speed;
        this.#gravity = 0.3;
        this.#terminal = 8;
        this.#velocityX = 0.0;
        this.#velocityY = 0.0;
    }

    applyGravity() {
        if (this.#velocityY < this.#terminal) {
            this.#velocityY += this.#gravity;
        }
    }

    jump() {
        this.#velocityY = -this.#speed * 2;
    }

    update() {
        this.applyGravity();
    }

    /* GETTERS */
    getVelocityX() {
        return this.#velocityX;
    }
    
    getVelocityY() {
        return this.#velocityY;
    }

}