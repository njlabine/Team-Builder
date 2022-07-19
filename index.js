const inquirer = require("inquirer");
const fs = require("fs");
// const generateHTML = require("./src/cardTemplate");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Enginner");
const Intern = require("./lib/Intern");
const theMarkdown = require("./src/theMarkdown");
const team = [];

const manPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the Manager's name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter your ID number",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter your email address",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter your office number",
        name: "officeNumber",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      listOfPromp();
    });
};

const engPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the Engineers name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the Engineers ID number",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the Engineers email address",
        name: "email",
      },
      {
        type: "input",
        message: " Please enter the Engineers github username",
        name: "github",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      listOfPromp();
    });
};

const intPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the Intern's name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the Intern's ID number",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the Intern's email address",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the Intern's school",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      listOfPromp();
    });
};

const listOfPromp = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is next?",
        name: "options",
        choices: ["Add a new engineer", "Add a new intern", "Finish"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.options) {
        case "Add a new engineer":
          engPrompt();
          break;
        case "Add a new intern":
          intPrompt();
          break;
        default:
          endPrompt();
          break;
      }
    });
};

const endPrompt = () => {
  fs.writeFileSync("./dist/index.html", theMarkdown(team), "utf-8");
};

manPrompt();
