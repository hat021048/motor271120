input.onButtonPressed(Button.A, function () {
    Fram()
})
function stopp () {
    while (speed > 0) {
        speed += -10
        pins.analogWritePin(AnalogPin.P0, speed)
    }
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Fram () {
    while (speed > 0) {
        speed += -10
        pins.analogWritePin(AnalogPin.P0, speed)
        basic.pause(15)
    }
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    while (speed < 1023) {
        speed += 10
        pins.analogWritePin(AnalogPin.P0, speed)
        basic.pause(15)
    }
}
input.onButtonPressed(Button.AB, function () {
    stopp()
})
input.onButtonPressed(Button.B, function () {
    bak()
})
function bak () {
    while (speed > 0) {
        speed += -10
        pins.analogWritePin(AnalogPin.P0, speed)
        basic.pause(15)
    }
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    while (speed < 1023) {
        speed += 10
        pins.analogWritePin(AnalogPin.P0, speed)
        basic.pause(15)
    }
}
let speed = 0
basic.showIcon(IconNames.SmallHeart)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
speed = 0
basic.forever(function () {
	
})
