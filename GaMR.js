const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#3a9bdc',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let car;
let cursors;

const game = new Phaser.Game(config);

function preload() {
    this.graphics = this.add.graphics();
    this.graphics.fillStyle(0xff0000, 1);
    this.graphics.fillRect(0, 0, 50, 30);

    this.textures.generate('car', { data: this.graphics, canvas: this.graphics.canvas, width: 50, height: 30 });
}

function create() {
    car = this.physics.add.sprite(400, 300, 'car');
    car.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    car.setVelocity(0);

    if (cursors.left.isDown) {
        car.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        car.setVelocityX(200);
    }

    if (cursors.up.isDown) {
        car.setVelocityY(-200);
    } else if (cursors.down.isDown) {
        car.setVelocityY(200);
    }
}
