import Gameboard from "./gameboard";

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

function getRandomAxis() {
  return Math.floor(Math.random() * 2) === 0 ? "x" : "y";
}

function placeShipsRandomly() {
  const computerBoard = new Gameboard("computer");
  computerBoard.ships.forEach((ship) => {
    while (
      computerBoard.placeShips(
        getRandomInt(),
        getRandomInt(),
        ship,
        getRandomAxis()
      ) === false
    ) {
      if (
        computerBoard.placeShips(
          getRandomInt(),
          getRandomInt(),
          ship,
          getRandomAxis()
        ) === true
      ) {
        return;
      }
    }
  });
}

export default placeShipsRandomly;
