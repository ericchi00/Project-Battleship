/**
 * @jest-environment jsdom
 */
import Gameboard from "../src/gameboard";

test("test allSunk function: 5 ships", () => {
  const newGame = new Gameboard();
  newGame.ships.forEach((ship) => {
    ship.isSunk = true;
  });
  expect(newGame.allSunk(newGame.ships)).toBe(true);
});

test("test allSunk function: 3 ships", () => {
  const newGame = new Gameboard();
  newGame.ships[0].isSunk = true;
  newGame.ships[1].isSunk = true;
  newGame.ships[2].isSunk = true;
  expect(newGame.allSunk(newGame.ships)).toBe(false);
});

test("test if placeShips function works in a valid area", () => {
  const newGame = new Gameboard();
  document.body.innerHTML =
    '<div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div></div><div class="box" row="0" col="2"></div></div><div class="box" row="1" col="0"></div></div><div class="box" row="2" col="0"></div></div><div class="box" row="3" col="0"></div>';
  expect(newGame.placeShips(0, 0, newGame.patrolboat)).not.toBeUndefined();
});

test("test if placeShips function returns undefined", () => {
  const newGame = new Gameboard();
  expect(newGame.placeShips(9, 9, newGame.destroyer)).toBe(undefined);
});
