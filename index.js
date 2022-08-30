const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generateHTML');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const employeeArray = [];

const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                return true;
            } else {
                console.log("Please enter manager's name!");
            }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter manager's id!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's office number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        
        employeeArray.push(manager);

        addEmployee();
    })

};

const addEmployee = function () {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Which type of employee would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    )
    .then(( {newEmployee }) => {
        if (newEmployee === 'Engineer') {
            createEngineer();
        } else if (newEmployee === 'Intern') {
            createIntern();
        } else {
            generatePage(employeeArray);
        }
    })
}

const createEngineer = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                return true;
            } else {
                console.log("Please enter engineer's name!");
            }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's id!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's GitHub username!");
                    return false;
                }
            }
        }
    ])
    .then(employeeInput => {
        const { name, id, email, github } = employeeInput;
        const engineer = new Engineer (name, id, email, github);
        
        employeeArray.push(engineer);

        addEmployee();
    })

};

const createIntern = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?",
            validate: nameInput => {
                if (nameInput) {
                return true;
            } else {
                console.log("Please enter intern's name!");
            }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter intern's id!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter intern's email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter intern's school!");
                    return false;
                }
            }
        }
    ])
    .then(employeeInput => {
        const { name, id, email, school } = employeeInput;
        const intern = new Intern (name, id, email, school);
        
        employeeArray.push(intern);

        addEmployee();
    })
}

console.log('Please build your team');
createManager()
