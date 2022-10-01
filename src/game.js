var game;
window.onload = function(){
  let gameConfig = {
    type: Phaser.AUTO,
    width: (window.innerWidth * window.devicePixelRatio)/2,
    height: (window.innerHeight * window.devicePixelRatio)/2.5,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    
    scene: [preloadGame, playGame]
  }
  game = new Phaser.Game(gameConfig);
}