// manages data for playable game level

class Scene {

    #background;
    #blocks;
    #player;

    constructor(map) {
        this.#blocks = [];
        this.setScene(map);
    }

    // parse each tile per level
    setScene(levelData) {
        const cols = levelData[0].length;   // tiles width count (horizontal)
        const rows = levelData.length;      // tiles height count (vertical)
        this.setBackground( rows, cols);

        for (let r=0; r < rows; r++) {
            for (let c=0; c < cols; c++) {
                const tile = levelData[r][c];
                this.setTile(c, r, tile);
                // console.log(tile);
            }
        }
    }

    setBackground( rows, cols, img='assets/background.png', tilesize=32 ) { // default values
        const width = cols * tilesize; 
        const height = rows * tilesize;
        this.#background = new GameObject( 0, 0, width, height, img); 
    }

    setTile(x, y, tile) {
        switch(tile) {
            case '#': this.#blocks.push( new Block(x,y) );
            break;
            case '@': this.#player = new Player(x,y);
            break;
        }
    }

    draw() {
        this.#background.draw();
        this.#blocks.forEach( (block) => block.draw() );
        this.#player.draw();
    }

    update() {
        this.#player.update();
    }

    getPlayer() {
        return this.#player;
    }

}