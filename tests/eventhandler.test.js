/**
 * @jest-environment jsdom
 */
import { addBoats } from "../src/eventhandler";
import Player from "../src/player";

// had to put contents of addBoats function as using variable board bricks it
test("Check if addBoat function adds eventListener", () => {
  document.body.innerHTML =
    '<div class="playerBoard"><div class="box" row="0" col="0"></div><div class="box" row="0" col="1"></div><div class="box" row="0" col="2"></div><div class="box" row="0" col="3"></div><div class="box" row="0" col="4"></div><div class="box" row="0" col="5"></div><div class="box" row="0" col="6"></div><div class="box" row="0" col="7"></div><div class="box" row="0" col="8"></div><div class="box" row="0" col="9"></div><div class="box" row="1" col="0"></div><div class="box" row="1" col="1"></div><div class="box" row="1" col="2"></div><div class="box" row="1" col="3"></div><div class="box" row="1" col="4"></div><div class="box" row="1" col="5"></div><div class="box" row="1" col="6"></div><div class="box" row="1" col="7"></div><div class="box" row="1" col="8"></div><div class="box" row="1" col="9"></div><div class="box" row="2" col="0"></div><div class="box" row="2" col="1"></div><div class="box" row="2" col="2"></div><div class="box" row="2" col="3"></div><div class="box" row="2" col="4"></div><div class="box" row="2" col="5"></div><div class="box" row="2" col="6"></div><div class="box" row="2" col="7"></div><div class="box" row="2" col="8"></div><div class="box" row="2" col="9"></div><div class="box" row="3" col="0"></div><div class="box" row="3" col="1"></div><div class="box" row="3" col="2"></div><div class="box" row="3" col="3"></div><div class="box" row="3" col="4"></div><div class="box" row="3" col="5"></div><div class="box" row="3" col="6"></div><div class="box" row="3" col="7"></div><div class="box" row="3" col="8"></div><div class="box" row="3" col="9"></div><div class="box" row="4" col="0"></div><div class="box" row="4" col="1"></div><div class="box" row="4" col="2"></div><div class="box" row="4" col="3"></div><div class="box" row="4" col="4"></div><div class="box" row="4" col="5"></div><div class="box" row="4" col="6"></div><div class="box" row="4" col="7"></div><div class="box" row="4" col="8"></div><div class="box" row="4" col="9"></div><div class="box" row="5" col="0"></div><div class="box" row="5" col="1"></div><div class="box" row="5" col="2"></div><div class="box" row="5" col="3"></div><div class="box" row="5" col="4"></div><div class="box" row="5" col="5"></div><div class="box" row="5" col="6"></div><div class="box" row="5" col="7"></div><div class="box" row="5" col="8"></div><div class="box" row="5" col="9"></div><div class="box" row="6" col="0"></div><div class="box" row="6" col="1"></div><div class="box" row="6" col="2"></div><div class="box" row="6" col="3"></div><div class="box" row="6" col="4"></div><div class="box" row="6" col="5"></div><div class="box" row="6" col="6"></div><div class="box" row="6" col="7"></div><div class="box" row="6" col="8"></div><div class="box" row="6" col="9"></div><div class="box" row="7" col="0"></div><div class="box" row="7" col="1"></div><div class="box" row="7" col="2"></div><div class="box" row="7" col="3"></div><div class="box" row="7" col="4"></div><div class="box" row="7" col="5"></div><div class="box" row="7" col="6"></div><div class="box" row="7" col="7"></div><div class="box" row="7" col="8"></div><div class="box" row="7" col="9"></div><div class="box" row="8" col="0"></div><div class="box" row="8" col="1"></div><div class="box" row="8" col="2"></div><div class="box" row="8" col="3"></div><div class="box" row="8" col="4"></div><div class="box" row="8" col="5"></div><div class="box" row="8" col="6"></div><div class="box" row="8" col="7"></div><div class="box" row="8" col="8"></div><div class="box" row="8" col="9"></div><div class="box" row="9" col="0"></div><div class="box" row="9" col="1"></div><div class="box" row="9" col="2"></div><div class="box" row="9" col="3"></div><div class="box" row="9" col="4"></div><div class="box" row="9" col="5"></div><div class="box" row="9" col="6"></div><div class="box" row="9" col="7"></div><div class="box" row="9" col="8"></div><div class="box" row="9" col="9"></div></div>';

  const player = new Player("player");
  addBoats(player);

  const box1 = document.querySelector('[row="0"][col="0"]');
  const box2 = document.querySelector('[row="1"][col="0"]');
  const box3 = document.querySelector('[row="2"][col="0"]');
  const box4 = document.querySelector('[row="3"][col="0"]');
  const box5 = document.querySelector('[row="4"][col="0"]');

  const addEvent = new Event("click", { bubbles: true });
  const addEvent1 = new Event("click", { bubbles: true });
  const addEvent2 = new Event("click", { bubbles: true });
  const addEvent3 = new Event("click", { bubbles: true });
  const addEvent4 = new Event("click", { bubbles: true });

  box1.dispatchEvent(addEvent);
  box2.dispatchEvent(addEvent1);
  box3.dispatchEvent(addEvent2);
  box4.dispatchEvent(addEvent3);
  box5.dispatchEvent(addEvent4);

  function checkAllShips() {
    const boxes = Array.from(document.querySelectorAll(".box"));
    let hitboxCount = 0;
    for (let i = 0; i < boxes.length; i += 1) {
      if (boxes[i].hasAttribute("ship")) {
        hitboxCount += 1;
      }
    }
    if (hitboxCount === 17) return true;
    console.log(hitboxCount);
    return false;
  }

  expect(checkAllShips()).toBe(true);
});
