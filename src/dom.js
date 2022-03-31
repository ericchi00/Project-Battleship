function createPlayerBoard() {
  const container = document.querySelector(".playerBoard");
  for (let i = 0; i < 100; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
}

function createComputerBoard() {
  const container = document.querySelector(".computerBoard");
  for (let i = 0; i < 100; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
}

function addCoordsToGrid() {
  const boxes = document.querySelectorAll(".box");
  const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let num = 0;
  let index = 0;
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].setAttribute("row", row[index]);
    boxes[i].setAttribute("col", num);
    num += 1;
    if (num === 10) {
      num = 0;
      index += 1;
    }
  }
}

export { createComputerBoard, createPlayerBoard, addCoordsToGrid };
