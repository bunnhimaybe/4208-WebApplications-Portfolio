// parse and manage game world data

class World {

    #levels;

    // parses each row per level per world
    constructor() {
        this.#levels = world.map( level => 
            (level.split('\n')).map(row => row.split('')) );
    }
    
    getLevel(level) {
        return this.#levels[level];
    }
    
}