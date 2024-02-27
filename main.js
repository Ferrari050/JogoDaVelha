const cells = document.querySelectorAll("[cell]");
const statusDisplay = document.getElementById("status");
let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let contador = 0;

const buttons = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];

while (contador < buttons.length) {
  const botao = document.getElementById(buttons[contador]);
  botao.addEventListener("click", function () {
    botao.disabled = true;
    console.log(buttons[contador]);
    if (currentPlayer === "X") {
      botao.innerText = "X";
      currentPlayer = "O";
    } else {
      botao.innerText = "O";
      currentPlayer = "X";
    }
    statusDisplay.innerHTML = `É a vez do jogador ${currentPlayer}`;
  });
  contador = contador + 1;
}
