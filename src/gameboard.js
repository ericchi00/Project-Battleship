import Ship from "./ship";

class Gameboard {
  constructor() {
    this.missed = [];
    this.carrier = new Ship(5);
    this.battleship = new Ship(4);
    this.destroyer = new Ship(3);
    this.submarine = new Ship(3);
    this.patrolboat = new Ship(2);
    this.ships = [
      this.carrier,
      this.battleship,
      this.destroyer,
      this.submarine,
      this.patrolboat,
    ];
  }
  placeShips(row, col, ship) {
    if (document.querySelector(`[row="${row + ship.length}"]`) === null) return;
    if (document.querySelector(`[col="${col + ship.length}"]`) === null) return;
    else {
      const firstBox = document.querySelector(`[row="${row}"][col="${col}"]`);
      return firstBox;
    }
  }
  receiveAttack(row, col) {
    // add ship class to dom
    if (coords === "ship") {
      // grab the id (type ofship)
      // grab array num attribute and sets it to null
    } else {
      missed.push(coords);
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
    missed.forEach((coord) => {
      // add missed class to DOM
    });
  }
}
export default Gameboard;
