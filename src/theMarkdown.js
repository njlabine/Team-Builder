const generateMarkdown = (group) => {
  const theMarkdown = [];

  const generateManager = (manager) => {
    let manMarkdown = `<div class="card" style="width: 18rem;">
    <div class="card-header">Manager</div>
    <div class="card-body">
       <h5 class="card-title">${manager.name}</h5>
    </div>
    <ul>
        <li>ID: ${manager.id}</li>
        <li>Email: <span><a href='mailto:${manager.email}'>${manager.email}</a></span></li>
        <li>Office Number: ${manager.officeNumber}</li>
    </ul>
</div>`;

    theMarkdown.push(manMarkdown);
  };

  const generateEngineer = (engineer) => {
    let engMarkdown = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
    </div>
    <ul>
        <li>ID: ${engineer.getId()}</li>
        <li>Email: <span><a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></span></li>
        <li>Github: <span><a target="_blank" href="github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></span></li>
    </ul>
</div>`;

    theMarkdown.push(engMarkdown);
  };

  const generateIntern = (intern) => {
    let intMarkdown = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
    </div>
    <ul>
        <li>ID: ${intern.id}</li>
        <li>Email: <span><a href='mailto:${intern.email}'>${intern.email}</a></span></li>
        <li>School: ${intern.school}</li>
    </ul>
</div>`;

    theMarkdown.push(intMarkdown);
  };

  for (let index = 0; index < group.length; index++) {
    if (group[index].getRole() === "Manager") {
      generateManager(group[index]);
    }
    if (group[index].getRole() === "Engineer") {
      generateEngineer(group[index]);
    }
    if (group[index].getRole() === "Intern") {
      generateIntern(group[index]);
    }
  }

  return theMarkdown.join("");
};

module.exports = (group) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Meet the Team!</title>
    </head>
    <body>
        <div>${generateMarkdown(group)}</div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
    </html>`;
};
