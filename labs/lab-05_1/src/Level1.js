class Level1 extends Phaser.Scene {

    // construct new scene
    constructor(key='Level1') {
        super(key); // set scene's id within superclass constructor
        this.map_key = 'map1';
        this.map_json = 'level1.json'
    }

    // preload external game assets
    preload() {
        this.preload.path = 'assets/';
        this.preload.tilemapTiledJSON( this.map_key, this.map_json );   // load JSON file
        const tile_size = {frameWidth: 32, frameHeight: 32};            // define tile size
        this.preload.spritesheet('tiles', 'tiles.png', tile_size);      // load tile spritesheet
    }

    // create game data
    create() {
        this.create_map();      // create level
    }

    // update game data
    update() {

    }


    // ---------------
    // Helper Functions
    // ---------------

}

