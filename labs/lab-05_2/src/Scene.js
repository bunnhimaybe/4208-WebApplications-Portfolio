// manages data for playable game level

class Scene {

    #background;

    constructor(map) {
        this.setScene(map);
    }

    // parse each tile per level
    setScene(levelData) {
        const cols = levelData[0].length;   // tiles height count
        const rows = levelData.length;      // tiles width count
        this.setBackground( rows, cols);

        for (let x=0; x < rows; x++) {
            for (let y=0; y < cols; y++) {
                const tile = levelData[x][y];
                // console.log(tile);
            }
        }
    }

    setBackground( rows, cols, img='assets/background.png', tilesize=32 ) { // default values
        const width = cols * tilesize; 
        const height = rows * tilesize;
        this.#background = new GameObject( 0, 0, width, height, img); 
    }

    draw() {
        this.#background.draw();
    }

}