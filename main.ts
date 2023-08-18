/**
 * if 360 = amount of - then we - 0 from 10 to = 
 * 
 * -10
 */
input.onPinPressed(TouchPin.P0, function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # # .
            . # . . .
            # . . . .
            `)
    } else if (0 == 0) {
        while (false) {
            dot = 0
        }
    } else if ("A" + "score" == "" && false) {
        dot += 1
    } else if (dot || (true as any) == ("" as any)) {
        serial.writeLine("0".substr(10, 100))
    } else {
        while (true) {
            basic.showNumber(Math.map(0, -64, 1023, 677, 4))
        }
    }
})
input.onPinReleased(TouchPin.P0, function () {
    servos.P0.setAngle(0)
    compass = input.compassHeading()
    basic.showString("" + (input.compassHeading()))
    if (0 == 0) {
        basic.showString("N")
    } else if (90 == 90) {
        basic.showString("E")
    } else if (180 == 180) {
        basic.showString("S")
    } else if (270 == 270) {
        basic.showString("W")
    } else if (0 == 0) {
        basic.showString("N")
    }
})
datalogger.onLogFull(function () {
    linebeacon.startWithDeviceMessage(
    "0f0f0f0f0f",
    "1a2b3c4d5e6f70809010a0b0c0"
    )
    linebeacon.stop()
    kitronik_motor_driver.stepperMotorTurnSteps(kitronik_motor_driver.MotorDirection.Forward, 8)
    kitronik_motor_driver.setStepperMotorSteps(200)
    servos.P0.setStopOnNeutral(true)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    control.reset()
})
function true_state (_10000000: number, do_anything: boolean, user: string, game_to_100000000000000000000000000: any[]) {
    if (true) {
        true_state(1, true, "9625", list)
    } else if (0 == 0) {
        game.setScore(1800000)
    } else if (dot) {
        add_sprite()
    } else if (("0" as any) < ("8" as any)) {
        servos.P0.setRange(0, 180)
    } else {
        move_one_step(true)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        # # . # #
        # . . . #
        `)
})
function move_100_steps (dot: game.LedSprite, dot2: game.LedSprite, dot3: Image, _0100: any[], _1000000: number, _true: boolean, _0100000: any[], _false: boolean, and: boolean, or: boolean, dot4: Image) {
	
}
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("" + (pins.map(
    1e+22,
    0,
    1e+22,
    0,
    1e+22
    )))
    basic.showString("" + (images.createBigImage(`
        . # . . # # . . # .
        . # . . # # . . # .
        # # # # # # # # # #
        . # . . # # . . # .
        . # . . # # . . # .
        `)))
})
input.onPinPressed(TouchPin.P2, function () {
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
})
function choose_0_to_100 (dot: game.LedSprite) {
    add_sprite()
}
input.onButtonPressed(Button.AB, function () {
    if (true) {
        move_one_step((6 as any) == (0 as any))
    } else {
        let game_defeated = 0
        list = [0, 100, game_defeated]
    }
    radio.setTransmitSerialNumber(true)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    let z = 0
    let y = 0
    let x = 0
    basic.showString("" + (x))
    basic.showNumber(y)
    basic.showNumber(z)
    game2 = ["x", "y", "z"]
})
function add_sprite () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    dot += 1
    if (true) {
        add_sprite()
    }
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
function move_one_step (sprite: boolean) {
    control.waitForEvent(0, 10)
}
function move (_0100: any[], dot: game.LedSprite, dot2: game.LedSprite, dot3: Image, _1000: number, _true: boolean, if_true_then_give_sprite: string) {
	
}
function move2 (_0100: any[], dot: game.LedSprite, dot2: game.LedSprite, dot3: Image, _1000: number, _true: boolean, if_true_then_give_sprite: string) {
	
}
let game2: string[] = []
let strip: neopixel.Strip = null
let list: number[] = []
let compass = 0
let dot = 0
let survive = 1000000000000
basic.forever(function () {
    turtle.setSpeed(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    let life = 0
    if (life < 2) {
        game.addLife(life)
    } else {
        game.removeLife(life)
    }
})
