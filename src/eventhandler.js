function containsShip(ship) {
  const boxes = document.querySelector(".playerBoard").querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].getAttribute("ship") === ship.name) return true;
  }
  return false;
}

// once noTouch is added, cursor changes to normal on player.board
function changeCursor() {
  const boxes = Array.from(document.querySelectorAll(".box"));
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].classList.add("setup");
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

// lets player attack on Computer Board
function takeTurns(player, computer) {
  const computerBoard = document.querySelector(".computerBoard");
  const instructions = document.querySelector(".instructions");
  const win = document.createElement("p");
  computerBoard.addEventListener("click", function listener(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    // check if player's ships are all sunk for computer win
    if (player.board.allSunk()) {
      while (instructions.firstChild) {
        instructions.removeChild(instructions.lastChild);
      }
      win.textContent = "Computer wins!";
      instructions.appendChild(win);
      computerBoard.removeEventListener("click", listener);
      return;
    }
    // if receiveAttack returns false, it's already been hit
    if (!computer.board.receiveAttack(row, col)) return;
    // check if computer is attacking the same coords again
    let computerAttack = computer.randomAttack();
    while (!player.board.receiveAttack(computerAttack[0], computerAttack[1])) {
      // keeps rerolling computerAttack until it hits (true), then checks for win, if not it cancels the loop
      computerAttack = computer.randomAttack();
      // checks if computer wins
      if (computer.board.allSunk()) {
        while (instructions.firstChild) {
          instructions.removeChild(instructions.lastChild);
        }
        win.textContent = "You win!";
        instructions.appendChild(win);
        computerBoard.removeEventListener("click", listener);
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
  board.addEventListener("click", function listener(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    if (containsShip(player.board.carrier)) {
      if (containsShip(player.board.battleship)) {
        if (containsShip(player.board.destroyer)) {
          if (containsShip(player.board.submarine)) {
            if (
              player.board.placeShips(row, col, player.board.patrolboat, axis)
            ) {
              // removes ability to add more boats, changes cursor, and lets you click on computer board
              board.removeEventListener("click", listener);
              changeCursor();
              takeTurns(player, computer);
            }
          }
          player.board.placeShips(row, col, player.board.submarine, axis);
        }
        player.board.placeShips(row, col, player.board.destroyer, axis);
      }
      player.board.placeShips(row, col, player.board.battleship, axis);
    }
    player.board.placeShips(row, col, player.board.carrier, axis);
  });
}

export { addBoats, rotateAxis };
