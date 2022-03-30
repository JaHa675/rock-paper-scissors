// stores stats
let wins = 0;
let loses = 0;
let draws = 0;
let playAgain = false;
let options = "rps";
// runs the game
function runGame() {
  let userChoice = prompt("Rock(r) Paper(p) or Scissors(s)", "r");
if (userChoice === ("r"||"s"||"p") ){
  let cpuChoice = options.charAt(Math.floor(Math.random() * options.length));
  console.log(cpuChoice);
  // decides outcome
  if (
    (cpuChoice === "r" && userChoice == "r") ||
    (cpuChoice === "p" && userChoice == "p") ||
    (cpuChoice === "s" && userChoice == "s")
  ) {
    alert(`Draw`);
    draws++;
    console.log(draws);
    postGame();
  } else if (
    (cpuChoice === "r" && userChoice == "s") ||
    (cpuChoice === "p" && userChoice == "r") ||
    (cpuChoice === "s" && userChoice == "p")
  ) {
    alert(`Loss`);
    loses++;
    console.log(loses);
    postGame();
  } else {
    alert(`Win`);
    wins++;
    console.log(wins);
    postGame();
  }
  function postGame() {
    //   stat display
    alert(`Wins - ${wins} Loses - ${loses} Draws - ${draws}`);
    // asks to run game again.
    playAgain = confirm("Would you like to play again?");
    if (playAgain) runGame();
  }
} else {
    alert("Please use only lower case r, s, or p!")
}
}
