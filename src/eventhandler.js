import Gameboard from "./gameboard";

const playerBoard = new Gameboard("player");
const board = document.querySelector(".playerBoard");

function addPatrolboat() {
  board.addEventListener("click", function handler(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    playerBoard.placeShips(row, col, playerBoard.patrolboat, "x");
    if (
      board
        .querySelector(`[row="${row}"][col="${col}"]`)
        .getAttribute("ship") === "patrolboat"
    ) {
      board.removeEventListener("click", handler);
    }
  });
}

function addSubmarine() {
  board.addEventListener("click", function handler(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    playerBoard.placeShips(row, col, playerBoard.submarine, "x");
    if (
      board
        .querySelector(`[row="${row}"][col="${col}"]`)
        .getAttribute("ship") === "submarine"
    ) {
      board.removeEventListener("click", handler);
      addPatrolboat();
    }
  });
}

function addDestroyer() {
  board.addEventListener("click", function handler(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    playerBoard.placeShips(row, col, playerBoard.destroyer, "x");
    if (
      board
        .querySelector(`[row="${row}"][col="${col}"]`)
        .getAttribute("ship") === "destroyer"
    ) {
      board.removeEventListener("click", handler);
      addSubmarine();
    }
  });
}

function addBattlesship() {
  board.addEventListener("click", function handler(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    playerBoard.placeShips(row, col, playerBoard.battleship, "x");
    if (
      board
        .querySelector(`[row="${row}"][col="${col}"]`)
        .getAttribute("ship") === "battleship"
    ) {
      board.removeEventListener("click", handler);
      addDestroyer();
    }
  });
}

// places carrier on board
function addBoats() {
  board.addEventListener("click", function handler(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    playerBoard.placeShips(row, col, playerBoard.carrier, "x");
    if (
      board
        .querySelector(`[row="${row}"][col="${col}"]`)
        .getAttribute("ship") === "carrier"
    ) {
      board.removeEventListener("click", handler);
      addBattlesship();
    }
  });
}

export default addBoats;
