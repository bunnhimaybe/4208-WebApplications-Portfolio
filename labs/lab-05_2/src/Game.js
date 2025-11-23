class Game {
    
    #isOver;
    #world;
    #level;
    #scene;

    constructor() {
        this.#isOver = false;
        this.#world = new World();
        this.#level = 0;
        const levelData = this.#world.getLevel( this.#level );
        this.#scene = new Scene(levelData);
    }

    update() {
        // console.log("Game update");
    }

    render() {
        // console.log("Game rendering");
        this.#scene.draw();
    }

    // game loop
    static main() {
        if (game.#isOver === false) {
            game.update();
            game.render();
            window.requestAnimationFrame(Game.main);
        } else {
            // console.log("Game Over!");
        }
    }

}

const game = new Game();