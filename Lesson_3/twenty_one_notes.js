/**
  1. Initialize deck
  2. Deal cards to player and dealer
  3. Player turn: hit or stay
      - repeat until bust or stay
  4. If player bust, dealer wins.
  5. Dealer turn: hit or stay
      - repeat until total >= 17
  6. If dealer busts, player wins.
  7. Compare cards and declare winner.
 *
 * High-Level Problem
 * x Initialize empty deck
 *   x Create object of all cards (looping mechanism?)
 * x Shuffle the deck
 * x Remove one card from deck and place in player's hand
 * x Remove one card from deck and place in dealer's hand
 * x Repeat for player hand
 * x Repeat for dealer hand
 * x Show what cards dealer has
 * x Show what cards player has
 * x Ask player if they want to hit or stay
 *   x If hit, remove another card from deck and put in player's hand
 *   x Repeat loop until user chooses to stay or players busts (> 21)
 * x Dealer turn to hit or stay
 *   x If hit, remove another card from deck and put in dealer's hand
 *   x Repeat loop until dealer chooses to stay, i.e. total >= 17
 *   x If dealer busts (> 21), player wins
 * - Compare cards
 *   - Whoever is closer to 21 wins
 */

const BLANK_CARDS = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'
]

function initializeDeck() {
  let fullDeck = [];

  for (let count = 1; count <= 4; count += 1) {
    for (let subIdx = 0; subIdx < BLANK_CARDS.length; subIdx += 1) {
      fullDeck.push(BLANK_CARDS[subIdx]);
    }
  };

  return fullDeck;
}

function dealCard(deck) {
  let randomIndex = Math.floor(Math.random() * deck.length);

  return String(deck.splice(randomIndex, 1));
}

function showPlayerCards(playerHand) {
  
}

let deck = initializeDeck();
let playerHand = [dealCard(deck)];
let dealerHand = [dealCard(deck)];
playerHand.push(dealCard(deck));
dealerHand.push(dealCard(deck));
console.log(`Player has: ${playerHand[0][0]}`);
console.log(`Dealer has: ${dealerHand[0][0]}`);