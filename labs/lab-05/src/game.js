const config = new Object();

// viewport dimensions
config.width    = 640;
config.height   = 480;
config.scene    = [ PlayScene ];            // game scenes
config.physics  = { default:'arcade' };     // physics

// create new game
const game = new Phaser.Game(config);