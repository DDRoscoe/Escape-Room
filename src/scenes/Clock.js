class Clock extends Phaser.Scene {
    constructor(x) {
        super("Clock", x);
    }
      // add object to existing scene
      preload () {
        this.load.image('clockdoor', './assets/ClockDoor.png')
    }
    
    create () {
        this.x = x
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        if (this.x==0) {
            this.add.image(0, 0, 'clockdoor').setOrigin(0);
        }
        if (this.x==1) {
            this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the vase').setOrigin(0.5);
        }
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    }
  
}