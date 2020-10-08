let Password = ""
game.splash("NBF Virtual Wallet")
let Username = game.askForString("Username:")
if (Username == "1000Infinity") {
    game.splash("You have, ", "141 gems")
    game.splash("You are in Silver Category")
    game.reset()
} else if (Username == "InvictusAbhi") {
    Password = game.askForString("Password:")
    if (Password == "Abhi2010") {
        game.splash("You have, ", "348 gems")
        game.splash("You are in Platinum Category")
        game.reset()
    } else {
        game.splash("Incorrect Passcode")
    }
} else if (Username == "NBFMaster101") {
    Password = game.askForString("Password:")
    if (Password == "dagger29") {
        game.splash("You have, ", "165 gems")
        game.splash("You are in Silver Category")
        game.reset()
    } else {
        game.splash("Incorrect Passcode")
    }
} else if (Username == "InvictusSK") {
    game.splash("You have, ", "512 gems")
    game.splash("You are in Diamond Category")
    game.reset()
} else {
    game.splash("Incorrect username")
    game.reset()
}
