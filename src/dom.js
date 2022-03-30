function createPlayerBoard() {
  const container = document.querySelector(".playerBoard");
  for (let i = 0; i < 100; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
}

function createComputerBoard() {
  const container = document.querySelector(".computerBoard");
  for (let i = 0; i < 100; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
}

function addCoords() {
  const boxes = document.querySelectorAll(".box");
  const letter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
  ];
  let num = 0;
  let index = 0;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].setAttribute("letter", letter[index]);
    boxes[i].setAttribute("num", num);
    num += 1;
    if (num === 10) {
      num = 0;
      index += 1;
    }
  }
}

export { createComputerBoard, createPlayerBoard, addCoords };
