// When I click +1 it should add 1 point to the score above.

let scoreHomeEl = document.getElementById("score-home")

let scoreHome = 0

function addOnePoint() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function addTwoPoints() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function addThreePoints() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

let scoreGuestEl = document.getElementById("score-guest")

let scoreGuest = 0

function addOnePointGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function addTwoPointsGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function addThreePointsGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}