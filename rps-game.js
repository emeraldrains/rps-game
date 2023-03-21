function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  random = Math.floor(Math.random() * choices.length);

  return choices[random];
}

function rockPaperScissors(userChoice) {
  computerChoice = getComputerChoice();
  //select node
  compChoiceNode = document.querySelector(".computerChoice");
  userChoiceNode = document.querySelector(".userChoice");
  //modify node
  userChoiceNode.textContent = `User Choice: ${userChoice}`;
  compChoiceNode.textContent = `Computer Choice: ${computerChoice}`;

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

buttons = document.querySelectorAll("#container button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    resultNode = document.querySelector(".result");
    resultNode.textContent = `${rockPaperScissors(button.id)}`;
  });
});

// function game() {
//   for (let i = 0; i <= 5; i++) {
//     let userChoice = prompt("Rock, Paper, or Scissors?");
//     let computerChoice = getComputerChoice();
//     console.log(rockPaperScissors(userChoice, computerChoice));
//   }
// }

// game();
