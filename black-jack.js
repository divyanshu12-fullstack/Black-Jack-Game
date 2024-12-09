let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");


let player = {
    playerName: "DD",
    chips: 100,
    increaseChips: function (x) {
        this.chips += x
    },
    decreaseChips: function (x) {
        this.chips -= x;
    },
}
playerEl.textContent = player.playerName + " : " + "$" + player.chips;


let message = "";
let sum = 0;
let cards = [];
let isAlive = true;

function draw() {
    let currentCard = Math.floor(Math.random() * 10) + 1;
    return currentCard;
}

function yes() {
    if (isAlive === true) {
        let currentCard = draw()
        cards.push(currentCard);
        cardsEl.textContent = "Cards: " + cards.join(", ");
        sum += currentCard;
        sumEl.textContent = "Sum: " + sum;
        isAlive = canContinue(sum);
    }
    else {
        document.querySelector("#mess2-el").textContent = "Press Stop to Reset";
    }
}

function no() {
    reset();
    messageEl.textContent = "You Quit";
}

function canContinue(sum) {
    if (sum > 21) {
        message = "Game Ends, You Lose";
        messageEl.textContent = message;
        player.decreaseChips(15);
    }

    else if (sum < 21) {
        message = "Drawing Another Card?";
        messageEl.textContent = message;
        return true;
    }

    else {
        message = "Victory";
        messageEl.textContent = message;
        player.increaseChips(50);
    }
    playerEl.textContent = player.playerName + " : " + "$" + player.chips;
    return false;
}

function reset() {
    messageEl.textContent = "Start Play: ";
    sumEl.textContent = "Sum: " + 0;
    cardsEl.textContent = "Cards: " + 0;
    document.querySelector("#mess2-el").textContent = "";
    cards = [];
    sum = 0;
    isAlive = true;
}

function play() {
    reset();

    let currentCard = draw()
    cards.push(currentCard);
    cardsEl.textContent = "Cards: " + cards.join(", ");
    sum += currentCard;
    sumEl.textContent = "Sum: " + sum;
    isAlive = canContinue(sum);
}
