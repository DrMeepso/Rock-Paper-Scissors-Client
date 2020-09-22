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
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(randint(1, 3))
})
radio.setGroup(35)
