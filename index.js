// connects to html template that will generate in the 'dist' folder
const htmlTemplate = require('./src/htmlTemplate');

const fs = require('fs');
const inquirer = require('inquirer');
// const Employee = require('./lib/');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { off } = require('process');

const teamArray = [];

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
}