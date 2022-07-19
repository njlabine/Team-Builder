const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/cardTemplate");
const Employee = require("./classes/employee");
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");

const businessArray = [];

const addNewEmployee = () => {
  console.log(`Add a new employee`);

  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "what is the employee's role?",
      choices: ["Intern", "Engineer"],
    },
    {},
  ]);
};
