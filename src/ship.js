// ship constructor
class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.size = Array.from({ length: length }, (value, num) => num);
  }

  // marks ship array to null to indicate it is hit
  hit(number) {
    this.size[number] = null;
  }

  // checks if the entire ship array is null, then it is sunk
  isSunk() {
    let numOfHit = 0;
    for (let i = 0; i <= this.length; i++) {
      if (this.size[i] === null) {
        numOfHit += 1;
      }
    }
    if (numOfHit === this.length) return true;
    else return false;
  }
}

export default Ship;
