const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const htmlRender = require("./lib/htmlRender");

const managerQ = [
    {   
        type: "input",
        message: "What is the Manager's name?",
        name: "name"
    },
    {   
        type: "input",
        message: "What is the Manager's ID?",
        name: "id"
    },
    {   
        type: "input",
        message: "What is the Manager's email address?",
        name: "email"
    },
    {   
        type: "input",
        message: "What is the Manager's Office located (city)?",
        name: "office"
    }
];

const engineerQ = [
    {   
        type: "input",
        message: "What is the Engineer's name?",
        name: "name"
    },
    {   
        type: "input",
        message: "What is the Engineer's ID?",
        name: "id"
    },
    {   
        type: "input",
        message: "What is the Engineer's email address?",
        name: "email"
    },
    {   
        type: "input",
        message: "What is the Engineer's Github username?",
        name: "github"
    }
];

const internQ = [
    {   
        type: "input",
        message: "What is the Intern's name?",
        name: "name"
    },
    {   
        type: "input",
        message: "What is the Intern's ID?",
        name: "id"
    },
    {   
        type: "input",
        message: "What is the Intern's email address?",
        name: "email"
    },
    {   
        type: "input",
        message: "What school is the Intern studying at?",
        name: "school"
    }
];

const menu = {
    type: 'list',
    message: 'Are you done profiling your team or is there a new kind of Employee that you wish to describe?',
    name: 'choice',
    choices: ['Engineer', 'Intern', new inquirer.Separator(), 'Finish Team Profile']
};

const team = [
];

managerAsk() = () => {
    inquirer
        .prompt(managerQ)
        .then(() => {
            let name = managerQ.name;
            let id = managerQ.id;
            let email = managerQ.email;
            let office = managerQ.office;

            const newManager = new manager(name, id, email, office);
            team.push(newManager);
            menuAsk();
        }); 
}

engineerAsk() = () => {
    inquirer
        .prompt(engineerQ)
        .then(() => {
            let name = engineerQ.name;
            let id = engineerQ.id;
            let email = engineerQ.email;
            let github = engineerQ.github;

            const newEngineer = new engineer(name, id, email, github);
            team.push(newEngineer);
            menuAsk();
        });
}

internAsk() = () => {
    inquirer
        .prompt(internQ)
        .then(() => {
            let name = internQ.name;
            let id = internQ.id;
            let email = internQ.email;
            let school = internQ.school;

            const newIntern = new intern(name, id, email, school);
            team.push(newIntern);
            menuAsk();
        });
}

menuAsk() = () => {
    inquirer
        .prompt(menu)
        .then((answer) => {
            let choice = answer.choice;
            if (choice === "Finish Team Profile") {
                writeHTML("index.html", team);
            }
            else if (choice === "Engineer"){
                engineerAsk();
            }
            else if (choice === "Intern"){
                internAsk();
            }
        });
}

writeHTML() = (filename, data) => {
    console.log("Writing Team Profile to the page...");
    const html = htmlRender(data);

    fs.writeFile(filename, html, 'utf8', (err) =>
    err ? console.error(err) : console.log('Success! Team Profile written as index.html, now available in root...')
    );
    console.log("Thank you for using Team Builder.");
    console.log("\nGoodbye!");
    process.exit(0);
}
        
// function to initialize program
init() = () => {
    managerAsk();
}

// function call to initialize program
init();