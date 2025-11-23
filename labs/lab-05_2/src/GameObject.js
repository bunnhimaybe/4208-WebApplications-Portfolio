// manages shared data for all game objects

class GameObject {

    #x;
    #y;
    #width;
    #height;
    #image;

    constructor(x, y, width, height, src) {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
        this.#image = new Image();
        this.#image.src = src;
    }

    draw() {
        view.picture( this.#image, this.#x, this.#y, this.#width, this.#height );
    }

}