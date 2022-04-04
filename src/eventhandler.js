function containsShip(ship) {
  const boxes = document.querySelector(".playerBoard").querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].getAttribute("ship") === ship.name) return true;
  }
  return false;
}

// once noTouch is added, cursor changes to normal on player.board
function changeCursor(className) {
  const boxes = Array.from(document.querySelectorAll(".box"));
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].classList.add(className);
  }
}

let axis = "x";
function rotateAxis() {
  const button = document.querySelector("#axis");
  const current = document.querySelector(".currentAxis");
  button.addEventListener("click", () => {
    if (axis === "x") {
      button.textContent = "Change to X";
      axis = "y";
      current.textContent = "Current Axis: Y";
    } else if (axis === "y") {
      button.textContent = "Change to Y";
      axis = "x";
      current.textContent = "Current Axis: X";
    }
  });
}

function reloadPage() {
  const instructions = document.querySelector(".instructions");
  const button = document.createElement("button");
  button.classList.add("reload");
  button.textContent = "Play Again";
  button.addEventListener("click", () => {
    reload = location.reload();
  });
  instructions.appendChild(button);
}

// lets player attack on Computer Board
function takeTurns(player, computer) {
  const computerBoard = document.querySelector(".computerBoard");
  const instructions = document.querySelector(".instructions");
  const win = document.createElement("p");
  computerBoard.addEventListener("click", function listener(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    // if receiveAttack returns false, it's already been hit
    if (!computer.board.receiveAttack(row, col)) return;
    // check if computer's ships are all sunk for player win
    if (computer.board.allSunk()) {
      while (instructions.firstChild) {
        instructions.removeChild(instructions.lastChild);
      }
      instructions.style.visibility = "visible";
      win.textContent = "You win!";
      instructions.appendChild(win);
      computerBoard.removeEventListener("click", listener);
      changeCursor("gameover");
      reloadPage();
      return;
    }
    // check if computer is attacking the same coords again
    let computerAttack = computer.randomAttack();
    while (!player.board.receiveAttack(computerAttack[0], computerAttack[1])) {
      // keeps rerolling computerAttack until it hits (true), then checks for win, if not it cancels the loop
      computerAttack = computer.randomAttack();
      // checks if computer wins
      if (player.board.allSunk()) {
        while (instructions.firstChild) {
          instructions.removeChild(instructions.lastChild);
        }
        instructions.style.visibility = "visible";
        win.textContent = "Computer wins!";
        instructions.appendChild(win);
        computerBoard.removeEventListener("click", listener);
        changeCursor("gameover");
        reloadPage();
        return;
      }
      if (player.board.receiveAttack(computerAttack[0], computerAttack[1])) {
        return;
      }
    }
  });
}

function addBoats(player, computer) {
  const board = document.querySelector(".playerBoard");
  const placeShip = document.querySelector(".placeShip");
  const instructions = document.querySelector(".instructions");
  const spaces = document.querySelector(".spaces");
  board.addEventListener("click", function listener(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    if (containsShip(player.board.carrier)) {
      if (containsShip(player.board.battleship)) {
        if (containsShip(player.board.destroyer)) {
          if (containsShip(player.board.submarine)) {
            placeShip.textContent = "Place Patrolboat (2 boxes)";

            if (
              player.board.placeShips(row, col, player.board.patrolboat, axis)
            ) {
              // removes ability to add more boats, changes cursor, and lets you click on computer board
              board.removeEventListener("click", listener);
              changeCursor("setup");
              takeTurns(player, computer);
              instructions.style.visibility = "hidden";
            }
          }
          if (player.board.placeShips(row, col, player.board.submarine, axis)) {
            spaces.lastElementChild.remove();
            placeShip.textContent = "Place Patrolboat (2 boxes)";
          }
        }
        if (player.board.placeShips(row, col, player.board.destroyer, axis)) {
          placeShip.textContent = "Place Submarine (3 boxes)";
        }
      }
      if (player.board.placeShips(row, col, player.board.battleship, axis)) {
        spaces.lastElementChild.remove();
        placeShip.textContent = "Place Destroyer (4 boxes)";
      }
    }
    if (player.board.placeShips(row, col, player.board.carrier, axis)) {
      spaces.lastElementChild.remove();
      placeShip.textContent = "Place Battleship (4 boxes)";
    }
  });
}

export { addBoats, rotateAxis };
