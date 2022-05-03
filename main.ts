namespace SpriteKind {
    export const NPC = SpriteKind.create()
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
let trash: Sprite = null
let score = 0
let lives_left = 0
tiles.setCurrentTilemap(tilemap`backdrop1`)
game.showLongText("Pollution levels in the ocean are at an all time high.", DialogLayout.Bottom)
let boat = sprites.create(img`
    ....................
    ....................
    ....................
    .........dd.........
    ........dddd........
    .......dd999d.......
    .....dd99999dd......
    ....dd99989999d.....
    ...dd9918999999d....
    ...d99189999999d....
    dddddddddddddddddddd
    ddd11111111111111ddd
    .ddd111111111111ddd.
    ..ddd1111111111ddd..
    ...ddd11111111ddd...
    ....ddd111111ddd....
    .....dddddddddd.....
    ....................
    ....................
    ....................
    `, SpriteKind.Enemy)
boat.setPosition(10, 10)
game.showLongText("Collect plastic bags thrown in the sea by the BOAT", DialogLayout.Bottom)
let fish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 . . . . . . . . 
    . . . 2 2 2 1 2 2 . . . . . 2 . 
    . . 2 1 2 2 1 2 1 2 . . . 1 2 2 
    . 1 2 1 2 2 1 2 1 2 2 . 2 1 1 2 
    2 1 2 8 8 2 1 2 1 2 2 1 2 2 1 2 
    2 1 2 8 8 2 1 2 1 2 2 1 2 2 1 2 
    2 1 2 1 2 1 1 2 1 2 2 1 2 2 1 2 
    . 1 2 1 2 1 2 2 1 2 2 . 2 2 1 2 
    . . 2 1 2 1 2 2 1 2 . . . 2 1 2 
    . . . 2 2 1 2 2 2 . . . . . 2 . 
    . . . . 2 2 2 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
fish.setPosition(20, 110)
let fish2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a 4 a a . . . . . . . . 
    . . . a a 4 4 a a . . . . . a . 
    . . a a a a 4 a a a . . . a 4 a 
    . 4 a 1 f a 4 a a a 4 . a a 4 a 
    a 4 a 1 1 a 4 a a 4 4 a a 4 a a 
    a 4 4 a a 4 4 a a 4 a a a 4 4 a 
    a 4 4 a a 4 a a a 4 a a a a 4 a 
    . 4 a a 4 a a a a 4 a . a a 4 a 
    . . a a 4 4 a a a 4 . . . a 4 a 
    . . . a a 4 a a a . . . . . 4 . 
    . . . . a 4 a a . . . . . . . . 
    . . . . . . . . . . . . . . . . 
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
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(1000, function () {
    backdrop = !(backdrop)
    if (backdrop) {
        tiles.setCurrentTilemap(tilemap`backdrop1`)
    } else {
        tiles.setCurrentTilemap(tilemap`backdrop2`)
    }
})
game.onUpdateInterval(500, function () {
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
