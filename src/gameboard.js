import Ship from "./ship";

const Gameboard = () => {
  let missed = [];
  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const destroyer = new Ship(3);
  const submarine = new Ship(3);
  const patrolboat = new Ship(2);
  let ships = [carrier, battleship, destroyer, submarine, patrolboat];

  function placeShips(coords) {}
  function receiveAttack(coords) {
    // add ship class to dom
    if (coords === "ship") {
      // grab the id (type ofship)
      // grab array num attribute and sets it to null
    } else {
      missed.push(coords);
    }
  }
  function allSunk(shipsArr) {
    let sunk = 0;
    shipsArr.forEach((ship) => {
      if (ship.isSunk === true) sunk += 1;
    });
    if (sunk === 5) return true;
    else return false;
  }
  return { ships, allSunk };
};

export default Gameboard;
