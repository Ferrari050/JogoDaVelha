const cells = document.querySelectorAll("[cell]");
const statusDisplay = document.getElementById("status");
let currentPlayer = "X";

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

function desativaBotoes() {
  statusDisplay.innerText = " ";
  for (let i = 0; i < buttons.length; i++) {
    botaoDesativado = document.getElementById(buttons[i]);
    botaoDesativado.disabled = true;
  }
}

function checkWinner() {
  if (
    (botao11.textContent.includes("X") &&
      botao12.textContent.includes("X") &&
      botao13.textContent.includes("X")) ||
    (botao11.textContent.includes("O") &&
      botao12.textContent.includes("O") &&
      botao13.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      desativaBotoes();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      desativaBotoes();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (botao11.textContent.includes("X") &&
      botao22.textContent.includes("X") &&
      botao33.textContent.includes("X")) ||
    (botao11.textContent.includes("O") &&
      botao22.textContent.includes("O") &&
      botao33.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      desativaBotoes();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      desativaBotoes();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (botao21.textContent.includes("X") &&
      botao22.textContent.includes("X") &&
      botao23.textContent.includes("X")) ||
    (botao21.textContent.includes("O") &&
      botao22.textContent.includes("O") &&
      botao23.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      desativaBotoes();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      desativaBotoes();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (botao31.textContent.includes("X") &&
      botao32.textContent.includes("X") &&
      botao33.textContent.includes("X")) ||
    (botao31.textContent.includes("O") &&
      botao32.textContent.includes("O") &&
      botao33.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      desativaBotoes();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      desativaBotoes();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (botao13.textContent.includes("X") &&
      botao22.textContent.includes("X") &&
      botao31.textContent.includes("X")) ||
    (botao13.textContent.includes("O") &&
      botao22.textContent.includes("O") &&
      botao31.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      desativaBotoes();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      desativaBotoes();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (botao11.textContent.includes("X") &&
      botao21.textContent.includes("X") &&
      botao31.textContent.includes("X")) ||
    (botao11.textContent.includes("O") &&
      botao21.textContent.includes("O") &&
      botao31.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      desativaBotoes();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      desativaBotoes();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (botao12.textContent.includes("X") &&
      botao22.textContent.includes("X") &&
      botao32.textContent.includes("X")) ||
    (botao12.textContent.includes("O") &&
      botao22.textContent.includes("O") &&
      botao32.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      desativaBotoes();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      desativaBotoes();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (botao13.textContent.includes("X") &&
      botao23.textContent.includes("X") &&
      botao33.textContent.includes("X")) ||
    (botao13.textContent.includes("O") &&
      botao23.textContent.includes("O") &&
      botao33.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      desativaBotoes();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      desativaBotoes();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  }
}

function reset() {
  location.reload();
}

while (contador < buttons.length) {
  const botao = document.getElementById(buttons[contador]);

  botao.addEventListener("click", function () {
    botao.disabled = true;
    if (currentPlayer === "X") {
      botao.innerText = "X";
      currentPlayer = "O";
      statusDisplay.innerHTML = `É a vez do jogador : ${currentPlayer}`;
      checkWinner();
    } else {
      botao.innerText = "O";
      currentPlayer = "X";
      statusDisplay.innerHTML = `É a vez do jogador : ${currentPlayer}`;
      checkWinner();
    }
  });
  contador = contador + 1;
}
