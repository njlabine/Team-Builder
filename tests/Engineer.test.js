const Engineer = require("../library/Enginner");
const theEngineer = new Engineer(
  "Nate",
  "614",
  "nate@email.com",
  "github.com/njlabine"
);

test("Get all of the info", () => {
  expect(theEngineer.name).toEqual("Nate");
  expect(theEngineer.id).toEqual("614");
  expect(theEngineer.email).toEqual("nate@email.com");
  expect(theEngineer.github).toEqual("github.com/njlaibne");
});

test("Get the Name", () => {
  expect(theEngineer.name).toEqual("Nate");
});

test("Get the ID", () => {
  expect(theEngineer.id).toEqual("614");
});

test("Get the Email", () => {
  expect(theEngineer.email).toEqual("nate@email.com");
});

test("Get the Github", () => {
  expect(theEngineer.getGithub).toEqual("github.com/njlabine");
});

test("Get the Role", () => {
  expect(theEngineer.getRole()).toEqual("Engineer");
});
