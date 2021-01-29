const employee = require('./employee');

class engineer extends employee {
    constructor(name, id, email, github, sex) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }
        if (typeof email !== "string" || !email.trim().length || !email.includes("@")) {
            throw new Error("Expected parameter 'email' to be a non-empty string that includes the '@' sign");
        }
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        if (typeof sex !== "string" || !sex.trim().length) {
            throw new Error("Expected parameter 'sex' to be a non-empty string");
        }
        
        super(name, id, email, sex);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};

module.exports = engineer;