class PaintingDark extends Phaser.Scene {
    constructor() {
        super("paintingDarkScene");
    }

    preload () {
        this.load.image('paintingDark', './assets/paintingDark.png');
        this.load.image('paintingDark2', './assets/Scaryface2.png');
        this.load.image('paintingDark3', './assets/Scaryface3.png');
        this.load.image('paintingDark4', './assets/Scaryface4.png');
        this.load.image('paintingDark5', './assets/Scaryface5.png');
    }

    create () {
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the picture?').setOrigin(0.5);
        
        // timer
        this.timer = 0;
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    
        if (this.timer == 0) {
            this.paint = this.add.image(0, 0, 'paintingDark').setOrigin(0);
        }
        if (this.timer == 750) {
            this.paint2 = this.add.image(0, 0, 'paintingDark2').setOrigin(0);
        }
        if (this.timer == 1500) {
            this.paint3 = this.add.image(0, 0, 'paintingDark3').setOrigin(0);
        }
        if (this.timer == 2250) {
            this.paint4 = this.add.image(0, 0, 'paintingDark4').setOrigin(0);
        }
        if (this.timer == 3000) {
            this.paint5 = this.add.image(0, 0, 'paintingDark5').setOrigin(0);
            this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the picture?').setOrigin(0.5);
        }
        this.timer++;
    }
}