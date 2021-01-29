const inquirer = require("inquirer");
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

function managerAsk() {
    inquirer
        .prompt(managerQ)
        .then((data) => {
            let name = data.name;
            let id = data.id;
            let email = data.email;
            let office = data.office;

            console.log(name);

            const newManager = new manager(name, id, email, office);
            team.push(newManager);
            menuAsk();
        }); 
}

function engineerAsk() {
    inquirer
        .prompt(engineerQ)
        .then((data) => {
            let name = data.name;
            let id = data.id;
            let email = data.email;
            let github = data.github;

            const newEngineer = new engineer(name, id, email, github);
            team.push(newEngineer);
            menuAsk();
        });
}

function internAsk() {
    inquirer
        .prompt(internQ)
        .then((data) => {
            let name = data.name;
            let id = data.id;
            let email = data.email;
            let school = data.school;

            const newIntern = new intern(name, id, email, school);
            team.push(newIntern);
            menuAsk();
        });
}

function menuAsk() {
    inquirer
        .prompt(menu)
        .then((answer) => {
            let choice = answer.choice;
            if (choice === "Finish Team Profile") {
                console.log("Analyzing input data...");
                htmlRender(team);
            }
            else if (choice === "Engineer"){
                engineerAsk();
            }
            else if (choice === "Intern"){
                internAsk();
            }
        });
}
        
// function to initialize program
function init() {
    let output = ' \n';
    output += ' ______  _____   ______  ________   _______ __  __ ____ __      _____   _____  _______    \n';
    output += '(__  __)(_____) ||____|| || || ||   ||   || ||  ||  ||  ||      ||  || (_____) ||   ||    \n';
    output += '   ||   ||___   ||    || || || ||   ||___|| ||  ||  ||  ||      ||  || ||___   ||___//   \n';
    output += '   ||   (____)  ||____|| || || ||   ||____  ||  ||  ||  ||      ||  || (|___)  ||____     \n';
    output += '   ||   ||____  ||____|| || || ||   ||   || ||  ||  ||  ||____  ||  || ||____  ||   ||    \n';
    output += '  (__)  (_____) ||    || || || ||   ||___|| ||__|| _||_ ||____| ||__// (_____) ||   ||    \n';
    console.log(output);
    managerAsk();
}

// function call to initialize program
init();