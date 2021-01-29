const employee = require('./employee');

class intern extends employee {
    constructor(school) {
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        this.school = school;

        this.prototype.getSchool() = function() {
            return school;
        }

        this.getRole() = function() {
            return "intern";
        }
    }
};

module.exports = intern;