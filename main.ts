namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const decoration = SpriteKind.create()
}
function get_random_lobster () {
    if (randint(2, 2) == -1) {
        return sprites.create(img`
            . . . . . . . . . . . c c . . . 
            . . . . . . . c c c c 6 3 c . . 
            . . . . . . c 6 3 3 3 3 6 c . . 
            . . c c . c 6 c c 3 3 3 3 3 c . 
            . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
            . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
            . f f 5 c 6 c 5 f f 6 3 3 3 c c 
            . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
            . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
            . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
            c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
            b 5 4 b 4 4 4 c 5 5 5 b c c . . 
            c 4 5 5 b 4 4 c 5 5 5 c b b . . 
            c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
            c 5 5 5 5 c 4 c c c c c c 5 c . 
            . c c c c c c . . . . . c c c . 
            `, SpriteKind.decoration)
    } else {
        if (randint(2, 2) == 3) {
            return sprites.create(img`
                ......ccccc.............
                ....bb33bbbcc3..........
                ...bbd33d3b333..........
                ..bdddb33d3333c.........
                .bddddb333333cbc........
                .bddbb333333dcbc........
                bddb333333333dbc........
                bddb33333333333cccb.....
                cdddddbb333cc33bdddbc...
                cdddddd333cbbbbdddddcc..
                cbddddd33bbbbbddddddccc.
                cbbbddb33cbbbcdddddcbbcc
                .cbbbbbbcbbbccbdddcbbccc
                .cccbbbbbbbccccbbbbbcccc
                `, SpriteKind.decoration)
        } else {
            return sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . c c . . . 
                . . . . . . c c c c c 6 3 c . . 
                . . . . . c 6 6 3 3 3 3 6 c c . 
                . . . . c 6 6 6 6 3 3 3 3 3 6 c 
                . . . . c 6 6 6 6 6 3 3 3 3 3 c 
                . . c c c 6 6 6 6 6 6 3 3 3 3 c 
                . c 3 3 3 c 6 6 6 6 6 6 6 6 c c 
                c 6 c c c 3 c c 6 6 6 3 3 3 6 c 
                c c c c c c c c c 6 3 3 3 3 3 c 
                c 5 5 4 c c 5 5 4 c 6 6 c c c . 
                c 4 5 5 c 5 5 5 c 6 6 6 c . . . 
                . c c c c c c c c c c c . . . . 
                `, SpriteKind.decoration)
        }
    }
}
sprites.onOverlap(SpriteKind.NPC, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    lives_left += 0 - 1
    if (lives_left <= 0) {
        game.over(false, effects.bubbles)
    } else {
        scene.cameraShake(4, 500)
        music.pewPew.play()
        animation.runMovementAnimation(
        sprite,
        animation.animationPresets(animation.bobbing),
        1000,
        false
        )
    }
})
function get_random_clamperl () {
    if (randint(2, 2) == -1) {
        return sprites.create(img`
            . . . . . f c c c c f . . . . . 
            . . c c f b b 3 3 b b f c c . . 
            . c b 3 3 b b c c b b 3 3 b c . 
            . f 3 c c c b c c b c c c 3 f . 
            f c b b c c b c c b c c b b c f 
            c 3 c c b c c c c c c b c c 3 c 
            c 3 c c c c c c c c c c c c 3 c 
            . f b b c c c c c c c c b b f . 
            . . f b b c 8 9 9 8 c b b f . . 
            . . c c c f 9 3 1 9 f c c c . . 
            . c 3 f f f 9 3 3 9 f f f 3 c . 
            c 3 f f f f 8 9 9 8 f f f f 3 c 
            f 3 c c f f f f f f f f c c 3 f 
            f b 3 c b b f b b f b b c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.decoration)
    } else {
        if (randint(2, 2) == 3) {
            return sprites.create(img`
                . . . . . f c c c c f . . . . . 
                . . c c f b b 3 3 b b f c c . . 
                . c b 3 3 b b c c b b 3 3 b c . 
                . f 3 c c c b c c b c c c 3 f . 
                f c b b c c b c c b c c b b c f 
                c 3 c c b c c c c c c b c c 3 c 
                c 3 c c c c c c c c c c c c 3 c 
                . f b b c c c c c c c c b b f . 
                . . f b b c c c c c c b b f . . 
                . . c c c f f f f f f c c c . . 
                . c 3 f f f f f f f f f f 3 c . 
                c 3 f f f f f f f f f f f f 3 c 
                f 3 c c f f f f f f f f c c 3 f 
                f b 3 c b b f b b f b b c 3 b f 
                . c b b 3 3 b 3 3 b 3 3 b b c . 
                . . f f f f f f f f f f f f . . 
                `, SpriteKind.decoration)
        } else {
            return sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . c c c c c c c c . . . . 
                . . c c b b 3 b 3 3 b b c c . . 
                . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
                c d d b 3 3 b 3 3 b 3 3 b d d c 
                f c c c d d c d d c d d c c c f 
                f b 3 c c c b c c b c c c 3 b f 
                . c b b 3 3 b 3 3 b 3 3 b b c . 
                . . f f f f f f f f f f f f . . 
                `, SpriteKind.decoration)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    score += 1
    if (score > 10) {
        game.over(true, effects.bubbles)
    }
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    sprite.setVelocity(0, 25)
})
let trash2: Sprite = null
let trash: Sprite = null
let score = 0
let lives_left = 0
tiles.setCurrentTilemap(tilemap`backdrop1`)
game.showLongText("About 100 million fishes die every year due to plastic in the ocean", DialogLayout.Bottom)
game.showLongText("Help the unsuspecting creatures by cleaning up oceans", DialogLayout.Bottom)
let boat = sprites.create(img`
    ....................
    ....................
    ....................
    .........ee.........
    ........eeee........
    ......eee999e.......
    .....ee99999ee......
    ....ee99989999e.....
    ...ee9918999999e....
    ...e99189999999e....
    eeeeeeeeeeeeeeeeeeee
    eeddddddddddddddddee
    .eeddddddddddddddee.
    ..eeddddddddddddee..
    ...eeddddddddddee...
    ....eeddddddddee....
    .....eeeeeeeeee.....
    ....................
    ....................
    ....................
    `, SpriteKind.Enemy)
let boat2 = sprites.create(img`
    ....................
    ....................
    ....................
    .........ee.........
    ........eeee........
    ......eee999e.......
    .....ee99999ee......
    ....ee99989999e.....
    ...ee9918999999e....
    ...e99189999999e....
    eeeeeeeeeeeeeeeeeeee
    eeddddddddddddddddee
    .eeddddddddddddddee.
    ..eeddddddddddddee..
    ...eeddddddddddee...
    ....eeddddddddee....
    .....eeeeeeeeee.....
    ....................
    ....................
    ....................
    `, SpriteKind.Enemy)
boat.setPosition(10, 10)
boat2.setPosition(140, 10)
game.showLongText("Collect plastic bags thrown in the sea by the BOAT", DialogLayout.Bottom)
let fish = sprites.create(img`
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . c c 
    . . . c 4 d 4 4 4 4 4 1 c c 4 c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
    . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
    f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
    . f 4 4 4 4 1 c c 4 4 d f f . . 
    . . f f 4 d 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
fish.setPosition(20, 110)
let fish2 = sprites.create(img`
    . . . . . . . . . c c c c c . . 
    . . . . . . c c c 5 5 5 5 c c . 
    . . . . c c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . c 1 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 c b 5 c 
    . . c c d 1 c 1 b 1 1 1 b b 5 c 
    c c c d d 1 1 1 b 1 b 1 5 5 5 c 
    f d d d 1 1 1 1 1 1 b 1 b b c c 
    . f f 1 1 1 1 1 1 b b 1 f . . . 
    . . . f 1 1 1 1 1 b b b f . . . 
    . . . . f f 1 1 b b 5 5 f . . . 
    . . . . . . f 5 5 5 5 5 f . . . 
    . . . . . . . f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
fish2.setPosition(150, 110)
game.showLongText("BEFORE THEY'RE EATEN BY THE FISHES", DialogLayout.Top)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
lives_left = 3
let backdrop = true
fish.setVelocity(-50, 0)
fish.setPosition(10, 110)
fish.setBounceOnWall(true)
fish2.setVelocity(-50, 0)
fish2.setBounceOnWall(true)
boat.setVelocity(50, 0)
boat.setBounceOnWall(true)
boat.setPosition(10, 10)
boat2.setVelocity(50, 0)
boat2.setBounceOnWall(true)
boat2.setPosition(140, 10)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let decoration_cords = [
10,
40,
80,
120
]
for (let index = 0; index < 2; index++) {
    get_random_clamperl().setPosition(decoration_cords.removeAt(randint(-1, 4)), 120)
    get_random_lobster().setPosition(decoration_cords.removeAt(randint(-1, 4)), 120)
}
game.onUpdateInterval(1000, function () {
    backdrop = !(backdrop)
    if (backdrop) {
        tiles.setCurrentTilemap(tilemap`backdrop1`)
    } else {
        tiles.setCurrentTilemap(tilemap`backdrop2`)
    }
})
game.onUpdateInterval(1000, function () {
    trash = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . d d . . . . . . . . . . . . 
        . d d d d . . . . . d d d d . . 
        . d . . d . . . . . d d d d . . 
        . d . . d . . . . . d . . d . . 
        . d . . d . . . . . d . . d . . 
        . d d d d . . . . . d . . d . . 
        . . d d d d d d d d d d d d . . 
        . . d d d d d d d d d d d d . . 
        . . . d d d d d d d d d d d . . 
        . . . . d d d d d d d d d d . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . d d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    trash.setPosition(boat.x, boat.y + 10)
    trash2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . d d . . . . . . . . . . . . 
        . d d d d . . . . . d d d d . . 
        . d . . d . . . . . d d d d . . 
        . d . . d . . . . . d . . d . . 
        . d . . d . . . . . d . . d . . 
        . d d d d . . . . . d . . d . . 
        . . d d d d d d d d d d d d . . 
        . . d d d d d d d d d d d d . . 
        . . . d d d d d d d d d d d . . 
        . . . . d d d d d d d d d d . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . d d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    trash2.setPosition(boat2.x, boat2.y + 10)
    if (randint(-1, 1) == 0) {
        boat.setVelocity(randint(100, 200), 0)
        fish.setVelocity(randint(-50, -25), 0)
        fish2.setVelocity(randint(25, 50), 0)
    } else {
        boat.setVelocity(randint(-100, -200), 0)
        fish.setVelocity(randint(0, 50), 0)
        fish2.setVelocity(randint(-50, -25), 0)
    }
})
