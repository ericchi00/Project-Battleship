import placeShipsRandomly from "./computerboard";
import { addCoordsToGrid, createComputerBoard, createPlayerBoard } from "./dom";
import addBoats from "./eventhandler";

function startGame() {
  createComputerBoard();
  createPlayerBoard();
  addCoordsToGrid();
  placeShipsRandomly();
  addBoats();
}

export default startGame;
