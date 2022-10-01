class playGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");
    }
    create() {
        // create an tiled sprite with the size of our game screen
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, "background");

        // Set its pivot to the top left corner
        this.background.setOrigin(0, 0);

        // fix it so it won't move when the camera moves.
        // Instead we are moving its texture on the update
        this.background.setScrollFactor(0);

        // Add a second background layer.
        this.midground = this.add.tileSprite(0, 0, game.config.width, game.config.height, "midground");
        this.midground.setOrigin(0, 0);
        this.midground.setScrollFactor(0);

        // add the ground layer 
        this.ground = this.add.tileSprite(0, 0, game.config.width, 80, "ground");
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);
        this.ground.y = game.config.height - 50;

        // add the ceiling layer 
        this.ceiling = this.add.tileSprite(0, 0, game.config.width, 63, "ceiling");
        this.ceiling.setOrigin(0, 0);
        this.ceiling.setScrollFactor(0);
        this.ceiling.y = -10;

        // add the left_wall layer 
        this.left_wall = this.add.tileSprite(0, 0, 47, game.config.height, "left_wall");
        this.left_wall.setOrigin(0, 0);
        this.left_wall.x = -10;

        // add the right_wall layer 
        this.right_wall = this.add.tileSprite(game.config.width *3, game.config.height/2, 46, game.config.height, "right_wall");
        this.right_wall.x = (game.config.width*3)-10;
        this.right_wall.scaleX = -1;

        // add player
        this.player = this.add.sprite(game.config.width * 1.5, game.config.height / 2, "player").setScale(3);

        // create an animation for the player
        this.anims.create({
        key: "swim",
        frames: this.anims.generateFrameNumbers("player"),
        frameRate: 2,
        repeat: -1
        });
        this.player.play("swim");

        // allow key inputs to control the player
        this.cursors = this.input.keyboard.createCursorKeys();

        // set bounds to allow camera to follow the player
        this.myCam = this.cameras.main;
        this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);

        // making the camera follow the player
        this.myCam.startFollow(this.player);

    }


    update() {

        // move the player when the arrow keys are pressed
        if (this.cursors.left.isDown && this.player.x > 0) {
          this.player.x -= 6;
          this.player.scaleX = -3;

        } else if (this.cursors.right.isDown && this.player.x < game.config.width * 3) {
            this.player.x += 6;
            this.player.scaleX = 3;

        }
        if (this.cursors.up.isDown && this.player.y > 0) {
            this.player.y -= 3;

        } else if (this.cursors.down.isDown && this.player.y < game.config.height) {
            this.player.y += 3;

        }

        // scroll the texture of the tilesprites proportionally to the camera scroll
        this.background.tilePositionX = this.myCam.scrollX * .3;
        this.midground.tilePositionX = this.myCam.scrollX * .6;
        this.ground.tilePositionX = this.myCam.scrollX;
        this.ceiling.tilePositionX = this.myCam.scrollX;


    }
}
