function genAlphabet() {
    var alph = [];

    for (var i = 65; i < 91; i++) {
        alph.push(String.fromCharCode(i).toLowerCase());
    }

    return alph;
}

var alphabet = genAlphabet();
var computerChoices = alphabet;
var wins = 0;
var losses = 0;
var guesses = 9;
var letters = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



document.onkeyup = function (event) {

    var userGuess = event.key;
    guesses--;

    if (userGuess === computerGuess) {
        wins = wins + 1;
        document.getElementById("userWins").innerHTML = "Wins: " + wins;
        guesses = 9
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
        letters = [];
        document.getElementById("lettersGuessed").innerHTML = "Your Gueeses So Far: " + letters;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    else if (guesses < 9) {
        letters = letters + userGuess;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
        document.getElementById("lettersGuessed").innerHTML = "Your Gueeses So Far: " + letters;

    }

    if (guesses === 0) {
        losses++;
        document.getElementById("userLosses").innerHTML = "Losses: " + losses;
        guesses = 9
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
        letters = [];
        document.getElementById("lettersGuessed").innerHTML = "Your Gueeses So Far: " + letters;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        

    }

    console.log(computerGuess)
    console.log(losses)
}