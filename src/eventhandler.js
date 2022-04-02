import Gameboard from "./gameboard";

function containsShip(ship) {
  const boxes = document.querySelector(".playerBoard").querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].getAttribute("ship") === ship.name) return true;
  }
  return false;
}

function changeCursor() {
  const boxes = Array.from(
    document.querySelector(".playerBoard").querySelectorAll(".box")
  );
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].classList.add("noTouch");
  }
}

function addBoats() {
  const playerBoard = new Gameboard("player");
  const board = document.querySelector(".playerBoard");
  board.addEventListener("click", function listener(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    if (containsShip(playerBoard.carrier)) {
      if (containsShip(playerBoard.battleship)) {
        if (containsShip(playerBoard.destroyer)) {
          if (containsShip(playerBoard.submarine)) {
            if (playerBoard.placeShips(row, col, playerBoard.patrolboat, "y")) {
              board.removeEventListener("click", listener);
              changeCursor();
            }
          }
          playerBoard.placeShips(row, col, playerBoard.submarine, "y");
        }
        playerBoard.placeShips(row, col, playerBoard.destroyer, "y");
      }
      playerBoard.placeShips(row, col, playerBoard.battleship, "x");
    }
    playerBoard.placeShips(row, col, playerBoard.carrier, "y");
  });
}

export default addBoats;
