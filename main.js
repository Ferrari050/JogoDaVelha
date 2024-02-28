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

const botao11 = document.getElementById(buttons[0]);
const botao12 = document.getElementById(buttons[1]);
const botao13 = document.getElementById(buttons[2]);
const botao21 = document.getElementById(buttons[3]);
const botao22 = document.getElementById(buttons[4]);
const botao23 = document.getElementById(buttons[5]);
const botao31 = document.getElementById(buttons[6]);
const botao32 = document.getElementById(buttons[7]);
const botao33 = document.getElementById(buttons[8]);

function checkX() {
  if (
    botao11.textContent.includes("X") &&
    botao12.textContent.includes("X") &&
    botao13.textContent.includes("X")
  ) {
    alert("o jogo acabou.");
  }
}

function checkO() {
  if (
    botao11.textContent.includes("O") &&
    botao12.textContent.includes("O") &&
    botao13.textContent.includes("O")
  ) {
    alert("o jogo acabou. O é o vencedor");
  }
}

while (contador < buttons.length) {
  const botao = document.getElementById(buttons[contador]);
  botao.addEventListener("click", function () {
    botao.disabled = true;
    if (currentPlayer === "X") {
      botao.innerText = "X";
      currentPlayer = "O";
    } else {
      botao.innerText = "O";
      currentPlayer = "X";
    }
    statusDisplay.innerHTML = `É a vez do jogador : ${currentPlayer}`;
  });
  contador = contador + 1;
  
}
