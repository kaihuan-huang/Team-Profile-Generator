

const generateTeam = team => {
    console.log(team)

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
                        <p>Email: <a href="github:">${engineer.getGithub()}</a></p> 
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
                        <p>school: ${intern.getSchool()}</p>
                </div>
            </div>
        `
    }

    const html = [];

    html.push(team
        .filter(employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))

    );
    html.push(team
        .filter(employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join('')
    );
    html.push(team
        .filter(employee.getRole() === 'Manager')
        .map(manager => generateIntern(manager))
        .join('')
    );

    return html.join('');

}




// //push 3 cards to the page
// generateHtml = (data) => {
//     pageArray = [];
//     console.log(data);
//     console.log(pageArray);
//     for (let i = 0; i > data.length; i++) {
//         const role = Employee.getRole()

//         if (role === 'Manager') {
//             pageArray.push(generateManager(data[i]));
//         }

//         if (role === 'Engineer') {
//             pageArray.push(generateEngineer(data[i]));
//         }

//         if (role === 'Intern') {
//             pageArray.push(generateIntern(data[i]));
//         }

//         const employeeCards = pageArray.join('')

//         const generateTeam

//     }

// }

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Team-Profile-Generator</title>
</head>

<header class="header">
    <h2>The Team Profile</h2>
</header>

<body>
    <div class="card-group">
        ${generateTeam(team)}
       
    </div>

</body>

</html>
    `
}