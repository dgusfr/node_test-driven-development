let app = require("./calculator");

describe("Basics operations", () => {
  it("should return 10 in 5 + 5", () => {
    let result = app.sum(5, 5);
    expect(result).toEqual(10);
  });

  test("should return 10 in 2 * 5", () => {
    let result = app.multiply(2, 5);
    expect(result).toEqual(10);
  });
});
