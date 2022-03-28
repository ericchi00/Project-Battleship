import Ship from "./ship";

test("Dynamically create array based on input", () => {
  const newShip = new Ship(5);
  expect(newShip.size.length).toBe(5);
});

test("Check contents of dynamically created array", () => {
  const newShip = new Ship(4);
  expect(newShip.size).toStrictEqual([0, 1, 2, 3]);
});

test("check hit function", () => {
  const newShip = new Ship(4);
  newShip.hit(4);
  expect(newShip.size[4]).toBe(null);
});

test.only("check sunk function", () => {
  const newShip = new Ship(2);
  newShip.hit(0);
  newShip.hit(1);
  expect(newShip.isSunk()).toBe(true);
});