class Block extends GameObject {
    
    static SIZE = 32;

    constructor( x, y, image='assets/tile-brick.png') {
        super(x * Block.SIZE, y * Block.SIZE, Block.SIZE, Block.SIZE, image);
    }
}