// ship constructor
class Ship {
  constructor(length, hit, sunk) {
    this.length = length;
    this.hit = hit;
    this.sunk = sunk;
    this.size = Array.from({ length: length }, (value, num) => num);
  }
}

// marks ship array to null to indicate it is hit
Ship.prototype.hit = (number) => {
  this.ship[number] = null;
};

// checks if the entire ship array is null, then it is sunk
Ship.prototype.isSunk = (length) => {
  let numOfHit = 0;
  for (let i = 0; i <= this.ship.length; i++) {
    if (this.ship[i] === null) {
      numOfHit += 1;
    }
  }
  if (numOfHit === length) return true;
  else return false;
};

export default Ship;
