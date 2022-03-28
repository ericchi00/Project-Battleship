import Ship from "./ship";

const Gameboard = () => {
  const missed = [];
  const ships = [
    (carrier = new Ship(5)),
    (battleship = new Ship(4)),
    (destroyer = new Ship(3)),
    (submarine = new Ship(3)),
    (patrolBoat = new Ship(2)),
  ];

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
        shipsArr.forEach(ship => {
            if (ship.isSunk === true) sunk += 1;
        });
        if (sunk === 5) return true;
        else return false;
  }
};
