const Employee = require("../lib/Employee")

//Manager card
const generateManager = manager => {
    return `
    <div class="card">
            <div class="card-header">
                <h3>${manager.getName()}</h3>
                <h4>Job Title</h4>
            </div>
            <div class="card-body">
                    <p>ID: ${manager.getId()}</p>
                    <p>Email: <a href="mailto:">${manager.getEamil()}</a></p>
                    <p>Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    `
}

//Engineer card
const generateEngineer = engineer => {
    return `
     <div class="card">
            <div class="card-header">
                <h3>${engineer.getName()}</h3>
                <h4>Job Title</h4>
            </div>
            <div class="card-body">
                    <p>ID: ${engineer.getId()}</p>
                    <p>Email: <a href="mailto:">${engineer.getEamil()}</a></p>
                    <p>Office Number: ${engineer.getGithub()}</p>
            </div>
        </div>
    `
}

//Manager card
const generateIntern = intern => {
    return `
     <div class="card">
            <div class="card-header">
                <h3>${intern.getName()}</h3>
                <h4>Job Title</h4>
            </div>
            <div class="card-body">
                    <p>ID: ${intern.getId()}</p>
                    <p>Email: <a href="mailto:">${intern.getEamil()}</a></p>
                    <p>Office Number: ${intern.getSchool()}</p>
            </div>
        </div>
    `
}

//push 3 cards to the page
generateHtml = (data) => {
    pageArray = [];
    console.log(data);
    console.log(pageArray);
    for (let i = 0; i > data.length; i++) {
        const role = Employee.getRole()

        if (role === 'Manager') {
            pageArray.push(generateManager(data[i]));
        }

        if (role === 'Engineer') {
            pageArray.push(generateEngineer(data[i]));
        }

        if (role === 'Intern') {
            pageArray.push(generateIntern(data[i]));
        }

    }

}

module.exports = generateHTML; 