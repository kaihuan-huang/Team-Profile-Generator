
//npm require inquirer
const fs = require('fs');
const inquirer = require('inquirer');
//require 3 classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//will generate to this page
const generateHtml = require('./src/generateHtml');

//an empty array for team member
const teamMember = [];

// Create an array of questions for Manager's input
function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'ManagerId',
            message: "What is the manager's employee ID number?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's Email?",
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the manager's Office Number?",
        },

    ]).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)
        teamMember.push(manager);
        createTeam()
    });
}



// Create an array of questions for Engineer's input
function promptEngineer() {
    console.log('promptEngineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'ManagerId',
            message: "What is the engineer's employee ID number?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the engineer's Email?",
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github?",
        },

    ]).then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        teamMember.push(engineer);
        createTeam()
    });
}

// Create an array of questions for Engineer's input
function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's employee ID number?",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's Email?",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school?",
        },

    ]).then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
        teamMember.push(intern);
        createTeam()
    });
}

//create an oop createTeam()function 
function createTeam() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamType',
            message: "Which job title would you like you add to your team?",
            choices: ["Manager", "Engineer", "Intern", "None"]
        },
    ]).then(function (userInput) {
        console.log(userInput);
        switch (userInput.teamType) {
            case 'Manager': return promptManager();
            case 'Engineer': return promptEngineer();
            case 'Intern': return promptIntern();
            default: return teamMember;
        }
    })

}



//Create a function to initialize app, using writeFileSync as a promise
const init = () => {
    console.log('init');
    createTeam()
        .then((data) => fs.writeFileSync('generateHtml', generateHtml(data)))
        .then(() => console.log('Sucessfully wrote generateHtml.'))
        .catch((err) => console.log(err));
};


// Function call to initialize app

init();



