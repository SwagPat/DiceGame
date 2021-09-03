var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 === 1) {
    document.querySelector('.dice1').innerHTML = "<img src='images/dice1.png' alt=''>";
} else if (randomNumber1 === 2) {
    document.querySelector('.dice1').innerHTML = "<img src='images/dice2.png' alt=''>";
} else if (randomNumber1 === 3) {
    document.querySelector('.dice1').innerHTML = "<img src='images/dice3.png' alt=''>";
} else if (randomNumber1 === 4) {
    document.querySelector('.dice1').innerHTML = "<img src='images/dice4.png' alt=''>";
} else if (randomNumber1 === 5) {
    document.querySelector('.dice1').innerHTML = "<img src='images/dice5.png' alt=''>";
} else if (randomNumber1 === 6) {
    document.querySelector('.dice1').innerHTML = "<img src='images/dice6.png' alt=''>";
}

if (randomNumber2 === 1) {
    document.querySelector('.dice2').innerHTML = "<img src='images/dice1.png' alt=''>";
} else if (randomNumber2 === 2) {
    document.querySelector('.dice2').innerHTML = "<img src='images/dice2.png' alt=''>";
} else if (randomNumber2 === 3) {
    document.querySelector('.dice2').innerHTML = "<img src='images/dice3.png' alt=''>";
} else if (randomNumber2 === 4) {
    document.querySelector('.dice2').innerHTML = "<img src='images/dice4.png' alt=''>";
} else if (randomNumber2 === 5) {
    document.querySelector('.dice2').innerHTML = "<img src='images/dice5.png' alt=''>";
} else if (randomNumber2 === 6) {
    document.querySelector('.dice2').innerHTML = "<img src='images/dice6.png' alt=''>";
}

if (randomNumber1 > randomNumber2) {
    document.querySelector(".heading").innerHTML = " 🎈Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".heading").innerHTML = "Player 2 Wins! 🎈"
} else {
    document.querySelector(".heading").innerHTML = "Draw"
}