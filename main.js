const cells = document.querySelectorAll("[cell]");
const statusDisplay = document.getElementById("status");
let currentPlayer = "X";
let plays = 0;
let amountGridButtons = 0;

const buttons = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];

const [
  button11,
  button12,
  button13,
  button21,
  button22,
  button23,
  button31,
  button32,
  button33,
] = document.querySelectorAll(".cell");

function disableButtons() {
  statusDisplay.innerText = " ";
  for (let i = 0; i < buttons.length; i++) {
    botaoDesativado = document.getElementById(buttons[i]);
    botaoDesativado.disabled = true;
  }
}

function checkWinner() {
  if (
    (button11.textContent.includes("X") &&
      button12.textContent.includes("X") &&
      button13.textContent.includes("X")) ||
    (button11.textContent.includes("O") &&
      button12.textContent.includes("O") &&
      button13.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      disableButtons();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      disableButtons();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (button11.textContent.includes("X") &&
      button22.textContent.includes("X") &&
      button33.textContent.includes("X")) ||
    (button11.textContent.includes("O") &&
      button22.textContent.includes("O") &&
      button33.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      disableButtons();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      disableButtons();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (button21.textContent.includes("X") &&
      button22.textContent.includes("X") &&
      button23.textContent.includes("X")) ||
    (button21.textContent.includes("O") &&
     button22.textContent.includes("O") &&
      button23.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      disableButtons();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      disableButtons();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (button31.textContent.includes("X") &&
      button32.textContent.includes("X") &&
      button33.textContent.includes("X")) ||
    (button31.textContent.includes("O") &&
      button32.textContent.includes("O") &&
      button33.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      disableButtons();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      disableButtons();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (button13.textContent.includes("X") &&
      button22.textContent.includes("X") &&
      button31.textContent.includes("X")) ||
    (button13.textContent.includes("O") &&
      button22.textContent.includes("O") &&
      button31.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      disableButtons();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      disableButtons();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (button11.textContent.includes("X") &&
      button21.textContent.includes("X") &&
      button31.textContent.includes("X")) ||
    (button11.textContent.includes("O") &&
      button21.textContent.includes("O") &&
      button31.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      disableButtons();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      disableButtons();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (button12.textContent.includes("X") &&
      button22.textContent.includes("X") &&
      button32.textContent.includes("X")) ||
    (button12.textContent.includes("O") &&
      button22.textContent.includes("O") &&
      button32.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      disableButtons();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      disableButtons();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  } else if (
    (button13.textContent.includes("X") &&
      button23.textContent.includes("X") &&
      button33.textContent.includes("X")) ||
    (button13.textContent.includes("O") &&
      button23.textContent.includes("O") &&
      button33.textContent.includes("O"))
  ) {
    if (currentPlayer === "X") {
      disableButtons();
      statusDisplay.innerText = "O jogador O Ganhou o jogo!";
    } else {
      disableButtons();
      statusDisplay.innerText = "O jogador X Ganhou o jogo!";
    }
  }
}

function reset() {
  location.reload();
}

while (amountGridButtons < buttons.length) {
  const someButton = document.getElementById(buttons[amountGridButtons]);
  someButton.addEventListener("click", function () {
    plays++;
    someButton.disabled = true;
    if (currentPlayer === "X") {
      someButton.innerText = "X";
      currentPlayer = "O";
      statusDisplay.innerHTML = `É a vez do jogador : ${currentPlayer}`;
      checkWinner();
    } else {
      someButton.innerText = "O";
      currentPlayer = "X";
      statusDisplay.innerHTML = `É a vez do jogador : ${currentPlayer}`;
      checkWinner();
    }
    if (plays === 9) {
      statusDisplay.innerHTML = "Deu Velha!";
    }
  });
  amountGridButtons++;
}
