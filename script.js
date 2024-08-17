const elements = document.querySelectorAll('[data-user-select]');
let scoreElement = document.getElementById("scroe");

let score = parseInt(localStorage.getItem('score')) || 0;
scoreElement.textContent = score;

let computerOptions = ["rock", "scissors", "paper"];
let computerSelection = computerOptions[Math.floor(Math.random() * 3)];

elements.forEach(element => {
    element.addEventListener('click', function() {
        let userSelection = this.getAttribute('data-user-select');
        window.location.href = `./result.html?userSelection=${userSelection}&computerSelection=${computerSelection}&score=${score}`;
    });
});
