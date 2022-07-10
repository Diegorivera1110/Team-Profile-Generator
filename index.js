// connects to html template that will generate in the 'dist' folder
const htmlGenerate = require("./src/htmlGenerate");

// const Employee = require('./lib/');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const { off } = require('process');

const fs = require("fs");
// const path = require("path");
const inquirer = require("inquirer");

const teamArray = [];

// inquirer console questions
const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name of the Team's Manager? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the name of the Manager.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's ID #? (Required)",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("Please enter the Manager ID #.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email? (Required)",
        validate: (emailInput) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            emailInput
          );
          if (valid) {
            return true;
          } else {
            console.log("Please enter a vlaid Email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the Manager's office number. (Required)",
        validate: (officeInput) => {
          if (isNaN(officeInput)) {
            console.log("Please enter the Manager's offfice number.");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((createManager) => {
      const { name, id, email, officeNumber } = createManager;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      console.log(manager);
    });
};

const createEmployee = () => {
  console.log(
    `Manager has been added, please answer the followinf for Employees...`
  );

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please pick the role for Employee File.",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter Employee's name. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Employee's ID #? (Required)",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("Please enter the Employee ID #.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the Employee's email? (Required)",
        validate: (emailInput) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            emailInput
          );
          if (valid) {
            return true;
          } else {
            console.log("Please enter a vlaid Email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter the Engineer's GitHub Username.",
        when: (answer) => answer.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a GitHub Username.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter the School of the Intern",
        when: (answer) => answer.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the Intern's School.");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "employeeConfirmation",
        message: "Would you like to add another Employee?",
        default: false,
      },
    ])
    .then((employeeInput) => {
      let { name, id, email, role, school, github, employeeConfirmation } =
        employeeInput;
      let employee;
      
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } 

      else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      teamArray.push(employee);

      if (employeeConfirmation) {
        return createEmployee(teamArray);
      }
       else {
        return teamArray;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been successfully generated.");
    }
  });
};

createManager()
  .then(createEmployee)
  .then(teamArray => {
    return htmlGenerate(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });
