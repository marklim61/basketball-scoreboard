let homePoints = 0
let guestPoints = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function add1pointHome() {
    homePoints += 1
    homeScoreEl.textContent = homePoints
}

function add2pointHome() {
    homePoints += 2
    homeScoreEl.textContent = homePoints
}

function add3pointHome() {
    homePoints += 3
    homeScoreEl.textContent = homePoints
}

function add1pointGuest() {
    guestPoints += 1
    guestScoreEl.textContent = guestPoints
}

function add2pointGuest() {
    guestPoints += 2
    guestScoreEl.textContent = guestPoints
}

function add3pointGuest() {
    guestPoints += 3
    guestScoreEl.textContent = guestPoints
}

function newGame() {
    homePoints = 0
    homeScoreEl.textContent = homePoints
    
    guestPoints = 0
    guestScoreEl.textContent = guestPoints
}