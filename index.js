const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/cardTemplate");
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");

// const businessArray = [];

const manPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your name",
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
      promptList();
    });
};

const engPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your name",
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
        message: " Please enter your github username",
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
      promptList();
    });
};

const intPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your name",
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
        message: "Pleaes enter your school",
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
      promptList();
    });
};

const listOfPromp = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is next?",
        name: "options",
        choices: [
          "Add a new manager",
          "Add a new engineer",
          "Add a new intern",
          "Finish",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.options) {
        case "Add a manager":
          manPrompt();
          break;
        case "Add an engineer":
          engPrompt();
          break;
        case "Add an intern":
          intPrompt();
          break;
        case "Finish":
          endPrompt();
          break;
      }
    });
};

const endPrompt = () => {
  fs.writeFileSync("index.html", generateMarkdown(team), "utf-8");
};

listOfPromp();
