const readline = require('readline-sync');
const SUITS = ['H', 'C', 'S', 'D'];
const BLANK_CARDS = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'
];
const FACE_CARDS = ['Jack', 'Queen', 'King'];
const ACE = 'Ace';
const FIRST_DEAL_LENGTH = 2;
const MAX_TOTAL = 21;
const DEALER_MIN_HIT = 17;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  let fullDeck = [];

  SUITS.forEach(suit => {
    for (let subIdx = 0; subIdx < BLANK_CARDS.length; subIdx += 1) {
      fullDeck.push([suit, BLANK_CARDS[subIdx]]);
    }
  });

  return shuffle(fullDeck);
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === ACE) {
      sum += 11;
    } else if (FACE_CARDS.includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === ACE).forEach(_ => {
    if (sum > MAX_TOTAL) sum -= 10;
  });

  return sum;
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }

  return deck;
}

function playerTurn(deck, playerHand, dealerHand) {
  while (true) {
    displayHands(dealerHand, playerHand);
    prompt('Hit or stay?');
    let answer = readline.question().toLowerCase().trim();

    while (answer !== 'hit' && answer !== 'stay') {
      prompt("That's not a valid answer.");
      answer = readline.question().toLowerCase().trim();
    }

    if (answer === 'stay') break;
    dealCard(deck, playerHand);
    if (busted(playerHand)) break;
  }
}

function dealerTurn(deck, dealerHand, playerHand) {
  while (true) {
    displayHands(dealerHand, playerHand);

    if (total(dealerHand) < DEALER_MIN_HIT) {
      prompt('Dealer hits.');
      dealCard(deck, dealerHand);
    } else if (total(dealerHand) >= DEALER_MIN_HIT || busted(dealerHand)) {
      break;
    }
    prompt('Press enter to continue.');
    readline.question();
  }
}

function busted(hand) {
  return total(hand) > MAX_TOTAL;
}

function dealCard(deck, hand) {
  return hand.push(deck.pop());
}

function joinAllCards(hand) {
  if (hand.length === FIRST_DEAL_LENGTH) {
    return `${hand[0][1]} and ${hand[1][1]}`;
  } else {
    return hand.map((card, index) => {
      if (index === hand.length - 1) return `and ${card[1]}`;
      return card[1];
    }).join(', ');
  }
}

function joinHiddenDealerHand(hand) {
  if (hand.length === FIRST_DEAL_LENGTH) {
    return `${hand[0][1]} and unknown card`;
  } else {
    return hand.map((card, index) => {
      if (index === hand.length - 1) return 'and unknown card';
      return card[1];
    }).join(', ');
  }
}

function displayHands(dealerHand, playerHand, winningDisplay = false) {
  console.clear();
  if (winningDisplay === false) {
    prompt(`Dealer has: ${joinHiddenDealerHand(dealerHand)}`);
  } else if (winningDisplay === true) {
    prompt(`Dealer has: ${joinAllCards(dealerHand)}`);
  }
  prompt(`You have: ${joinAllCards(playerHand)}`);
}

function whoWon(dealerHand, playerHand) {
  if (busted(dealerHand)) {
    return 'Player';
  } else if (busted(playerHand)) {
    return 'Dealer';
  } else if (total(dealerHand) >= total(playerHand)) {
    return 'Dealer';
  } else {
    return 'Player';
  }
}

function displayWinner(winner, dealerHand, playerHand) {
  displayHands(dealerHand, playerHand, true);
  prompt(`${winner} won!`);
}

function invalidAnswer(ans) {
  if (ans === 'y') {
    return false;
  } else if (ans === 'n') {
    return false;
  } else {
    return true;
  }
}

function playAgain() {
  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase().trim();

  while (invalidAnswer(answer)) {
    prompt("That's not a valid answer.");
    answer = readline.question().toLowerCase().trim();
  }

  if (answer === 'y') {
    return true;
  } else {
    return false;
  }
}

function welcomeMessage() {
  prompt('Welcome to 21!');
  prompt('The goal is to attain a hand for which the sum is as close as possible to 21.');
  prompt('Cards 2-10 are worth their face value.');
  prompt('Jacks, Queens, and Kings are worth 10.');
  prompt('Aces are worth 1 or 11, depending on the rest of cards in the hand.');
  prompt('Press enter to begin.');
  readline.question();
}

welcomeMessage();
while (true) {
  let deck = initializeDeck();
  let playerHand = [];
  let dealerHand = [];
  dealCard(deck, dealerHand);
  dealCard(deck, playerHand);
  dealCard(deck, dealerHand);
  dealCard(deck, playerHand);

  while (true) {
    playerTurn(deck, playerHand, dealerHand);
    if (busted(playerHand)) break;
    prompt('You chose to stay!');

    dealerTurn(deck, dealerHand, playerHand);
    if (busted(dealerHand)) break;
    prompt('Dealer chose to stay.');

    break;
  }

  displayWinner(whoWon(dealerHand, playerHand), dealerHand, playerHand);
  if (!playAgain()) break;
}