class Controller {

    #player;
    #inputs;

    constructor(player) {
        this.#player = player;
        this.#inputs = new Set();
        document.addEventListener('keydown', this.buttonDown);
        document.addEventListener('keyup', this.buttonUp);
    }

    buttonDown = function(event) {
        const inputs = this.#inputs;
        switch(event.keyCode) {
            case 38: inputs.add('up');
            break;
        }
    }.bind(this);
    
    buttonUp = function(event) {
        const inputs = this.#inputs;
        switch(event.keyCode) {
            case 38: inputs.delete('up');
            break;
        }
    }.bind(this);

    update() {
        const inputs = this.#inputs;
        if (inputs.has('up')) {
            this.#player.jump();
        }
    }
}