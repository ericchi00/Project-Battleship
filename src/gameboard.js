import Ship from "./ship";

class Gameboard {
  constructor() {
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
    if (axis === "x") {
      if (document.querySelector(`[row="${row + ship.length}"]`) === null)
        return;
      else {
        for (let i = 0; i < ship.length; i++) {
          document
            .querySelector(`[row="${row}"][col="${col + i}"]`)
            .setAttribute("ship", ship.name);
          document
            .querySelector(`[row="${row}"][col="${col + i}"]`)
            .setAttribute("hitbox", i);
        }
      }
    }
    if (axis == "y") {
      if (document.querySelector(`[col="${col + ship.length}"]`) === null)
        return;
      else {
        for (let i = 0; i < ship.length; i++) {
          document
            .querySelector(`[row="${row + i}"][col="${col}"]`)
            .setAttribute("ship", ship.name);
          document
            .querySelector(`[row="${row + i}"][col="${col}"]`)
            .setAttribute("hitbox", i);
        }
      }
    }
  }
  receiveAttack(row, col) {
    const box = document.querySelector(`[row="${row}"][col="${col}"]`);
    if (box.hasAttribute("ship")) {
      const shipName = box.getAttribute("ship");
      const shipHitBox = box.getAttribute("hitbox");
      this.ships.forEach((ship) => {
        if (shipName === ship.name) {
          ship.hit(shipHitBox);
        }
      });
    } else {
      this.missed.push([row, col]);
    }
  }
  allSunk(shipsArr) {
    let sunk = 0;
    shipsArr.forEach((ship) => {
      if (ship.isSunk === true) sunk += 1;
    });
    if (sunk === 5) return true;
    else return false;
  }
  displayMissed() {
    this.missed.forEach((coord) => {
      // add missed class to DOM
    });
  }
}
export default Gameboard;
