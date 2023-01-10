const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let message = "hi";
let passwordLength = 15

function generateRandomCharacter() {
    let characterChoice = Math.floor(Math.random() * characters.length);
    return characters[characterChoice]
}

function generatePasswordOne() {
    let randomPassword = ""
    for (i = 0; i < passwordLength; i++) {
        randomPassword += generateRandomCharacter()
    }
    return (passwordOne.textContent = randomPassword)
}

function generatePasswordTwo() {
    let randomPassword = ""
    for (i = 0; i < passwordLength; i++) {
        randomPassword += generateRandomCharacter()
    }
    return (passwordTwo.textContent = randomPassword)
}

function clearPassword() {
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
}