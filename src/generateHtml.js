
//Manager card
const generateManager = manager => {
    return `
    <div class="card">
            <div class="card-header">
                <h3>${manager.getName()}</h3>
                <h4><i class="fa-solid fa-person"></i>Manager</h4>
            </div>
            <div class="card-body">
                    <p>ID: ${manager.getId()}</p>
                    <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
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
                <h4><i class="fa-solid fa-laptop"></i>Engineer</h4>
            </div>
            <div class="card-body">
                    <p>ID: ${engineer.getId()}</p>
                    <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                    <p>Github: <a target="_blank" href="${engineer.getGithub()}">${engineer.getGithub()}</a></p> 
            </div>
        </div>
    `
}

//Intern card
const generateIntern = intern => {
    return `
    <div class="card">
            <div class="card-header">
                <h3>${intern.getName()}</h3>
                <h4><i class="fa-solid fa-graduation-cap"></i>Intern</h4>
            </div>
            <div class="card-body">
                    <p>ID: ${intern.getId()}</p>
                    <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                    <p>school: ${intern.getSchool()}</p>
            </div>
        </div>
    `
}


const generateTeam = team => {
    console.log(team)
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




//push 3 cards to the page
const generateHtml = (data) => {
    pageArray = [];
    console.log(data);
    console.log(pageArray);
    for (let i = 0; i < data.length; i++) {
        const role = data[i].getRole()

        if (role === 'Manager') {
            pageArray.push(generateManager(data[i]));
        }

        else if (role === 'Engineer') {
            pageArray.push(generateEngineer(data[i]));
        }

        else if (role === 'Intern') {
            pageArray.push(generateIntern(data[i]));
        }

    }
    const employeeCards = pageArray.join('');
    return employeeCards;
}


module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/da78b9d2c9.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title><i class="fa-light fa-chalkboard-user"></i> Team-Profile-Generator </title>
</head>

<header class="header">
    <h2>The Team Profile</h2>
</header>

<body>
    <div class="card-group">
        ${generateHtml(team)}
       
    </div>

</body>

</html>
    `
}