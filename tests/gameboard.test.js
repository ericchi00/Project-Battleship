/**
 * @jest-environment jsdom
 */
import { createPlayerBoard } from "../src/dom";
import Gameboard from "../src/gameboard";

test("test allSunk function: 5 ships", () => {
  const newGame = new Gameboard("player");
  newGame.ships.forEach((ship) => {
    ship.isSunk = true;
  });
  expect(newGame.allSunk(newGame.ships)).toBe(true);
});

test("test allSunk function: 3 ships", () => {
  const newGame = new Gameboard("player");
  newGame.ships[0].isSunk = true;
  newGame.ships[1].isSunk = true;
  newGame.ships[2].isSunk = true;
  expect(newGame.allSunk(newGame.ships)).toBe(false);
});

test("Check if placeShips works in a valid area & ship attribute is added", () => {
  const newGame = new Gameboard("player");
  document.body.innerHTML =
    '<div class="playerBoard"><div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div><div class="box" row="0" col="2"></div><div class="box" row="0" col="3"></div><div class="box" row="0" col="4"></div><div class="box" row="0" col="5"></div><div class="box" row="0" col="6"></div><div class="box" row="0" col="7"></div><div class="box" row="0" col="8"></div><div class="box" row="0" col="9"></div><div class="box" row="1" col="0"></div><div class="box" row="1" col="1"></div><div class="box" row="1" col="2"></div><div class="box" row="1" col="3"></div><div class="box" row="1" col="4"></div><div class="box" row="1" col="5"></div><div class="box" row="1" col="6"></div><div class="box" row="1" col="7"></div><div class="box" row="1" col="8"></div><div class="box" row="1" col="9"></div><div class="box" row="2" col="0"></div><div class="box" row="2" col="1"></div><div class="box" row="2" col="2"></div><div class="box" row="2" col="3"></div><div class="box" row="2" col="4"></div><div class="box" row="2" col="5"></div><div class="box" row="2" col="6"></div><div class="box" row="2" col="7"></div><div class="box" row="2" col="8"></div><div class="box" row="2" col="9"></div><div class="box" row="3" col="0"></div><div class="box" row="3" col="1"></div><div class="box" row="3" col="2"></div><div class="box" row="3" col="3"></div><div class="box" row="3" col="4"></div><div class="box" row="3" col="5"></div><div class="box" row="3" col="6"></div><div class="box" row="3" col="7"></div><div class="box" row="3" col="8"></div><div class="box" row="3" col="9"></div><div class="box" row="4" col="0"></div><div class="box" row="4" col="1"></div><div class="box" row="4" col="2"></div><div class="box" row="4" col="3"></div><div class="box" row="4" col="4"></div><div class="box" row="4" col="5"></div><div class="box" row="4" col="6"></div><div class="box" row="4" col="7"></div><div class="box" row="4" col="8"></div><div class="box" row="4" col="9"></div><div class="box" row="5" col="0"></div><div class="box" row="5" col="1"></div><div class="box" row="5" col="2"></div><div class="box" row="5" col="3"></div><div class="box" row="5" col="4"></div><div class="box" row="5" col="5"></div><div class="box" row="5" col="6"></div><div class="box" row="5" col="7"></div><div class="box" row="5" col="8"></div><div class="box" row="5" col="9"></div><div class="box" row="6" col="0"></div><div class="box" row="6" col="1"></div><div class="box" row="6" col="2"></div><div class="box" row="6" col="3"></div><div class="box" row="6" col="4"></div><div class="box" row="6" col="5"></div><div class="box" row="6" col="6"></div><div class="box" row="6" col="7"></div><div class="box" row="6" col="8"></div><div class="box" row="6" col="9"></div><div class="box" row="7" col="0"></div><div class="box" row="7" col="1"></div><div class="box" row="7" col="2"></div><div class="box" row="7" col="3"></div><div class="box" row="7" col="4"></div><div class="box" row="7" col="5"></div><div class="box" row="7" col="6"></div><div class="box" row="7" col="7"></div><div class="box" row="7" col="8"></div><div class="box" row="7" col="9"></div><div class="box" row="8" col="0"></div><div class="box" row="8" col="1"></div><div class="box" row="8" col="2"></div><div class="box" row="8" col="3"></div><div class="box" row="8" col="4"></div><div class="box" row="8" col="5"></div><div class="box" row="8" col="6"></div><div class="box" row="8" col="7"></div><div class="box" row="8" col="8"></div><div class="box" row="8" col="9"></div><div class="box" row="9" col="0"></div><div class="box" row="9" col="1"></div><div class="box" row="9" col="2"></div><div class="box" row="9" col="3"></div><div class="box" row="9" col="4"></div><div class="box" row="9" col="5"></div><div class="box" row="9" col="6"></div><div class="box" row="9" col="7"></div><div class="box" row="9" col="8"></div><div class="box" row="9" col="9"></div></div>';
  newGame.placeShips(0, 0, newGame.patrolboat, "y");
  expect(
    document.querySelector('[row="0"][col="0"]').hasAttribute("ship")
  ).toBe(true);
});

test("Check if placeShips works in a valid area & ship size attribute is added", () => {
  const newGame = new Gameboard("player");
  document.body.innerHTML =
    '<div class="playerBoard"><div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div><div class="box" row="0" col="2"></div><div class="box" row="0" col="3"></div><div class="box" row="0" col="4"></div><div class="box" row="0" col="5"></div><div class="box" row="0" col="6"></div><div class="box" row="0" col="7"></div><div class="box" row="0" col="8"></div><div class="box" row="0" col="9"></div><div class="box" row="1" col="0"></div><div class="box" row="1" col="1"></div><div class="box" row="1" col="2"></div><div class="box" row="1" col="3"></div><div class="box" row="1" col="4"></div><div class="box" row="1" col="5"></div><div class="box" row="1" col="6"></div><div class="box" row="1" col="7"></div><div class="box" row="1" col="8"></div><div class="box" row="1" col="9"></div><div class="box" row="2" col="0"></div><div class="box" row="2" col="1"></div><div class="box" row="2" col="2"></div><div class="box" row="2" col="3"></div><div class="box" row="2" col="4"></div><div class="box" row="2" col="5"></div><div class="box" row="2" col="6"></div><div class="box" row="2" col="7"></div><div class="box" row="2" col="8"></div><div class="box" row="2" col="9"></div><div class="box" row="3" col="0"></div><div class="box" row="3" col="1"></div><div class="box" row="3" col="2"></div><div class="box" row="3" col="3"></div><div class="box" row="3" col="4"></div><div class="box" row="3" col="5"></div><div class="box" row="3" col="6"></div><div class="box" row="3" col="7"></div><div class="box" row="3" col="8"></div><div class="box" row="3" col="9"></div><div class="box" row="4" col="0"></div><div class="box" row="4" col="1"></div><div class="box" row="4" col="2"></div><div class="box" row="4" col="3"></div><div class="box" row="4" col="4"></div><div class="box" row="4" col="5"></div><div class="box" row="4" col="6"></div><div class="box" row="4" col="7"></div><div class="box" row="4" col="8"></div><div class="box" row="4" col="9"></div><div class="box" row="5" col="0"></div><div class="box" row="5" col="1"></div><div class="box" row="5" col="2"></div><div class="box" row="5" col="3"></div><div class="box" row="5" col="4"></div><div class="box" row="5" col="5"></div><div class="box" row="5" col="6"></div><div class="box" row="5" col="7"></div><div class="box" row="5" col="8"></div><div class="box" row="5" col="9"></div><div class="box" row="6" col="0"></div><div class="box" row="6" col="1"></div><div class="box" row="6" col="2"></div><div class="box" row="6" col="3"></div><div class="box" row="6" col="4"></div><div class="box" row="6" col="5"></div><div class="box" row="6" col="6"></div><div class="box" row="6" col="7"></div><div class="box" row="6" col="8"></div><div class="box" row="6" col="9"></div><div class="box" row="7" col="0"></div><div class="box" row="7" col="1"></div><div class="box" row="7" col="2"></div><div class="box" row="7" col="3"></div><div class="box" row="7" col="4"></div><div class="box" row="7" col="5"></div><div class="box" row="7" col="6"></div><div class="box" row="7" col="7"></div><div class="box" row="7" col="8"></div><div class="box" row="7" col="9"></div><div class="box" row="8" col="0"></div><div class="box" row="8" col="1"></div><div class="box" row="8" col="2"></div><div class="box" row="8" col="3"></div><div class="box" row="8" col="4"></div><div class="box" row="8" col="5"></div><div class="box" row="8" col="6"></div><div class="box" row="8" col="7"></div><div class="box" row="8" col="8"></div><div class="box" row="8" col="9"></div><div class="box" row="9" col="0"></div><div class="box" row="9" col="1"></div><div class="box" row="9" col="2"></div><div class="box" row="9" col="3"></div><div class="box" row="9" col="4"></div><div class="box" row="9" col="5"></div><div class="box" row="9" col="6"></div><div class="box" row="9" col="7"></div><div class="box" row="9" col="8"></div><div class="box" row="9" col="9"></div></div>';
  newGame.placeShips(0, 0, newGame.patrolboat, "y");
  expect(
    document.querySelector('[row="0"][col="0"]').hasAttribute("hitbox")
  ).toBe(true);
});

test("Check if placeShips function returns undefined when ship doesn't fit into Gameboard", () => {
  const newGame = new Gameboard("player");
  expect(newGame.placeShips(9, 9, newGame.destroyer)).toBe(undefined);
});

test("Check if receiveAttack updates hit ship size array", () => {
  const newGame = new Gameboard("player");
  document.body.innerHTML =
    '<div class="playerBoard"><div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div><div class="box" row="0" col="2"></div><div class="box" row="0" col="3"></div><div class="box" row="0" col="4"></div><div class="box" row="0" col="5"></div><div class="box" row="0" col="6"></div><div class="box" row="0" col="7"></div><div class="box" row="0" col="8"></div><div class="box" row="0" col="9"></div><div class="box" row="1" col="0"></div><div class="box" row="1" col="1"></div><div class="box" row="1" col="2"></div><div class="box" row="1" col="3"></div><div class="box" row="1" col="4"></div><div class="box" row="1" col="5"></div><div class="box" row="1" col="6"></div><div class="box" row="1" col="7"></div><div class="box" row="1" col="8"></div><div class="box" row="1" col="9"></div><div class="box" row="2" col="0"></div><div class="box" row="2" col="1"></div><div class="box" row="2" col="2"></div><div class="box" row="2" col="3"></div><div class="box" row="2" col="4"></div><div class="box" row="2" col="5"></div><div class="box" row="2" col="6"></div><div class="box" row="2" col="7"></div><div class="box" row="2" col="8"></div><div class="box" row="2" col="9"></div><div class="box" row="3" col="0"></div><div class="box" row="3" col="1"></div><div class="box" row="3" col="2"></div><div class="box" row="3" col="3"></div><div class="box" row="3" col="4"></div><div class="box" row="3" col="5"></div><div class="box" row="3" col="6"></div><div class="box" row="3" col="7"></div><div class="box" row="3" col="8"></div><div class="box" row="3" col="9"></div><div class="box" row="4" col="0"></div><div class="box" row="4" col="1"></div><div class="box" row="4" col="2"></div><div class="box" row="4" col="3"></div><div class="box" row="4" col="4"></div><div class="box" row="4" col="5"></div><div class="box" row="4" col="6"></div><div class="box" row="4" col="7"></div><div class="box" row="4" col="8"></div><div class="box" row="4" col="9"></div><div class="box" row="5" col="0"></div><div class="box" row="5" col="1"></div><div class="box" row="5" col="2"></div><div class="box" row="5" col="3"></div><div class="box" row="5" col="4"></div><div class="box" row="5" col="5"></div><div class="box" row="5" col="6"></div><div class="box" row="5" col="7"></div><div class="box" row="5" col="8"></div><div class="box" row="5" col="9"></div><div class="box" row="6" col="0"></div><div class="box" row="6" col="1"></div><div class="box" row="6" col="2"></div><div class="box" row="6" col="3"></div><div class="box" row="6" col="4"></div><div class="box" row="6" col="5"></div><div class="box" row="6" col="6"></div><div class="box" row="6" col="7"></div><div class="box" row="6" col="8"></div><div class="box" row="6" col="9"></div><div class="box" row="7" col="0"></div><div class="box" row="7" col="1"></div><div class="box" row="7" col="2"></div><div class="box" row="7" col="3"></div><div class="box" row="7" col="4"></div><div class="box" row="7" col="5"></div><div class="box" row="7" col="6"></div><div class="box" row="7" col="7"></div><div class="box" row="7" col="8"></div><div class="box" row="7" col="9"></div><div class="box" row="8" col="0"></div><div class="box" row="8" col="1"></div><div class="box" row="8" col="2"></div><div class="box" row="8" col="3"></div><div class="box" row="8" col="4"></div><div class="box" row="8" col="5"></div><div class="box" row="8" col="6"></div><div class="box" row="8" col="7"></div><div class="box" row="8" col="8"></div><div class="box" row="8" col="9"></div><div class="box" row="9" col="0"></div><div class="box" row="9" col="1"></div><div class="box" row="9" col="2"></div><div class="box" row="9" col="3"></div><div class="box" row="9" col="4"></div><div class="box" row="9" col="5"></div><div class="box" row="9" col="6"></div><div class="box" row="9" col="7"></div><div class="box" row="9" col="8"></div><div class="box" row="9" col="9"></div></div>';
  newGame.placeShips(0, 0, newGame.carrier, "x");
  newGame.receiveAttack(0, 0);
  expect(newGame.carrier.size).toStrictEqual([null, 1, 2, 3, 4]);
});

test("Check if receiveAttack updates hit ship size array with multiple attacks", () => {
  const newGame = new Gameboard("player");
  document.body.innerHTML =
    '<div class="playerBoard"><div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div><div class="box" row="0" col="2"></div><div class="box" row="0" col="3"></div><div class="box" row="0" col="4"></div><div class="box" row="0" col="5"></div><div class="box" row="0" col="6"></div><div class="box" row="0" col="7"></div><div class="box" row="0" col="8"></div><div class="box" row="0" col="9"></div><div class="box" row="1" col="0"></div><div class="box" row="1" col="1"></div><div class="box" row="1" col="2"></div><div class="box" row="1" col="3"></div><div class="box" row="1" col="4"></div><div class="box" row="1" col="5"></div><div class="box" row="1" col="6"></div><div class="box" row="1" col="7"></div><div class="box" row="1" col="8"></div><div class="box" row="1" col="9"></div><div class="box" row="2" col="0"></div><div class="box" row="2" col="1"></div><div class="box" row="2" col="2"></div><div class="box" row="2" col="3"></div><div class="box" row="2" col="4"></div><div class="box" row="2" col="5"></div><div class="box" row="2" col="6"></div><div class="box" row="2" col="7"></div><div class="box" row="2" col="8"></div><div class="box" row="2" col="9"></div><div class="box" row="3" col="0"></div><div class="box" row="3" col="1"></div><div class="box" row="3" col="2"></div><div class="box" row="3" col="3"></div><div class="box" row="3" col="4"></div><div class="box" row="3" col="5"></div><div class="box" row="3" col="6"></div><div class="box" row="3" col="7"></div><div class="box" row="3" col="8"></div><div class="box" row="3" col="9"></div><div class="box" row="4" col="0"></div><div class="box" row="4" col="1"></div><div class="box" row="4" col="2"></div><div class="box" row="4" col="3"></div><div class="box" row="4" col="4"></div><div class="box" row="4" col="5"></div><div class="box" row="4" col="6"></div><div class="box" row="4" col="7"></div><div class="box" row="4" col="8"></div><div class="box" row="4" col="9"></div><div class="box" row="5" col="0"></div><div class="box" row="5" col="1"></div><div class="box" row="5" col="2"></div><div class="box" row="5" col="3"></div><div class="box" row="5" col="4"></div><div class="box" row="5" col="5"></div><div class="box" row="5" col="6"></div><div class="box" row="5" col="7"></div><div class="box" row="5" col="8"></div><div class="box" row="5" col="9"></div><div class="box" row="6" col="0"></div><div class="box" row="6" col="1"></div><div class="box" row="6" col="2"></div><div class="box" row="6" col="3"></div><div class="box" row="6" col="4"></div><div class="box" row="6" col="5"></div><div class="box" row="6" col="6"></div><div class="box" row="6" col="7"></div><div class="box" row="6" col="8"></div><div class="box" row="6" col="9"></div><div class="box" row="7" col="0"></div><div class="box" row="7" col="1"></div><div class="box" row="7" col="2"></div><div class="box" row="7" col="3"></div><div class="box" row="7" col="4"></div><div class="box" row="7" col="5"></div><div class="box" row="7" col="6"></div><div class="box" row="7" col="7"></div><div class="box" row="7" col="8"></div><div class="box" row="7" col="9"></div><div class="box" row="8" col="0"></div><div class="box" row="8" col="1"></div><div class="box" row="8" col="2"></div><div class="box" row="8" col="3"></div><div class="box" row="8" col="4"></div><div class="box" row="8" col="5"></div><div class="box" row="8" col="6"></div><div class="box" row="8" col="7"></div><div class="box" row="8" col="8"></div><div class="box" row="8" col="9"></div><div class="box" row="9" col="0"></div><div class="box" row="9" col="1"></div><div class="box" row="9" col="2"></div><div class="box" row="9" col="3"></div><div class="box" row="9" col="4"></div><div class="box" row="9" col="5"></div><div class="box" row="9" col="6"></div><div class="box" row="9" col="7"></div><div class="box" row="9" col="8"></div><div class="box" row="9" col="9"></div></div>';
  newGame.placeShips(0, 0, newGame.carrier, "x");
  newGame.receiveAttack(0, 0);
  newGame.receiveAttack(0, 1);
  newGame.receiveAttack(0, 2);
  newGame.receiveAttack(0, 3);
  expect(newGame.carrier.size).toStrictEqual([null, null, null, null, 4]);
});

test("Check if receiveAttack updates hit ship size array with multiple attacks and is sunk", () => {
  const newGame = new Gameboard("player");
  document.body.innerHTML =
    '<div class="playerBoard"><div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div><div class="box" row="0" col="2"></div><div class="box" row="0" col="3"></div><div class="box" row="0" col="4"></div><div class="box" row="0" col="5"></div><div class="box" row="0" col="6"></div><div class="box" row="0" col="7"></div><div class="box" row="0" col="8"></div><div class="box" row="0" col="9"></div><div class="box" row="1" col="0"></div><div class="box" row="1" col="1"></div><div class="box" row="1" col="2"></div><div class="box" row="1" col="3"></div><div class="box" row="1" col="4"></div><div class="box" row="1" col="5"></div><div class="box" row="1" col="6"></div><div class="box" row="1" col="7"></div><div class="box" row="1" col="8"></div><div class="box" row="1" col="9"></div><div class="box" row="2" col="0"></div><div class="box" row="2" col="1"></div><div class="box" row="2" col="2"></div><div class="box" row="2" col="3"></div><div class="box" row="2" col="4"></div><div class="box" row="2" col="5"></div><div class="box" row="2" col="6"></div><div class="box" row="2" col="7"></div><div class="box" row="2" col="8"></div><div class="box" row="2" col="9"></div><div class="box" row="3" col="0"></div><div class="box" row="3" col="1"></div><div class="box" row="3" col="2"></div><div class="box" row="3" col="3"></div><div class="box" row="3" col="4"></div><div class="box" row="3" col="5"></div><div class="box" row="3" col="6"></div><div class="box" row="3" col="7"></div><div class="box" row="3" col="8"></div><div class="box" row="3" col="9"></div><div class="box" row="4" col="0"></div><div class="box" row="4" col="1"></div><div class="box" row="4" col="2"></div><div class="box" row="4" col="3"></div><div class="box" row="4" col="4"></div><div class="box" row="4" col="5"></div><div class="box" row="4" col="6"></div><div class="box" row="4" col="7"></div><div class="box" row="4" col="8"></div><div class="box" row="4" col="9"></div><div class="box" row="5" col="0"></div><div class="box" row="5" col="1"></div><div class="box" row="5" col="2"></div><div class="box" row="5" col="3"></div><div class="box" row="5" col="4"></div><div class="box" row="5" col="5"></div><div class="box" row="5" col="6"></div><div class="box" row="5" col="7"></div><div class="box" row="5" col="8"></div><div class="box" row="5" col="9"></div><div class="box" row="6" col="0"></div><div class="box" row="6" col="1"></div><div class="box" row="6" col="2"></div><div class="box" row="6" col="3"></div><div class="box" row="6" col="4"></div><div class="box" row="6" col="5"></div><div class="box" row="6" col="6"></div><div class="box" row="6" col="7"></div><div class="box" row="6" col="8"></div><div class="box" row="6" col="9"></div><div class="box" row="7" col="0"></div><div class="box" row="7" col="1"></div><div class="box" row="7" col="2"></div><div class="box" row="7" col="3"></div><div class="box" row="7" col="4"></div><div class="box" row="7" col="5"></div><div class="box" row="7" col="6"></div><div class="box" row="7" col="7"></div><div class="box" row="7" col="8"></div><div class="box" row="7" col="9"></div><div class="box" row="8" col="0"></div><div class="box" row="8" col="1"></div><div class="box" row="8" col="2"></div><div class="box" row="8" col="3"></div><div class="box" row="8" col="4"></div><div class="box" row="8" col="5"></div><div class="box" row="8" col="6"></div><div class="box" row="8" col="7"></div><div class="box" row="8" col="8"></div><div class="box" row="8" col="9"></div><div class="box" row="9" col="0"></div><div class="box" row="9" col="1"></div><div class="box" row="9" col="2"></div><div class="box" row="9" col="3"></div><div class="box" row="9" col="4"></div><div class="box" row="9" col="5"></div><div class="box" row="9" col="6"></div><div class="box" row="9" col="7"></div><div class="box" row="9" col="8"></div><div class="box" row="9" col="9"></div></div>';
  newGame.placeShips(0, 0, newGame.carrier, "x");
  newGame.receiveAttack(0, 0);
  newGame.receiveAttack(0, 1);
  newGame.receiveAttack(0, 2);
  newGame.receiveAttack(0, 3);
  newGame.receiveAttack(0, 4);
  expect(newGame.carrier.isSunk()).toBe(true);
});

test("Check if displayMissed adds missed class to dom", () => {
  const newGame = new Gameboard("player");
  document.body.innerHTML = '<div class="box" row="0" col="0"></div>';
  const container = document.querySelector(".box");
  newGame.receiveAttack(0, 0);
  newGame.displayMissed();
  expect(container.classList.contains("missed")).toBe(true);
});
