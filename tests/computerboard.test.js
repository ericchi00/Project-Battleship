/**
 * @jest-environment jsdom
 */
import { placeShipsRandomly } from "../src/computerboard";
import { Player } from "../src/player";

test("Check if all ships are placed randomly and do not overlap", () => {
  document.body.innerHTML =
    '<div class="computerBoard"><div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div><div class="box" row="0" col="2"></div><div class="box" row="0" col="3"></div><div class="box" row="0" col="4"></div><div class="box" row="0" col="5"></div><div class="box" row="0" col="6"></div><div class="box" row="0" col="7"></div><div class="box" row="0" col="8"></div><div class="box" row="0" col="9"></div><div class="box" row="1" col="0"></div><div class="box" row="1" col="1"></div><div class="box" row="1" col="2"></div><div class="box" row="1" col="3"></div><div class="box" row="1" col="4"></div><div class="box" row="1" col="5"></div><div class="box" row="1" col="6"></div><div class="box" row="1" col="7"></div><div class="box" row="1" col="8"></div><div class="box" row="1" col="9"></div><div class="box" row="2" col="0"></div><div class="box" row="2" col="1"></div><div class="box" row="2" col="2"></div><div class="box" row="2" col="3"></div><div class="box" row="2" col="4"></div><div class="box" row="2" col="5"></div><div class="box" row="2" col="6"></div><div class="box" row="2" col="7"></div><div class="box" row="2" col="8"></div><div class="box" row="2" col="9"></div><div class="box" row="3" col="0"></div><div class="box" row="3" col="1"></div><div class="box" row="3" col="2"></div><div class="box" row="3" col="3"></div><div class="box" row="3" col="4"></div><div class="box" row="3" col="5"></div><div class="box" row="3" col="6"></div><div class="box" row="3" col="7"></div><div class="box" row="3" col="8"></div><div class="box" row="3" col="9"></div><div class="box" row="4" col="0"></div><div class="box" row="4" col="1"></div><div class="box" row="4" col="2"></div><div class="box" row="4" col="3"></div><div class="box" row="4" col="4"></div><div class="box" row="4" col="5"></div><div class="box" row="4" col="6"></div><div class="box" row="4" col="7"></div><div class="box" row="4" col="8"></div><div class="box" row="4" col="9"></div><div class="box" row="5" col="0"></div><div class="box" row="5" col="1"></div><div class="box" row="5" col="2"></div><div class="box" row="5" col="3"></div><div class="box" row="5" col="4"></div><div class="box" row="5" col="5"></div><div class="box" row="5" col="6"></div><div class="box" row="5" col="7"></div><div class="box" row="5" col="8"></div><div class="box" row="5" col="9"></div><div class="box" row="6" col="0"></div><div class="box" row="6" col="1"></div><div class="box" row="6" col="2"></div><div class="box" row="6" col="3"></div><div class="box" row="6" col="4"></div><div class="box" row="6" col="5"></div><div class="box" row="6" col="6"></div><div class="box" row="6" col="7"></div><div class="box" row="6" col="8"></div><div class="box" row="6" col="9"></div><div class="box" row="7" col="0"></div><div class="box" row="7" col="1"></div><div class="box" row="7" col="2"></div><div class="box" row="7" col="3"></div><div class="box" row="7" col="4"></div><div class="box" row="7" col="5"></div><div class="box" row="7" col="6"></div><div class="box" row="7" col="7"></div><div class="box" row="7" col="8"></div><div class="box" row="7" col="9"></div><div class="box" row="8" col="0"></div><div class="box" row="8" col="1"></div><div class="box" row="8" col="2"></div><div class="box" row="8" col="3"></div><div class="box" row="8" col="4"></div><div class="box" row="8" col="5"></div><div class="box" row="8" col="6"></div><div class="box" row="8" col="7"></div><div class="box" row="8" col="8"></div><div class="box" row="8" col="9"></div><div class="box" row="9" col="0"></div><div class="box" row="9" col="1"></div><div class="box" row="9" col="2"></div><div class="box" row="9" col="3"></div><div class="box" row="9" col="4"></div><div class="box" row="9" col="5"></div><div class="box" row="9" col="6"></div><div class="box" row="9" col="7"></div><div class="box" row="9" col="8"></div><div class="box" row="9" col="9"></div></div>';
  const computer = new Player("computer");
  placeShipsRandomly(computer);
  const boxes = Array.from(document.querySelectorAll(".box"));
  let hitboxCount = 0;
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].hasAttribute("ship")) {
      hitboxCount += 1;
    }
  }

  expect(hitboxCount).toBe(17);
});
