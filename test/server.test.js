let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("Aplication in port 3000", () => {
  return request.get("/").then((res) => {
    expect(res.statusCode).toEqual(200);
  });
});

test("Favorite Color", () => {
  return request.get("/color/diego").then((res) => {
    //multiplas expectativas no mesmo teste
    expect(res.statusCode).toEqual(200);
    expect(res.bory.color).toEqual("blue");
  });
});
