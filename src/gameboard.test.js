import Ship from "./ship";
import Gameboard from "./gameboard";

test("testing allSunk function: 5 ships", () => {
  const newGame = Gameboard();

  newGame.ships.forEach((ship) => {
    ship.isSunk = true;
  });
  expect(newGame.allSunk(newGame.ships)).toBe(true);
});

test("testing allSunk function: 3 ships", () => {
  const newGame = Gameboard();

  newGame.ships[0].isSunk = true;
  newGame.ships[1].isSunk = true;
  newGame.ships[2].isSunk = true;
  expect(newGame.allSunk(newGame.ships)).toBe(false);
});
