import "./style.css";
import Player from "./player";
import { createComputerBoard, createPlayerBoard } from "./dom";

const gameLoop = (() => {
    createComputerBoard();
    createPlayerBoard();
})();