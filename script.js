// Connects the guess button with the function randomGenerator
document.getElementById('guess').addEventListener('click', randomGenerator)

// Creates variables ands sets them to 0 for now
let userNumber = 0
let randomNumber = 0

function randomGenerator () {
  // gets the number that the user enters and makes it an integer instead of a string and stores this number into the variable userNumber
  userNumber = document.getElementById('textbox').value
  userNumber = parseInt(userNumber)
  // program generates a random number in decimal form and drops the decimal to make it an integer. Multiplying it by 6 makes the numbers between 0-5 so adding 1 makes it from 1-6 and we then store it in the variable randomNumber and make it an integer.
  randomNumber = Math.random() * 6 + 1
  randomNumber = parseInt(randomNumber)
  // if the randomNumber is equal to the userNumber, then the program will say that the user was right
  if (randomNumber == userNumber) {
    document.getElementById('answer').innerHTML = 'You guessed the right number! Guess again!'
    // Once the user clicks the guess button, they will see if they were right or wrong and the number they entered will disappear, allowing them to guess again
    document.getElementById('textbox'). value = ''
  }
}
