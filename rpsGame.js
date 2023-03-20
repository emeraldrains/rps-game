function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  random = Math.floor(Math.random() * choices.length);

  return choices[random];
}

function rockPaperScissors(userChoice, computerChoice) {
  console.log(`computer: ${computerChoice}`);
  console.log(`user: ${userChoice}`);

  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock") {
    return computerChoice === "scissors" ? "You win!" : "You lose!";
  } else if (userChoice === "scissors") {
    return computerChoice === "paper" ? "You win!" : "You lose!";
  } else if (userChoice === "paper") {
    return computerChoice === "rock" ? "You win!" : "You lose!";
  }
}

function game() {
  for (let i = 0; i <= 5; i++) {
    let userChoice = prompt("Rock, Paper, or Scissors?");
    let computerChoice = getComputerChoice();
    console.log(rockPaperScissors(userChoice, computerChoice));
  }
}

game();
