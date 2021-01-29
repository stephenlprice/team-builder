const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../src");

const render = employees => {
    const manager = [];
    const engineers = [];
    const interns = [];

    manager.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
    );
    engineers.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
    );
    interns.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
    );

    return renderMain(manager.join(""), engineers.join(""), interns.join(""));
};

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "office", manager.getOffice());
    template = replacePlaceholders(template, "sex", manager.getSex());
    console.log("Rendering the Manager, " + manager.getName() + "...");
    return template;
  };
  
  const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    template = replacePlaceholders(template, "sex", engineer.getSex());
    console.log("Rendering the Engineer, " + engineer.getName() + "...");
    return template;
  };
  
  const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    template = replacePlaceholders(template, "sex", intern.getSex());
    console.log("Rendering the Intern, " + intern.getName() + "...");
    return template;
  };
  
  const renderMain = (manager, engineers, interns) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    template = replacePlaceholders(template, "manager", manager);
    template = replacePlaceholders(template, "engineers", engineers);
    template = replacePlaceholders(template, "interns", interns);
    console.log("Inserting team data to the page...");
    
    writeHTML(template);
  };
  
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };

const writeHTML = data => {
    console.log("Writing index.html...");
    let html = data.toString();

    fs.writeFile("index.html", html, 'utf8', (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log('Success! Team Profile written as index.html, now available in root...');
            console.log("Thank you for using Team Builder.");
            console.log("\nGoodbye!");
            process.exit(0);
        }
    });
}
  
  module.exports = render;