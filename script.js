var argButtonName, button_paper, button_rock, button_scissors, buttonTest;

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