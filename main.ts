let Score = 0
let Life = 3
game.startCountdown(60000)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.pause(2000)
if (input.buttonIsPressed(Button.A)) {
    Score += 1
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(2000)
} else {
    Life += -1
}
if (input.buttonIsPressed(Button.B)) {
    Score += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        . # . # .
        . . # . .
        `)
    basic.pause(2000)
} else {
    Life += -1
}
if (input.buttonIsPressed(Button.AB)) {
    Score += 1
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
} else {
    Life += 1
}
if (input.isGesture(Gesture.ScreenUp)) {
    Score += 1
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
} else {
    Life += -1
}
if (input.isGesture(Gesture.ScreenDown)) {
    Score += 1
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    game.pause()
    basic.showString("You did good, it's gonna get HARDER! ")
    basic.showNumber(Score)
}
basic.forever(function () {
	
})
basic.forever(function () {
    if (Life == 0) {
        basic.showString("You ran out of lives!!!! ")
        game.gameOver()
    }
})
