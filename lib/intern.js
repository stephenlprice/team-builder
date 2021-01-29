const employee = require('./employee');

class intern extends employee {
    constructor(name, id, email, school) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }
        if (typeof email !== "string" || !email.trim().length || !email.includes("@")) {
            throw new Error("Expected parameter 'email' to be a non-empty string that includes the '@' sign");
        }
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

module.exports = intern;