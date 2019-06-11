var argButtonName, button_paper, button_rock, button_scissors, buttonTest;
///////////ZADANIE 1 //////////////////
const button_paper = 'papier' // dlatego że zawsze jest to papier
const button_rock = 'kamień' // dlatego, że zawsze jest to kamień
const button_scissors = 'nożyce' // dlatego, że zawsze dalej są to nożyce
let argButtonName = ''// tu mogą być różne wartości


/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
button_paper = document.getElementById('papier');
button_paper.addEventListener('click', function(){ buttonClicked('papier'); });
button_rock = document.getElementById('kamień');
button_rock.addEventListener('click', function(){ buttonClicked('kamień'); });
button_scissors = document.getElementById('nożyce');
button_scissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;
//////////ZADANIE 1/////

let argComputerMove = 'papier' // dlatego, że dalej w kodzie mogą to być nożyce lub kamień
let argMoveId = '1' // dlatego, że dalej w kodzie mogą to być ruchu 2 lub 3
let argPlayerMove = 'kamień' // dlatego, że dalej w kodzie mogą to być nożyce lub papier
let randomNumber = '' // tu operujemy na losowych liczbach
const playerMove = 'argButtonName' // zawsze jest to samo


/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == '2') {
    return 'papier';
  } else if (argMoveId == '3') {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
    printMessage('Przegrywasz');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
    printMessage('Przegrywasz');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
    printMessage('Przegrywasz');
  } else if (argPlayerMove == computerMove) {
    printMessage('Remis');
  } else {
   playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


argPlayerMove == 'papier' && argComputerMove == 'kamień';