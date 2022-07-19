const Manager = require("../library/Manager");
const theManger = new Manager("Nate", "614", "nate@email.com", "10");

test("Get all of the info", () => {
  expect(theManger.name).toEqual("Nate");
  expect(theManger.id).toEqual("614");
  expect(theManger.email).toEqual("nate@email.com");
  expect(theManger.officeNumber).toEqual("1");
});

test("Get the Name", () => {
  expect(theManager.name).toEqual("Nate");
});

test("Get the ID", () => {
  expect(theManger.id).toEqual("614");
});

test("Get the Email", () => {
  expect(theManager.email).toEqual("nate@email.com");
});

test("Get the Office Number", () => {
  expect(theManger.officeNumber).toEqual("1");
});

test("Get the Role", () => {
  expect(theManger.getRole()).toEqual("Manager");
});
