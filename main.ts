controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.vy == 0) {
        Hero.vy = -150
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        5000,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    80,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `],
    80,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (info.score() == 5) {
        tiles.setCurrentTilemap(tilemap`level1`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.changeCountdownBy(10)
    tiles.setTileAt(location, sprites.dungeon.floorDark2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let moving = false
let Hero: Sprite = null
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(tilemap`level4`)
Hero = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f f . . 
    . . f e e e 4 d d d d f d d f . 
    . . . f f e e 4 e e e f b b f . 
    . . . . f 2 2 2 4 d d e b b f . 
    . . . . e 2 2 2 e d d e b f . . 
    . . . . f 4 4 4 f e e f f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hero, 100, 0)
Hero.ay = 200
scene.cameraFollowSprite(Hero)
tiles.placeOnRandomTile(Hero, sprites.dungeon.doorClosedNorth)
info.changeScoreBy(0)
info.startCountdown(25)
info.setLife(3)
let Ghost = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnTile(Ghost, tiles.getTileLocation(7, 3))
Ghost.setVelocity(50, 0)
Ghost.setBounceOnWall(true)
animation.runImageAnimation(
Ghost,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
80,
true
)
let Ghost2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnTile(Ghost2, tiles.getTileLocation(34, 11))
Ghost2.setVelocity(50, 0)
Ghost2.setBounceOnWall(true)
animation.runImageAnimation(
Ghost2,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
80,
true
)
let Ghost3 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnTile(Ghost3, tiles.getTileLocation(82, 9))
Ghost3.setVelocity(50, 0)
Ghost3.setBounceOnWall(true)
animation.runImageAnimation(
Ghost3,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
80,
true
)
let Ghost4 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnTile(Ghost4, tiles.getTileLocation(48, 8))
Ghost4.setVelocity(50, 0)
Ghost4.setBounceOnWall(true)
animation.runImageAnimation(
Ghost4,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
80,
true
)
let Bat = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Bat, tiles.getTileLocation(53, 12))
Bat.setVelocity(0, 50)
Bat.setBounceOnWall(true)
animation.runImageAnimation(
Bat,
[img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c . . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f b 3 b c 3 b c f b b c c c . 
    . c b b b b b b c f b c b c c . 
    . c b b b b b b c b b c b b c . 
    c b 1 b b b 1 b b b c c c b c . 
    c b b b b b b b b c c c c c . . 
    f b c b b b c b b b b f c . . . 
    f b 1 f f f 1 b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . c c . . c c . . . . . . . . 
    . . c 3 c c 3 c c c . . . . . . 
    . c b 3 b c 3 b c c c . . . . . 
    . c b b b b b b b b f f . . . . 
    c c b b b b b b b b f f . . . . 
    c b 1 b b b 1 b b c f f f . . . 
    c b b b b b b b b f f f f . . . 
    f b c b b b c b c c b b b . . . 
    f b 1 f f f 1 b f c c c c . . . 
    . f b b b b b b f b b c c . . . 
    c c f b b b b b c c b b c . . . 
    c c c f f f f f f c c b b c . . 
    . c c c . . . . . . c c c c c . 
    . . c c c . . . . . . . c c c c 
    . . . . . . . . . . . . . . . . 
    `,img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c b 1 b b b 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `],
80,
true
)
let Bat2 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Bat2, tiles.getTileLocation(87, 4))
Bat2.setVelocity(0, 50)
Bat2.setBounceOnWall(true)
animation.runImageAnimation(
Bat2,
[img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c . . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f b 3 b c 3 b c f b b c c c . 
    . c b b b b b b c f b c b c c . 
    . c b b b b b b c b b c b b c . 
    c b 1 b b b 1 b b b c c c b c . 
    c b b b b b b b b c c c c c . . 
    f b c b b b c b b b b f c . . . 
    f b 1 f f f 1 b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . c c . . c c . . . . . . . . 
    . . c 3 c c 3 c c c . . . . . . 
    . c b 3 b c 3 b c c c . . . . . 
    . c b b b b b b b b f f . . . . 
    c c b b b b b b b b f f . . . . 
    c b 1 b b b 1 b b c f f f . . . 
    c b b b b b b b b f f f f . . . 
    f b c b b b c b c c b b b . . . 
    f b 1 f f f 1 b f c c c c . . . 
    . f b b b b b b f b b c c . . . 
    c c f b b b b b c c b b c . . . 
    c c c f f f f f f c c b b c . . 
    . c c c . . . . . . c c c c c . 
    . . c c c . . . . . . . c c c c 
    . . . . . . . . . . . . . . . . 
    `,img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c b 1 b b b 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `],
80,
true
)
let Bat3 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Bat3, tiles.getTileLocation(29, 10))
Bat3.setVelocity(0, 50)
Bat3.setBounceOnWall(true)
animation.runImageAnimation(
Bat3,
[img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c . . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f b 3 b c 3 b c f b b c c c . 
    . c b b b b b b c f b c b c c . 
    . c b b b b b b c b b c b b c . 
    c b 1 b b b 1 b b b c c c b c . 
    c b b b b b b b b c c c c c . . 
    f b c b b b c b b b b f c . . . 
    f b 1 f f f 1 b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . c c . . c c . . . . . . . . 
    . . c 3 c c 3 c c c . . . . . . 
    . c b 3 b c 3 b c c c . . . . . 
    . c b b b b b b b b f f . . . . 
    c c b b b b b b b b f f . . . . 
    c b 1 b b b 1 b b c f f f . . . 
    c b b b b b b b b f f f f . . . 
    f b c b b b c b c c b b b . . . 
    f b 1 f f f 1 b f c c c c . . . 
    . f b b b b b b f b b c c . . . 
    c c f b b b b b c c b b c . . . 
    c c c f f f f f f c c b b c . . 
    . c c c . . . . . . c c c c c . 
    . . c c c . . . . . . . c c c c 
    . . . . . . . . . . . . . . . . 
    `,img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c b 1 b b b 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `],
80,
true
)
let Bat4 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Bat4, tiles.getTileLocation(46, 10))
Bat4.setVelocity(0, 50)
Bat4.setBounceOnWall(true)
animation.runImageAnimation(
Bat4,
[img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c . . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f b 3 b c 3 b c f b b c c c . 
    . c b b b b b b c f b c b c c . 
    . c b b b b b b c b b c b b c . 
    c b 1 b b b 1 b b b c c c b c . 
    c b b b b b b b b c c c c c . . 
    f b c b b b c b b b b f c . . . 
    f b 1 f f f 1 b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . c c . . c c . . . . . . . . 
    . . c 3 c c 3 c c c . . . . . . 
    . c b 3 b c 3 b c c c . . . . . 
    . c b b b b b b b b f f . . . . 
    c c b b b b b b b b f f . . . . 
    c b 1 b b b 1 b b c f f f . . . 
    c b b b b b b b b f f f f . . . 
    f b c b b b c b c c b b b . . . 
    f b 1 f f f 1 b f c c c c . . . 
    . f b b b b b b f b b c c . . . 
    c c f b b b b b c c b b c . . . 
    c c c f f f f f f c c b b c . . 
    . c c c . . . . . . c c c c c . 
    . . c c c . . . . . . . c c c c 
    . . . . . . . . . . . . . . . . 
    `,img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c b 1 b b b 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `],
80,
true
)
game.onUpdate(function () {
    moving = controller.left.isPressed() || controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed())
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Hero)
        Hero.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    }
})
