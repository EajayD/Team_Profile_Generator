const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array for employees
const employees = [];

// manager questions will be initial questions
let managerQuestions = [
    {
        type: 'input',
        message: 'Please enter the name of a manager',
        name: 'name'
    },

    {
        type: 'input',
        message: 'Please enter an ID number',
        name: 'id'
    },

    {
        type: 'input',
        message: 'Please enter an email address',
        name: 'email'
    },

    {
        type: 'input',
        message: 'Please enter an Office number',
        name: 'officeNumber'
    }
]

// init will initialize program, will run init after I write everything
function init() {
    inquirer.prompt(managerQuestions)
        .then(answers => {
            let {name, id, email, officeNumber} = answers
            const person = new Manager(name, id, email, officeNumber)
            employees.push(person)
            addEmployee();
        })
        .catch(error => {
            console.log('error', error)
        });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Do you want to add an Engineer or an Intern?',
            choices: ['Engineer', 'Intern', 'No'],
            name: 'role'
        }
    ])
    .then(answer => {
        let {role} = answer;
        if (role === 'Engineer') {
            engineerQuestions();
        }
        else if (role === 'Intern') {
            internQuestions();
        }
        else {
            createHtml();
        }
    })
}

init();