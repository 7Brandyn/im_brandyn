let guestScore = document.getElementById("guest-score")
let homeScore = document.getElementById("home-score")
gCount = 0
hCount = 0

function addOneGuest() { 
    gCount += 1
    guestScore.textContent = gCount
}

function addTwoGuest() { 
    gCount += 2
    guestScore.textContent = gCount
}

function addThreeGuest() { 
    gCount += 3
    guestScore.textContent = gCount
}

function addOneHome() { 
    hCount += 1
    homeScore.textContent = hCount
}

function addTwoHome() { 
    hCount += 2
    homeScore.textContent = hCount
}

function addThreeHome() { 
    hCount += 3
    homeScore.textContent = hCount
}

function newGame() {
    let zeroSum = 0
    gCount = zeroSum
    hCount = zeroSum
    guestScore.textContent = 0
    homeScore.textContent = 0
}