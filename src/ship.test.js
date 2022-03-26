import Ship from "./ship";

test("Dynamically create array based on input", () => {
  const newShip = new Ship(5, 0, false);
  expect(newShip.size.length).toBe(5);
});

test("Check contents of dynamically created array", () => {
  const newShip = new Ship(5, 0, false);
  expect(newShip.size).toStrictEqual([0, 1, 2, 3, 4]);
});
