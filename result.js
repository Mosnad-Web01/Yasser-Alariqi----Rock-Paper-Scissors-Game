// HTML elements
let userContainer = document.getElementById("userContainer");
let computerContainer = document.getElementById("computerContainer");
let scoreResult = document.getElementById("scoreResult");
let playAgain = document.getElementById("playAgain");
let whoIsTheWiner = document.getElementById("whoIsTheWiner");

//parameters
const urlParams = new URLSearchParams(window.location.search);
const userSelection = urlParams.get("userSelection");
const computerSelection = urlParams.get("computerSelection");
let score = parseInt(urlParams.get("score"));

//user image
let userImage = document.createElement("img");
userImage.setAttribute("src", `./images/icon-${userSelection}.svg`);
userContainer.appendChild(userImage);

//computer image
let computerImage = document.createElement("img");
computerImage.setAttribute("src", `./images/icon-${computerSelection}.svg`);
computerContainer.appendChild(computerImage);

//border based on selection
function applyBorderBasedOnSelection(container, selection) {
  if (selection === "paper") {
    container.classList.add("game__option--paper");
  } else if (selection === "rock") {
    container.classList.add("game__option--rock");
  } else if (selection === "scissors") {
    container.classList.add("game__option--scissors");
  }
}


applyBorderBasedOnSelection(userContainer, userSelection);
applyBorderBasedOnSelection(computerContainer, computerSelection);


if (
  (userSelection === "rock" && computerSelection === "scissors") ||
  (userSelection === "scissors" && computerSelection === "paper") ||
  (userSelection === "paper" && computerSelection === "rock")
) {
  whoIsTheWiner.textContent = "YOU WIN";
  score += 1;
} else if (
  (computerSelection === "rock" && userSelection === "scissors") ||
  (computerSelection === "scissors" && userSelection === "paper") ||
  (computerSelection === "paper" && userSelection === "rock")
) {
  whoIsTheWiner.textContent = "YOU LOSE";
  score -= 1;
} else {
  whoIsTheWiner.textContent = "It's a Tie";
}

// local storage
localStorage.setItem("score", score);
scoreResult.textContent = `${score}`;

// Play again
playAgain.addEventListener("click", () => {
  window.location.href = `./index.html`;
});
