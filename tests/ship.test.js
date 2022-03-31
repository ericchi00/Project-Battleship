import Ship from "../src/ship";

test("Dynamically create array based on input", () => {
  const newShip = new Ship("test", 5);
  expect(newShip.size.length).toBe(5);
});

test("Check contents of dynamically created array", () => {
  const newShip = new Ship("test", 4);
  expect(newShip.size).toStrictEqual([0, 1, 2, 3]);
});

test("Check contents of dynamically created array", () => {
  const newShip = new Ship("test", 2);
  expect(newShip.size).toStrictEqual([0, 1]);
});

test("check hit function", () => {
  const newShip = new Ship("test", 4);
  newShip.hit(4);
  expect(newShip.size[4]).toBe(null);
});

test("check sunk function", () => {
  const newShip = new Ship("test", 2);
  newShip.hit(0);
  newShip.hit(1);
  expect(newShip.isSunk()).toBe(true);
});
