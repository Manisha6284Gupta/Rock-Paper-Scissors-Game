const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result");
const choices = document.querySelectorAll(".choice");

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("data-choice");
    playRound(userChoice);
  });
});

function playRound(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const outcome = userChoice + computerChoice;

  switch (outcome) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice);
  }
}

function win(user, computer) {
  userScore++;
  userScoreSpan.textContent = userScore;
  resultText.textContent = `You Win! ${capitalize(user)} beats ${capitalize(computer)} 🎉`;
}

function lose(user, computer) {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  resultText.textContent = `You Lose! ${capitalize(computer)} beats ${capitalize(user)} 😢`;
}

function draw(choice) {
  resultText.textContent = `It's a Draw! You both chose ${capitalize(choice)} 😐`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
