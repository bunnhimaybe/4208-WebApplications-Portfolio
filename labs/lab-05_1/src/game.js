const config = new Object();

config.type = Phaser.CANVAS;        // HTML rendering API (layers)
config.width = 32 * 96;                 // 32px/tile * 96 tiles/world
config.height = 32 * 16;                // 32px/tile * 16 tiles/world
config.pixelArt = true;
config.scene = [ Level1 ];          // scenes

const game = new Phaser.Game(config);   // create game instance with configs