const loadSprites = () => {
    let scene = game.scene.scenes[0];

    for (let color of game_colors) {
        // BOMBERMAN
        scene.load.spritesheet(color + '-bm',
            './assets/sprites/snes_' + color + '.png',
            { frameWidth: 17, frameHeight: 26 }
        );

        //BOMBS
        scene.load.spritesheet(color + '-bomb',
            './assets/sprites/snes_bombs_' + color + '.png',
            { frameWidth: 16, frameHeight: 16 }
        );

        //FLAMES
        scene.load.spritesheet(color + '-flame',
            './assets/sprites/snes_flames_' + color + '.png',
            { frameWidth: 16, frameHeight: 16 }
        );

        //WALLS DESTROYED
        scene.load.spritesheet(color + '-wall-destroyed',
            './assets/sprites/' + color + '_wall_destroyed.png',
            { frameWidth: 16, frameHeight: 16 }
        );
    }

    //WALLS
    scene.load.spritesheet('walls',
        './assets/tiles/snes_stage_1.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    //ITEMS
    scene.load.spritesheet('items',
        './assets/sprites/snes_items.png',
        { frameWidth: 16, frameHeight: 16 }
    );
}