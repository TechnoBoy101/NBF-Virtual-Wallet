let Username = ""
let Password = ""
let AbhiMoney = 0
forever(function () {
    game.splash("NBF Virtual Wallet")
    Username = game.askForString("Username:")
    if (Username == "1000Infinity") {
    	
    } else if (Username == "InvictusAbhi") {
        Password = game.askForString("Password:")
        if (Password == "Abhi2010") {
            AbhiMoney += game.askForNumber("How much money do you want to add?")
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
})
