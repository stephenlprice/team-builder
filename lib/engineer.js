const employee = require('./employee');

class engineer extends employee {
    constructor(github) {
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        this.github = github;

        this.prototype.getGithub() = function() {
            return github;
        }

        this.getRole() = function() {
            return "Engineer";
        }
    }
};

module.exports = engineer;