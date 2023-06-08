let weapons = ['rock', 'paper', 'scissors'];

function getComputedChoice() {
    return weapons[Math.floor(Math.random() * 10) % 3]
}
