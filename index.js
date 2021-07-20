const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHTML');
const managerCard = require('./src/managerCard');
const engineerCard = require('./src/engineerCard');
const internCard = require('./src/internCard');
const endHtml = require('./src/endHTML');

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
            let person = new Manager(name, id, email, officeNumber)
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
            addEngineer();
        }
        else if (role === 'Intern') {
            addIntern();
        }
        else {
            createHtml();
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'name'
        },

        {
            type: 'input',
            message: 'Please enter an ID number',
            name: 'id'
        },

        {
            type: 'input',
            message: 'What is their email',
            name: 'email'
        },

        {
            type: 'input',
            message: 'What is their Github username?',
            name: 'github'
        },

        {
            type: 'list',
            message: 'Do you want to add more employees?',
            choices: ['Yes', 'No'],
            name: 'add'
        }
    ])
    .then(answers => {
        let {name, id, email, github, add} = answers;
        let person = new Engineer(name, id, email, github);
        employees.push(person);
        if (add === 'Yes'){
            addEmployee()
        }
        else {
            createHtml();
        }
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: ' What is the name of the intern?',
            name: 'name'
        },

        {
            type: 'input',
            message: 'Please enter an ID number',
            name: 'id'
        },

        {
            type: 'input',
            message: 'What is the email of the intern?',
            name: 'email'
        },

        {
            type: 'input',
            message: 'What school are/did they go to?',
            name: 'school'
        },

        {
            type: 'list',
            message: 'Do you want to add more employees?',
            choices: ['Yes', 'No'],
            name: 'add'
        }
    ])
    .then(answers => {
        let {name, id, email, school, add} = answers;
        let person = new Intern(name, id, email, school);
        employees.push(person);
        if (add === "Yes"){
            addEmployee();
        }
        else {
            createHtml();
        }
    })
}

function createHtml() {
    fs.writeFileSync('./dist/index.html', generateHtml, (err) => { //generate top part of HTML
        if(err) console.log('error', err)
    })
    for(let i = 0; i <employees.length; i++){
        let role = employees[i].getRole()
        if (role === 'Manager'){ // append Manager card
            const {name, id, email, officeNumber} = employees[i];
            fs.appendFileSync('./dist/index.html', managerCard(name, role, id, email, officeNumber), (err) => {
                if(err) console.log('error', error)
            })
        }
        if (role === 'Engineer'){ // append Engineer card
            const {name, id, email, github} = employees[i];
            fs.appendFileSync('./dist/index.html', engineerCard(name, role, id, email, github), (err) => {
                if(err) console.log('error', error)
            })
        }
        if (role === 'Intern'){ // append Intern card
            const {name, id, email, school} = employees[i];
            fs.appendFileSync('./dist/index.html', internCard(name, role, id, email, school), (err) => {
                if(err) console.log('error', error)
            })
        }
    }
    fs.appendFileSync('./dist/index.html', endHtml, (err) => { // close out HTML cause I wasn't sure how to appened to a template literal with multiple parts so I did it the long way in parts
        err ? console.error(err) : console.log('Check the index.html in the /dist/ folder!');
    })
}

init();