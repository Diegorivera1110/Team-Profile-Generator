// connects to html template that will generate in the 'dist' folder
const htmlTemplate = require('./src/htmlTemplate');

const fs = require('fs');
const inquirer = require('inquirer');
// const Employee = require('./lib/');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const { off } = require('process');
const htmlGenerate = require('./src/htmlTemplate');

const teamArray = [];

// inquirer console questions
const createManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Name of the Team's Manager?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the Manager.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID #?",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the Manager ID #.");
                    return false;
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's email.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'officeNumber',
            message: "Please enter the Manager's office number.",
            validate: officeInput => {
                if (isNaN(officeInput)) {
                    console.log("Please enter the Manager's offfice number.");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(createManager => {
        const { name, id, email, officeNumber } = createManager;
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};


const createEmployee = () => {
    console.log(`Manager has been added, please answer the followinf for Employees...`);

    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please pick the role for Employee File.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter Employee's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Employee's ID #?",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the Employee ID #.");
                    return false;
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's email.")
                }
            }
        },
        

    ])
}

createManager()
    .then(teamArray => {
        return htmlGenerate(teamArray);
    });