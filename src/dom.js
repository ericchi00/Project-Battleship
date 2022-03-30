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

export { createComputerBoard, createPlayerBoard };
