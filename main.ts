input.onButtonPressed(Button.AB, function () {
    if (aa == 0) {
        aa = 1
    } else {
        aa = 0
    }
})
let aa = 0
radio.setGroup(8)
aa = 0
basic.showLeds(`
    # # # . #
    # . . . .
    # . # . #
    # . # . #
    # # # . #
    `)
basic.pause(1000)
basic.forever(function () {
    basic.clearScreen()
    if (aa == 1) {
        if (input.buttonIsPressed(Button.A)) {
            radio.sendNumber(1)
            led.plot(0, 2)
        } else if (input.buttonIsPressed(Button.B)) {
            radio.sendNumber(2)
            led.plot(4, 2)
        } else {
            radio.sendNumber(3)
            led.plot(2, 0)
        }
    } else {
        radio.sendNumber(0)
        led.plot(2, 2)
    }
    basic.pause(100)
})
