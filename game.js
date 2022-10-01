var game;
window.onload = function(){
  let gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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