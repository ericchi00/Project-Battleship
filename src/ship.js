// ship constructor
const Ship = (length, hit, sunk) => ({ length, hit, sunk });

Ship.prototype.hit = (number) => {
  // takes in number and marks it as hit
};

Ship.prototype.isSunk = (length, hit) => {
  // calculates if ship is sunk based on length and whether all of their positions are hit
};
