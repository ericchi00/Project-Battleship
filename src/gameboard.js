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

  // place ships in specified coordinates, have to use -1 from ship length as grid starts counting from 0
  placeShips(row, col, ship, axis) {
    const board = document.querySelector(`.${this.user}Board`);
    if (
      board.querySelector(`[row="${row}"][col="${col}"]`).hasAttribute("ship")
    )
      return false;
    if (axis === "x") {
      // checks if ship will be outside of grid
      if (
        board.querySelector(
          `[row="${row}"][col="${col + ship.length - 1}"]`
        ) === null
      )
        return false;
      // checks if ship will be placed on top of another ship
      if (
        board
          .querySelector(`[row="${row}"][col="${col + ship.length - 1}"]`)
          .hasAttribute("ship")
      )
        return false;
      // checks ship length on top of a boat that is placed on y axis
      for (let i = 0; i < ship.length; i += 1) {
        if (board.querySelector(`[row="${row}"][col="${col + i}"]`) !== null) {
          if (
            board
              .querySelector(`[row="${row}"][col="${col + i}"]`)
              .hasAttribute("ship")
          )
            return false;
        }
      }
      // sets the ship onto div and returns true
      for (let i = 0; i < ship.length; i += 1) {
        board
          .querySelector(`[row="${row}"][col="${col + i}"]`)
          .setAttribute("ship", ship.name);
        board
          .querySelector(`[row="${row}"][col="${col + i}"]`)
          .setAttribute("hitbox", i);
      }
      return true;
    }
    if (axis === "y") {
      // checks if ship will be outside of grid
      if (board.querySelector(`[row="${row + ship.length - 1}"]`) === null)
        return false;
      // checks if ship will be placed on top of another ship
      if (
        board
          .querySelector(`[row="${row + ship.length - 1}"][col="${col}"]`)
          .hasAttribute("ship")
      )
        return false;
      // checks ship length on top of a boat that is placed on the x axis
      for (let i = 0; i < ship.length; i += 1) {
        if (board.querySelector(`[row="${row + i}"][col="${col}"]`) !== null) {
          if (
            board
              .querySelector(`[row="${row + i}"][col="${col}"]`)
              .hasAttribute("ship")
          )
            return false;
        }
      }
      // sets the ship onto the div and returns true
      for (let i = 0; i < ship.length; i += 1) {
        board
          .querySelector(`[row="${row + i}"][col="${col}"]`)
          .setAttribute("ship", ship.name);
        board
          .querySelector(`[row="${row + i}"][col="${col}"]`)
          .setAttribute("hitbox", i);
      }
      return true;
    }
    return false;
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
