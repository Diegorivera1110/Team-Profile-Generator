
// this adds the Manager card to the html page layout above
const addManager = function (manager) {
  return `
    <div class="">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4><i class="fa-regular fa-starship-freighter"></i>  Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// this adds the Engineer card to the html page layout above
const addEngineer = function (engineer) {
  return `
    <div class="">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4><i class="fa-regular fa-starfighter"></i>  Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
    `;
}

// this adds the Intern card to the html page layout above
const addIntern = function (intern) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4><i class="fa-regular fa-robot-astromech"></i>  Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
}


const htmlGenerate = (data) => {
    // array for html elements
  teamArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerFile = addManager(employee);
      teamArray.push(managerFile);
    }

    if (role === "Engineer") {
      const engineerFile = addEngineer(employee);
        teamArray.push(engineerFile);
    }
    if (role === "Intern") {
      const internFile = addIntern(employee);
      teamArray.push(internFile);
    }
  }

  const cardsArray = teamArray.join('')

  const generateProfile = pageLayout(cardsArray);
  return generateProfile;
}


const pageLayout = function (cardsArray) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- bootstrap link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style.css" />
    <title>Team Page</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
        </header>

        <main class="container">
            <div class="d-flex justify-content-around">
                ${cardsArray}
            </div>
            </main>



<!-- bootstrap JS link -->  
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" />
</body>
</html>
    `;
};

module.exports = htmlGenerate;



 