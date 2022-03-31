import Ship from "./ship";

class Gameboard {
  constructor(user) {
    this.user = user;
    this.missed = [];
    this.carrier = new Ship("carrier", 5);
    this.battleship = new Ship("battleship", 4);
    this.destroyer = new Ship("destroyer", 3);
    this.submarine = new Ship("submarine", 3);
    this.patrolboat = new Ship("patrolboat", 2);
    this.ships = [
      this.carrier,
      this.battleship,
      this.destroyer,
      this.submarine,
      this.patrolboat,
    ];
  }

  // place ships in specified coordinates
  placeShips(row, col, ship, axis) {
    const board = document.querySelector(`.${this.user}Board`);
    if (axis === "x") {
      if (board.querySelector(`[row="${row + ship.length}"]`) === null) return;

      for (let i = 0; i < ship.length; i += 1) {
        board
          .querySelector(`[row="${row}"][col="${col + i}"]`)
          .setAttribute("ship", ship.name);
        board
          .querySelector(`[row="${row}"][col="${col + i}"]`)
          .setAttribute("hitbox", i);
      }
    }
    if (axis === "y") {
      if (board.querySelector(`[col="${col + ship.length}"]`) === null) return;

      for (let i = 0; i < ship.length; i += 1) {
        board
          .querySelector(`[row="${row + i}"][col="${col}"]`)
          .setAttribute("ship", ship.name);
        board
          .querySelector(`[row="${row + i}"][col="${col}"]`)
          .setAttribute("hitbox", i);
      }
    }
  }

  receiveAttack(row, col) {
    const board = document.querySelector(`.${this.user}Board`);
    const box = board.querySelector(`[row="${row}"][col="${col}"]`);
    if (box.hasAttribute("ship")) {
      const shipName = box.getAttribute("ship");
      const shipHitBox = box.getAttribute("hitbox");
      this.ships.forEach((ship) => {
        if (shipName === ship.name) {
          ship.hit(shipHitBox);
          box.classList.add("hit");
        }
      });
    } else {
      this.missed.push([row, col]);
    }
  }

  allSunk() {
    let sunk = 0;
    this.ships.forEach((ship) => {
      if (ship.isSunk === true) sunk += 1;
    });
    if (sunk === 5) return true;
    return false;
  }

  displayMissed() {
    const board = document.querySelector(`.${this.user}Board`);
    this.missed.forEach((index) => {
      // add missed class to DOM
      board
        .querySelector(`[row="${index[0]}"][col="${index[1]}"]`)
        .classList.add("missed");
    });
  }
}
export default Gameboard;
