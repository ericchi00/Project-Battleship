/**
 * @jest-environment jsdom
 */
import { createPlayerBoard } from "../src/dom";
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

test("Check if placeShips works in a valid area & the correct attribute is added", () => {
  const newGame = new Gameboard();
  document.body.innerHTML =
    '<div class="playerBoard"><div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div><div class="box" row="0" col="2"></div><div class="box" row="0" col="3"></div><div class="box" row="0" col="4"></div><div class="box" row="0" col="5"></div><div class="box" row="0" col="6"></div><div class="box" row="0" col="7"></div><div class="box" row="0" col="8"></div><div class="box" row="0" col="9"></div><div class="box" row="1" col="0"></div><div class="box" row="1" col="1"></div><div class="box" row="1" col="2"></div><div class="box" row="1" col="3"></div><div class="box" row="1" col="4"></div><div class="box" row="1" col="5"></div><div class="box" row="1" col="6"></div><div class="box" row="1" col="7"></div><div class="box" row="1" col="8"></div><div class="box" row="1" col="9"></div><div class="box" row="2" col="0"></div><div class="box" row="2" col="1"></div><div class="box" row="2" col="2"></div><div class="box" row="2" col="3"></div><div class="box" row="2" col="4"></div><div class="box" row="2" col="5"></div><div class="box" row="2" col="6"></div><div class="box" row="2" col="7"></div><div class="box" row="2" col="8"></div><div class="box" row="2" col="9"></div><div class="box" row="3" col="0"></div><div class="box" row="3" col="1"></div><div class="box" row="3" col="2"></div><div class="box" row="3" col="3"></div><div class="box" row="3" col="4"></div><div class="box" row="3" col="5"></div><div class="box" row="3" col="6"></div><div class="box" row="3" col="7"></div><div class="box" row="3" col="8"></div><div class="box" row="3" col="9"></div><div class="box" row="4" col="0"></div><div class="box" row="4" col="1"></div><div class="box" row="4" col="2"></div><div class="box" row="4" col="3"></div><div class="box" row="4" col="4"></div><div class="box" row="4" col="5"></div><div class="box" row="4" col="6"></div><div class="box" row="4" col="7"></div><div class="box" row="4" col="8"></div><div class="box" row="4" col="9"></div><div class="box" row="5" col="0"></div><div class="box" row="5" col="1"></div><div class="box" row="5" col="2"></div><div class="box" row="5" col="3"></div><div class="box" row="5" col="4"></div><div class="box" row="5" col="5"></div><div class="box" row="5" col="6"></div><div class="box" row="5" col="7"></div><div class="box" row="5" col="8"></div><div class="box" row="5" col="9"></div><div class="box" row="6" col="0"></div><div class="box" row="6" col="1"></div><div class="box" row="6" col="2"></div><div class="box" row="6" col="3"></div><div class="box" row="6" col="4"></div><div class="box" row="6" col="5"></div><div class="box" row="6" col="6"></div><div class="box" row="6" col="7"></div><div class="box" row="6" col="8"></div><div class="box" row="6" col="9"></div><div class="box" row="7" col="0"></div><div class="box" row="7" col="1"></div><div class="box" row="7" col="2"></div><div class="box" row="7" col="3"></div><div class="box" row="7" col="4"></div><div class="box" row="7" col="5"></div><div class="box" row="7" col="6"></div><div class="box" row="7" col="7"></div><div class="box" row="7" col="8"></div><div class="box" row="7" col="9"></div><div class="box" row="8" col="0"></div><div class="box" row="8" col="1"></div><div class="box" row="8" col="2"></div><div class="box" row="8" col="3"></div><div class="box" row="8" col="4"></div><div class="box" row="8" col="5"></div><div class="box" row="8" col="6"></div><div class="box" row="8" col="7"></div><div class="box" row="8" col="8"></div><div class="box" row="8" col="9"></div><div class="box" row="9" col="0"></div><div class="box" row="9" col="1"></div><div class="box" row="9" col="2"></div><div class="box" row="9" col="3"></div><div class="box" row="9" col="4"></div><div class="box" row="9" col="5"></div><div class="box" row="9" col="6"></div><div class="box" row="9" col="7"></div><div class="box" row="9" col="8"></div><div class="box" row="9" col="9"></div></div>';
  newGame.placeShips(0, 0, newGame.patrolboat, "y");
  expect(
    document.querySelector('[row="0"][col="0"]').hasAttribute("ship")
  ).toBe(true);
});

test("test if placeShips function returns undefined", () => {
  const newGame = new Gameboard();
  expect(newGame.placeShips(9, 9, newGame.destroyer)).toBe(undefined);
});