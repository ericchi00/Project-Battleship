/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

// had to put contents of addBoats function as using variable board bricks it
test("Check if addBoat function adds eventListener", () => {
  document.body.innerHTML =
    '<div class="playerBoard"><div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div><div class="box" row="0" col="2"></div><div class="box" row="0" col="3"></div><div class="box" row="0" col="4"></div><div class="box" row="0" col="5"></div><div class="box" row="0" col="6"></div><div class="box" row="0" col="7"></div><div class="box" row="0" col="8"></div><div class="box" row="0" col="9"></div><div class="box" row="1" col="0"></div><div class="box" row="1" col="1"></div><div class="box" row="1" col="2"></div><div class="box" row="1" col="3"></div><div class="box" row="1" col="4"></div><div class="box" row="1" col="5"></div><div class="box" row="1" col="6"></div><div class="box" row="1" col="7"></div><div class="box" row="1" col="8"></div><div class="box" row="1" col="9"></div><div class="box" row="2" col="0"></div><div class="box" row="2" col="1"></div><div class="box" row="2" col="2"></div><div class="box" row="2" col="3"></div><div class="box" row="2" col="4"></div><div class="box" row="2" col="5"></div><div class="box" row="2" col="6"></div><div class="box" row="2" col="7"></div><div class="box" row="2" col="8"></div><div class="box" row="2" col="9"></div><div class="box" row="3" col="0"></div><div class="box" row="3" col="1"></div><div class="box" row="3" col="2"></div><div class="box" row="3" col="3"></div><div class="box" row="3" col="4"></div><div class="box" row="3" col="5"></div><div class="box" row="3" col="6"></div><div class="box" row="3" col="7"></div><div class="box" row="3" col="8"></div><div class="box" row="3" col="9"></div><div class="box" row="4" col="0"></div><div class="box" row="4" col="1"></div><div class="box" row="4" col="2"></div><div class="box" row="4" col="3"></div><div class="box" row="4" col="4"></div><div class="box" row="4" col="5"></div><div class="box" row="4" col="6"></div><div class="box" row="4" col="7"></div><div class="box" row="4" col="8"></div><div class="box" row="4" col="9"></div><div class="box" row="5" col="0"></div><div class="box" row="5" col="1"></div><div class="box" row="5" col="2"></div><div class="box" row="5" col="3"></div><div class="box" row="5" col="4"></div><div class="box" row="5" col="5"></div><div class="box" row="5" col="6"></div><div class="box" row="5" col="7"></div><div class="box" row="5" col="8"></div><div class="box" row="5" col="9"></div><div class="box" row="6" col="0"></div><div class="box" row="6" col="1"></div><div class="box" row="6" col="2"></div><div class="box" row="6" col="3"></div><div class="box" row="6" col="4"></div><div class="box" row="6" col="5"></div><div class="box" row="6" col="6"></div><div class="box" row="6" col="7"></div><div class="box" row="6" col="8"></div><div class="box" row="6" col="9"></div><div class="box" row="7" col="0"></div><div class="box" row="7" col="1"></div><div class="box" row="7" col="2"></div><div class="box" row="7" col="3"></div><div class="box" row="7" col="4"></div><div class="box" row="7" col="5"></div><div class="box" row="7" col="6"></div><div class="box" row="7" col="7"></div><div class="box" row="7" col="8"></div><div class="box" row="7" col="9"></div><div class="box" row="8" col="0"></div><div class="box" row="8" col="1"></div><div class="box" row="8" col="2"></div><div class="box" row="8" col="3"></div><div class="box" row="8" col="4"></div><div class="box" row="8" col="5"></div><div class="box" row="8" col="6"></div><div class="box" row="8" col="7"></div><div class="box" row="8" col="8"></div><div class="box" row="8" col="9"></div><div class="box" row="9" col="0"></div><div class="box" row="9" col="1"></div><div class="box" row="9" col="2"></div><div class="box" row="9" col="3"></div><div class="box" row="9" col="4"></div><div class="box" row="9" col="5"></div><div class="box" row="9" col="6"></div><div class="box" row="9" col="7"></div><div class="box" row="9" col="8"></div><div class="box" row="9" col="9"></div></div>';
  const board = document.querySelector(".playerBoard");
  board.addEventListener("click", function handler(e) {
    const row = Number(e.target.getAttribute("row"));
    const col = Number(e.target.getAttribute("col"));
    playerBoard.placeShips(row, col, playerBoard.carrier, "x");
    if (
      board
        .querySelector(`[row="${row}"][col="${col}"]`)
        .getAttribute("ship") === "carrier"
    ) {
      board.removeEventListener("click", handler);
      addBattlesship();
    }
  });

  const addEvent = new Event("click");
  document.dispatchEvent(addEvent);

  function test() {
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i <= boxes.length; i += 1) {
      if (boxes[i].hasAttribute("ship") !== null) return true;
    }
    return false;
  }

  expect(test()).toBe(true);
});
