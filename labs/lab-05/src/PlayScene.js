class PlayScene extends Phaser.Scene {
    // construct new scene
    constructor() {
        super('play');      // set this scene's id
    }

    // preload external game assets
    preload() {
        this.load.path = 'assets/';      // file path

        this.load.image( 'background', 'background.png');
        this.load.image( 'player', 'player.png');
        this.load.image( 'enemy', 'enemy.png');
    }

    // create game data
    create() {
        this.create_map();
        this.create_player();
        this.create_enemies();
        this.create_collisions();
    }

    // update game data
    update() {
        this.update_player();
    }





    // custom helper methods
    create_map() {
        this.add.image(640/2, 480/2, 'background');
    }

    create_player() {
        this.player = new Player(this);
    }

    create_collisions() {
        this.physics.add.overlap(this.player, this.enemies, this.game_over, null, this);
    }

    create_enemies() {
        this.enemies = [];

        const event = new Object();
        event.delay         = 200;
        event.callback      = this.spawn_enemy;
        event.callbackScope = this;
        event.loop          = true;

        this.time.addEvent(event,this);
    }

    spawn_enemy() {
        const position = {};                        // choose random position
        position.x = 640+32;
        position.y = Phaser.Math.Between(0, 480);

        const monster = new Enemy(this, position);  // create new enemy
        this.enemies.push(monster);                 // create instance
    }

    update_player() {
        this.player.move();
    }

    game_over() {
        this.cameras.main.flash();
        this.scene.restart();
    }
}