let num1 = 12
let num2 = 6
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")


function add() {
    sumEl.textContent = (num1 + num2)
}

function subtract() {
    sumEl.textContent = (num1 - num2)
}

function divide() {
    sumEl.textContent = (num1 / num2)
}

function multiply() {
    sumEl.textContent = (num1 * num2)
}