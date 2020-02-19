// Deal Cards + Setup Cards
// Create a Function to deal cards + logic for Ace
// 1.Cards have a value of 1-11=> 2-Ace
// 1a. Each card value has 4 instantces
// 1ab. Each value can only be picked a maximum of 4 times
// 1abc. Put a condition that card 1 has a value of either 1 or 11.
// Cards must be dealt out one at a time.
// Add cards value until 21
// Create a function for game logic
// 2. Cards dealt to player then cpu
// 2a. Add the total value from player + cpu
// 2ab repeat until stop or bust
// 2abc create a stop function
// 2abcd stop function will pass turn and give decision to cpu 
// If over 21 lose
// If player value is higher then cpu value win otherwise, lose.
// Dealer has to hit at 16

let inquirer = require("inquirer");

const CARDVALUE = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
const CARDSUIT = ["clubs","diamonds","spades","hearts"];
let currentPlayer = 0;
let cardDeckArr = new Array();
let playerArr = new Array();

// Initiate Deck

const initDeck = () => {
    cardDeckArr = new Array();
for (let i = 0; i < CARDVALUE.length; i++) {
     for(let x = 0; x < CARDSUIT.length; x++) {
        //  console.log(CARDSUIT[x]);
         let weight = parseInt(CARDVALUE[i])
         if(CARDVALUE[i] === "J" || CARDVALUE[i] === "Q" || CARDVALUE[i] === "K") {
             weight = 10
            //  console.log(weight);
            }
            if(CARDVALUE[i] === "A") {
                weight = 11
                // console.log(weight);
         }
         let cards = {
             value: CARDVALUE[i],
             weight: weight,
         };
        cardDeckArr.push(cards);
     }
    };
    // console.log(cardDeckArr);
};

// Start of shuffle function
// Change CARDVALUE to cardDeckArr
const shuffle = () => {
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor(Math.random() * cardDeckArr.length);
        let location2 = Math.floor(Math.random() * cardDeckArr.length);
        let temp = cardDeckArr[location1];
        cardDeckArr[location1] = cardDeckArr[location2];
        cardDeckArr[location2] = temp;
        // console.log(temp);
    }
}

// Create players
// ES6
const playersCreator = e => {
    playerArr = new Array();
    for(let i = 1; i <= e; i++) {
        let newHand = new Array();
        let playerObj = {
            name: `Player ${i}`,
            id: i,
            points: 0,
            hand: newHand
        }
        // console.log(playerObj)
        playerArr.push(playerObj);
    }
}

// Deal hand function
const dealHand = () => {
    // Deals cards to players and alternate. 2 cards each.
    for(let i = 0; i < 2; i++) {
        for (let x = 0; x < playerArr.length; x++) {
            let cards = cardDeckArr.pop();
            playerArr[x].hand.push(cards);
            // updatePoints();
        }
    }
    let firstPlayerObj = playerArr[0];
    let secondPlayerObj = playerArr[1];
    console.log(`${firstPlayerObj.name} has a ${firstPlayerObj.hand[0].value} and ${firstPlayerObj.hand[1].value} with ${firstPlayerObj.points} total`)
  console.log(`${secondPlayerObj.name} has a ${secondPlayerObj.hand[0].value} and ${secondPlayerObj.hand[1].value} with ${secondPlayerObj.points} total`)
}

const start = () => {
    console.log("Welcome to Wilson's BlackJack Table, Where everyone loses their money!");
    initDeck();
    shuffle();
    playersCreator(2);
    dealHand();
}

start();