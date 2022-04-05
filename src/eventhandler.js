function containsShip(ship) {
  const boxes = document.querySelector(".playerBoard").querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].getAttribute("ship") === ship.name) return true;
  }
  return false;
}

// once setup is added, cursor changes to normal on player.board
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
  current.setAttribute("axis", "x");
  button.addEventListener("click", () => {
    if (axis === "x") {
      button.textContent = "Change to X";
      axis = "y";
      current.textContent = "Current Axis: Y";
      current.setAttribute("axis", "y");
    } else if (axis === "y") {
      button.textContent = "Change to Y";
      axis = "x";
      current.textContent = "Current Axis: X";
      current.setAttribute("axis", "x");
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
      // keeps rerolling computerAttack until it hits (true), then checks for win
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
        // cancels while loop once a valid legal attack is made
        return;
      }
    }
  });
}

// logic for displaying the current ship on the playerboard
function mouseHoverEffect(player) {
  const board = document.querySelector(".playerBoard");
  board.addEventListener("mouseover", function listener(e) {
    const XorY = document.querySelector(".currentAxis").getAttribute("axis");
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    const boxes = board.querySelectorAll(".box");
    // removes the color class to reset it every time you hover over a new box
    for (let i = 0; i < boxes.length; i += 1) {
      if (boxes[i].classList.contains("color"))
        boxes[i].classList.remove("color");
    }
    if (XorY === "x") {
      if (containsShip(player.board.patrolboat))
        // remove mouseHoverEffects
        board.removeEventListener("mouseover", listener);
      else if (containsShip(player.board.submarine) && col <= 8) {
        // place patrol boat
        for (let i = 0; i < player.board.patrolboat.length; i += 1) {
          document
            .querySelector(`[row="${row}"][col="${col + i}"]`)
            .classList.add("color");
        }
      } else if (containsShip(player.board.destroyer) && col <= 7) {
        // place submarine
        for (let i = 0; i < player.board.submarine.length; i += 1) {
          document
            .querySelector(`[row="${row}"][col="${col + i}"]`)
            .classList.add("color");
        }
      } else if (containsShip(player.board.battleship) && col <= 7) {
        // place destroyer
        for (let i = 0; i < player.board.destroyer.length; i += 1) {
          document
            .querySelector(`[row="${row}"][col="${col + i}"]`)
            .classList.add("color");
        }
      } else if (containsShip(player.board.carrier) && col <= 6) {
        // place battleship
        for (let i = 0; i < player.board.battleship.length; i += 1) {
          document
            .querySelector(`[row="${row}"][col="${col + i}"]`)
            .classList.add("color");
        }
      } else if (col <= 5) {
        // place carrier
        for (let i = 0; i < player.board.carrier.length; i += 1) {
          document
            .querySelector(`[row="${row}"][col="${col + i}"]`)
            .classList.add("color");
        }
      }
    }
    if (XorY === "y") {
      if (containsShip(player.board.patrolboat))
        // remove mouseHoverEffects
        board.removeEventListener("mouseover", listener);
      else if (containsShip(player.board.submarine) && row <= 8) {
        // place patrol boat
        for (let i = 0; i < player.board.patrolboat.length; i += 1) {
          document
            .querySelector(`[row="${row + i}"][col="${col}"]`)
            .classList.add("color");
        }
      } else if (containsShip(player.board.destroyer) && row <= 7) {
        // place submarine
        for (let i = 0; i < player.board.submarine.length; i += 1) {
          document
            .querySelector(`[row="${row + i}"][col="${col}"]`)
            .classList.add("color");
        }
      } else if (containsShip(player.board.battleship) && row <= 7) {
        // place destroyer
        for (let i = 0; i < player.board.destroyer.length; i += 1) {
          document
            .querySelector(`[row="${row + i}"][col="${col}"]`)
            .classList.add("color");
        }
      } else if (containsShip(player.board.carrier) && row <= 6) {
        // place battleship
        for (let i = 0; i < player.board.battleship.length; i += 1) {
          document
            .querySelector(`[row="${row + i}"][col="${col}"]`)
            .classList.add("color");
        }
      } else if (row <= 5) {
        // place carrier
        for (let i = 0; i < player.board.carrier.length; i += 1) {
          document
            .querySelector(`[row="${row + i}"][col="${col}"]`)
            .classList.add("color");
        }
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

    if (containsShip(player.board.submarine)) {
      if (player.board.placeShips(row, col, player.board.patrolboat, axis)) {
        // removes ability to add more boats
        board.removeEventListener("click", listener);
        changeCursor("setup");
        takeTurns(player, computer);
        instructions.style.visibility = "hidden";
      }
    } else if (containsShip(player.board.destroyer)) {
      if (player.board.placeShips(row, col, player.board.submarine, axis)) {
        spaces.lastElementChild.remove();
        placeShip.textContent =
          "Place Patrolboat (2 boxes) by clicking on player board.";
      }
    } else if (containsShip(player.board.battleship)) {
      if (player.board.placeShips(row, col, player.board.destroyer, axis)) {
        placeShip.textContent =
          "Place Submarine (3 boxes) by clicking on player board.";
      }
    } else if (containsShip(player.board.carrier)) {
      if (player.board.placeShips(row, col, player.board.battleship, axis)) {
        spaces.lastElementChild.remove();
        placeShip.textContent =
          "Place Destroyer (4 boxes) by clicking on player board.";
      }
    }
    if (player.board.placeShips(row, col, player.board.carrier, axis)) {
      spaces.lastElementChild.remove();
      placeShip.textContent =
        "Place Battleship (4 boxes) by clicking on player board.";
    }
  });
}

export { addBoats, rotateAxis, mouseHoverEffect };
