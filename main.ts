input.onPinPressed(TouchPin.P0, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(randint(1, 3))
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendNumber(3)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Tie") {
        basic.showString("TIE")
    }
    if (receivedString == "Win") {
        basic.showString("WIN")
    }
    if (receivedString == "Loss") {
        basic.showString("LOSS")
    }
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(2)
})
radio.setGroup(35)
