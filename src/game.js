
import { addCoordsToGrid, createComputerBoard, createPlayerBoard } from "./dom";
import addBoats from "./eventhandler";

function startGame() {
  createComputerBoard();
  createPlayerBoard();
  addCoordsToGrid();
  addBoats();
}

export default startGame;
