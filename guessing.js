// create secret number

var secretNumber = 4;

//ask user for guess

var guess = prompt('Guess a number');
alert("You guessed: " + guess);

//check if guess is correct

if(parseInt(guess) === secretNumber) {
    alert("You got it right");
} else if(parseInt(guess) > secretNumber){
    alert("your guess is too high.");
} else (parseInt(guess) === secretNumber) {
    alert("Your guess is too low, try again");
}