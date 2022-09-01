
//npm require inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//require 3 classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//will generate to this page
const generateHtml = require('./src/generateHtml');

//Path method
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

//an empty array for team member
const teamMember = [];

// Create an array of questions for Manager's input
function promptManager() {
    console.log(`
    =================
    Adding Manager!
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'managerId',
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

//create an oop createTeam()function 
function createTeam() {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamType',
            message: "Which job title would you like you add to your team?",
            choices: ["Engineer", "Intern", "Finish"]
        },
    ]).then(function (userInput) {
        console.log(userInput);
        switch (userInput.teamType) {
            case 'Engineer': return promptEngineer();
            case 'Intern': return promptIntern();
            default: return builtTeam();
        }
    })

    // Create an array of questions for Engineer's input
    function promptEngineer() {
        console.log(`
        =================
        Adding Engineer!
        =================
        `);
        // console.log('promptEngineer');
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's employee ID number?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
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
        console.log(`
        =================
        Adding Intern!
        =================
        `);
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
    
}

function builtTeam() {
    console.log(`
    =================
    Finished building my team!
    =================
    `);
    //Create the output directory if the output path doesn't exist 
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateHtml(teamMember),"utf-8");
}

promptManager()









