const Employee = require("../lib/Employee");
const theEmployee = new Employee("Nate", "614", "nate@email.com");

test("Get all of the info", () => {
  expect(theEmployee.name).toEqual("Nate");
  expect(theEmployee.id).toEqual("614");
  expect(theEmployee.email).toEqual("nate@email.com");
});

test("Get the Name", () => {
  expect(theEmployee.name).toEqual("Nate");
});

test("Get the ID", () => {
  expect(theEmployee.id).toEqual("614");
});

test("Get the Email", () => {
  expect(theEmployee.email).toEqual("nate@email.com");
});

test("Get the Role", () => {
  expect(theEmployee.getRole()).toEqual("Employee");
});
