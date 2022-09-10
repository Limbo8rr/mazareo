scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
let mystickfigure = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 . 2 2 . . . . . . 
    . . . . 2 2 . . . 2 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mystickfigure, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mystickfigure, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mystickfigure)
info.startCountdown(30)
forever(function () {
    music.playMelody("E E D E F E D F ", 100)
})
