/* eslint-disable max-classes-per-file */

import { getRandomInt } from "./computerboard";
import Gameboard from "./gameboard";

class Player {
  // creates new board when a new player is created
  constructor(name) {
    this.board = new Gameboard(name);
  }
}

function returnTwoRandomNumbers() {
  return [getRandomInt(), getRandomInt()];
}

class Computer extends Player {
  // eslint-disable-next-line class-methods-use-this
  randomAttack() {
    return returnTwoRandomNumbers();
  }
}

export { Player, Computer };
