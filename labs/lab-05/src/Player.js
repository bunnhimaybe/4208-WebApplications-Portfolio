class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, 300, 200, 'player');
        this.depth = 2;
        this.speed = 200;
        scene.add.existing(this);   // add Player object to display

        scene.physics.add.existing(this);       // add physics body
        this.setCollideWorldBounds(true);
        this.buttons =                          // scene input manager
            scene.input.keyboard.addKeys('up,down,left,right');  
    }

    // player movement
    // reset and check on every frame
    move() {
        // reset velocity 
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        if ( this.buttons.up.isDown ) {
            this.body.velocity.y = -this.speed;
        }
        if ( this.buttons.down.isDown ) {
            this.body.velocity.y = this.speed;
        }
        if ( this.buttons.left.isDown ) {
            this.body.velocity.x = -this.speed;
        }
        if ( this.buttons.right.isDown ) {
            this.body.velocity.x = this.speed;
        }
    }
}