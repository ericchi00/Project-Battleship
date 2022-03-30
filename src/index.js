import "./style.css";
import Player from "./player";
import Gameboard from "./gameboard";
import { addCoords, createComputerBoard, createPlayerBoard } from "./dom";

const newGame = Gameboard();

const gameLoop = (() => {
  createComputerBoard();
  createPlayerBoard();
  addCoords();
})();
