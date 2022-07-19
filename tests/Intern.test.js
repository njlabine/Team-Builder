const Intern = require("../library/Intern");
const theIntern = new Intern("Nate", "614", "nate@email.com", "Harvard");

test("Get all of the info", () => {
  expect(theIntern.name).toEqual("Nate");
  expect(theIntern.id).toEqual("614");
  expect(theIntern.email).toEqual("nate@email.com");
  expect(theIntern.school).toEqual("Harvard");
});

test("Get the Name", () => {
  expect(theIntern.name).toEqual("Nate");
});

test("Get the ID", () => {
  expect(theIntern.id).toEqual("614");
});

test("Get the Email", () => {
  expect(theIntern.email).toEqual("nate@email.com");
});

test("Get the School", () => {
  expect(theIntern.school).toEqual("Harvard");
});

test("Get the Role", () => {
  expect(theIntern.getRole()).toEqual("Intern");
});
