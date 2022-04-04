import { placeShipsRandomly } from "./computerboard";
import { addCoordsToGrid, createComputerBoard, createPlayerBoard } from "./dom";
import { addBoats, rotateAxis } from "./eventhandler";
import { Player, Computer } from "./player";

function startGame() {
  createComputerBoard();
  createPlayerBoard();
  addCoordsToGrid();
  rotateAxis();
  const player = new Player("player");
  const computer = new Computer("computer");
  placeShipsRandomly(computer);
  addBoats(player, computer);
}

export default startGame;
