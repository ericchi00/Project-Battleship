function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

function getRandomAxis() {
  return Math.floor(Math.random() * 2) === 0 ? "x" : "y";
}

function placeShipsRandomly(computer) {
  computer.board.ships.forEach((ship) => {
    while (
      computer.board.placeShips(
        getRandomInt(),
        getRandomInt(),
        ship,
        getRandomAxis()
      ) === false
    ) {
      if (
        computer.board.placeShips(
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

export { getRandomInt, placeShipsRandomly };
