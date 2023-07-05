/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN_MATCH = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7],            // diagonals
];
const CENTER_SQUARE = '5';
const PLAYER = 'player';
const COMPUTER = 'computer';
const FIRST_MOVE_CHOICES = [PLAYER, COMPUTER, 'choose'];

function displayBoard(board, playerScore, computerScore) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  console.log('');
  console.log(`~SCOREBOARD~\nPlayer: ${playerScore}\nCompuer: ${computerScore}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function whoGoesFirst() {
  prompt(`Who goes first? (${joinOr(FIRST_MOVE_CHOICES)})`);
  let answer;

  while (true) {
    answer = readline.question().toLowerCase().trim();

    if (answer === 'player' || answer === 'computer') {
      break;
    } else if (answer === 'choose') {
      let randomIndex = Math.floor(Math.random() * [PLAYER, COMPUTER].length);
      answer = [PLAYER, COMPUTER][randomIndex];
      break;
    }

    invalidAnswer();
  }

  return answer;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function joinOr(squares, delimeter = ', ', conjunction = 'or') {
  if (squares.length === 0) {
    return '';
  } else if (squares.length === 1) {
    return squares[0];
  } else if (squares.length === 2) {
    return squares.join(` ${conjunction} `);
  } else {
    return squares.map((square, index) => {
      if (index === squares.length - 1) return `${conjunction} ${square}`;
      return square;
    }).join(delimeter);
  }
}

function validateAnswer(ans) {
  if (ans === 'y') {
    ans = true;
  } else if (ans === 'n') {
    ans = false;
  } else {
    ans = null;
  }

  return ans;
}

function invalidAnswer() {
  prompt("That's not a valid answer.");
}

function playAgain() {
  let answer;

  while (true) {
    prompt('Would you like to play another match? y/n');
    answer = validateAnswer(readline.question().toLowerCase().trim());

    if (answer === true || answer === false) break;

    invalidAnswer();
  }

  return answer;
}

function anotherRound() {
  prompt('The match is over when someone wins 5 rounds.');
  prompt('Press enter to continue to the next round.');

  readline.question().toLowerCase().trim();
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function chooseBestSquare(board, marker) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if ((board[sq1] === marker &&
         board[sq2] === marker) &&
         board[sq3] === INITIAL_MARKER) {
      return sq3;
    } else if ((board[sq1] === marker &&
                board[sq3] === marker) &&
                board[sq2] === INITIAL_MARKER) {
      return sq2;
    } else if ((board[sq2] === marker &&
                board[sq3] === marker) &&
                board[sq1] === INITIAL_MARKER) {
      return sq1;
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  let bestOffensiveMove = chooseBestSquare(board, COMPUTER_MARKER);
  let bestDefensiveMove = chooseBestSquare(board, HUMAN_MARKER);
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];

  if (bestOffensiveMove) {
    board[bestOffensiveMove] = COMPUTER_MARKER;
  } else if (bestDefensiveMove) {
    board[bestDefensiveMove] = COMPUTER_MARKER;
  } else if (emptySquares(board).includes(CENTER_SQUARE)) {
    board[CENTER_SQUARE] = COMPUTER_MARKER;
  } else {
    board[square] = COMPUTER_MARKER;
  }
}

function someoneWon(board) {
  return !!detectRoundWinner(board);
}

function detectRoundWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function detectGrandWinner(playerScore, computerScore) {
  console.clear();
  console.log('~FINAL SCORE~');
  console.log(`Player: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);

  if (playerScore === GAMES_TO_WIN_MATCH) {
    prompt('Player won the match!');
  } else if (computerScore === GAMES_TO_WIN_MATCH) {
    prompt('Computer won the match!');
  }
}

function chooseSquare(board, currPlayer) {
  switch (currPlayer) {
    case PLAYER:
      playerChoosesSquare(board);
      break;
    case COMPUTER:
      computerChoosesSquare(board);
      break;
    default:
      break;
  }
}

function alternatePlayer(currPlayer) {
  switch (currPlayer) {
    case PLAYER:
      return COMPUTER;
    case COMPUTER:
      return PLAYER;
    default:
      return null;
  }
}

function welcomeMessage() {
  prompt('Welcome to Tic Tac Toe!');
}

welcomeMessage();
while (true) {
  let board = initializeBoard();
  let currentPlayer = whoGoesFirst();
  let firstPick = currentPlayer;
  let playerScore = 0;
  let computerScore = 0;

  while (true) {
    while (true) {
      displayBoard(board, playerScore, computerScore);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board, playerScore, computerScore);

    if (someoneWon(board)) {
      prompt(`${detectRoundWinner(board)} won!`);
      if (detectRoundWinner(board) === 'Player') {
        playerScore += 1;
        currentPlayer = firstPick;
        board = initializeBoard();
      } else {
        computerScore += 1;
        currentPlayer = firstPick;
        board = initializeBoard();
      }
    } else {
      prompt("It's a tie!");
      currentPlayer = firstPick;
      board = initializeBoard();
    }

    if (playerScore === GAMES_TO_WIN_MATCH ||
        computerScore === GAMES_TO_WIN_MATCH) break;

    anotherRound();
  }

  detectGrandWinner(playerScore, computerScore);
  if (!playAgain()) break;
}

prompt('Thanks for playing Tic Tac Toe!');