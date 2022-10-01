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


      this.load.spritesheet('player', 
          'assets/player/shark.png',
          { frameWidth: 28.9, frameHeight:17 }
      );
    }
    create(){
      this.scene.start("PlayGame");
    }
}