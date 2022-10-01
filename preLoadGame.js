class preloadGame extends Phaser.Scene{
    constructor(){
        super("PreloadGame");
    }
    preload(){
        //background textures
        this.load.image('background', 'assets/environment/background.png');
        this.load.image('midground', 'assets/environment/midground.png');

        // platforms
        this.load.image('ground', 'assets/environment/platform-1.png');
        this.load.image('ceiling', 'assets/environment/ceiling.png');
        this.load.image('left_wall', 'assets/environment/left_wall.png');
        this.load.image('right_wall', 'assets/environment/left_wall.png');

        this.load.spritesheet('player', 
            'assets/player/shark.png',
            { frameWidth: 29, frameHeight:17 }
        );
    }
    create(){
        this.scene.start("PlayGame");
    }
}