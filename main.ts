controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.y += -16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.x += -16
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprite.destroy()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.x += 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    if (Hero.overlapsWith(Raft) || Hero.overlapsWith(Raft3)) {
        Hero.setVelocity(50, 0)
    } else if (Hero.overlapsWith(Raft2)) {
        Hero.setVelocity(-40, 0)
    } else {
        info.changeLifeBy(-1)
        sprite.y += 16
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.y += 16
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnTile(Hero, tiles.getTileLocation(5, 14))
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.y += 16
})
let Car02: Sprite = null
let Car03: Sprite = null
let Car01: Sprite = null
let Raft2: Sprite = null
let Raft3: Sprite = null
let Raft: Sprite = null
let Hero: Sprite = null
tiles.setTilemap(tilemap`level1`)
Hero = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
let End = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(Hero, tiles.getTileLocation(5, 14))
tiles.placeOnTile(End, tiles.getTileLocation(5, 0))
scene.cameraFollowSprite(Hero)
info.setLife(3)
Hero.z = 100
game.onUpdateInterval(2500, function () {
    Car01 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 6 6 . . 
        . . . . . 6 c 6 6 6 6 6 6 9 6 . 
        . . . . 6 c c 6 6 6 6 6 6 9 c 6 
        . . d 6 9 c c 6 9 9 9 9 9 9 c c 
        . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
        . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
        . 6 6 6 6 6 8 b b b b 8 b b b 8 
        . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
        . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
        . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
        . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
        . 8 8 8 8 f f f 8 8 8 8 f f f f 
        . . . 8 f f f f f 8 8 f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Car01, tiles.getTileLocation(9, 8))
    Car01.setVelocity(randint(-30, -50), 0)
})
game.onUpdateInterval(2000, function () {
    Raft = sprites.create(img`
        eeeeebbbbbbeeeeeeeeeebbbbbbeeeee
        eeebbddddddbbeeeeeebbddddddbbeee
        eebbddbbbbddbbeeeebbddbbbbddbbee
        eedbdbddddbdbdeeeedbdbddddbdbdee
        efdbddbbbbddbdeeefdbddbbbbddbdee
        efbdbbddddbbdbeeefbdbbddddbbdbee
        efedddbbbbdddeeeefedddbbbbdddeee
        effebddddddbeefeeffebddddddbeefe
        effeeeeeeeeeeefeeffeeeeeeeeeeefe
        effeeefeeeeeeefeeffeeefeeeeeeefe
        effefeeeffeefeefeffefeeeffeefeef
        efeefefefefefeeeefeefefefefefeee
        ffeeeefeeffeffeeffeeeefeeffeffee
        feeeeffeeeeefffefeeeeffeeeeefffe
        eeeefffefeeeefffeeeefffefeeeefff
        eeeefffefeeeefffeeeefffefeeeefff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.Projectile)
    tiles.placeOnTile(Raft, tiles.getTileLocation(0, 12))
    Raft.setVelocity(50, 0)
})
game.onUpdateInterval(2000, function () {
    Car03 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Car03, tiles.getTileLocation(0, 7))
    Car03.setVelocity(randint(40, 70), 0)
})
game.onUpdateInterval(2000, function () {
    Raft2 = sprites.create(img`
        eeeeebbbbbbeeeeeeeeeebbbbbbeeeeeeeeeebbbbbbeeeeeeeeeebbbbbbeeeee
        eeebbddddddbbeeeeeebbddddddbbeeeeeebbddddddbbeeeeeebbddddddbbeee
        eebbddbbbbddbbeeeebbddbbbbddbbeeeebbddbbbbddbbeeeebbddbbbbddbbee
        eedbdbddddbdbdeeeedbdbddddbdbdeeeedbdbddddbdbdeeeedbdbddddbdbdee
        efdbddbbbbddbdeeefdbddbbbbddbdeeefdbddbbbbddbdeeefdbddbbbbddbdee
        efbdbbddddbbdbeeefbdbbddddbbdbeeefbdbbddddbbdbeeefbdbbddddbbdbee
        efedddbbbbdddeeeefedddbbbbdddeeeefedddbbbbdddeeeefedddbbbbdddeee
        effebddddddbeefeeffebddddddbeefeeffebddddddbeefeeffebddddddbeefe
        effeeeeeeeeeeefeeffeeeeeeeeeeefeeffeeeeeeeeeeefeeffeeeeeeeeeeefe
        effeeefeeeeeeefeeffeeefeeeeeeefeeffeeefeeeeeeefeeffeeefeeeeeeefe
        effefeeeffeefeefeffefeeeffeefeefeffefeeeffeefeefeffefeeeffeefeef
        efeefefefefefeeeefeefefefefefeeeefeefefefefefeeeefeefefefefefeee
        ffeeeefeeffeffeeffeeeefeeffeffeeffeeeefeeffeffeeffeeeefeeffeffee
        feeeeffeeeeefffefeeeeffeeeeefffefeeeeffeeeeefffefeeeeffeeeeefffe
        eeeefffefeeeefffeeeefffefeeeefffeeeefffefeeeefffeeeefffefeeeefff
        eeeefffefeeeefffeeeefffefeeeefffeeeefffefeeeefffeeeefffefeeeefff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.Projectile)
    tiles.placeOnTile(Raft2, tiles.getTileLocation(9, 3))
    Raft2.setVelocity(-40, 0)
})
game.onUpdateInterval(2000, function () {
    Raft3 = sprites.create(img`
        eeeeebbbbbbeeeeeeeeeebbbbbbeeeee
        eeebbddddddbbeeeeeebbddddddbbeee
        eebbddbbbbddbbeeeebbddbbbbddbbee
        eedbdbddddbdbdeeeedbdbddddbdbdee
        efdbddbbbbddbdeeefdbddbbbbddbdee
        efbdbbddddbbdbeeefbdbbddddbbdbee
        efedddbbbbdddeeeefedddbbbbdddeee
        effebddddddbeefeeffebddddddbeefe
        effeeeeeeeeeeefeeffeeeeeeeeeeefe
        effeeefeeeeeeefeeffeeefeeeeeeefe
        effefeeeffeefeefeffefeeeffeefeef
        efeefefefefefeeeefeefefefefefeee
        ffeeeefeeffeffeeffeeeefeeffeffee
        feeeeffeeeeefffefeeeeffeeeeefffe
        eeeefffefeeeefffeeeefffefeeeefff
        eeeefffefeeeefffeeeefffefeeeefff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.Projectile)
    tiles.placeOnTile(Raft3, tiles.getTileLocation(0, 4))
    Raft3.setVelocity(50, 0)
})
game.onUpdateInterval(100, function () {
    Hero.setVelocity(0, 0)
})
game.onUpdateInterval(3000, function () {
    Car02 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Car02, tiles.getTileLocation(0, 9))
    Car02.setVelocity(randint(20, 30), 0)
})
