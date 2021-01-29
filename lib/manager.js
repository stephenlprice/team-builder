const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, office) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }
        if (typeof email !== "string" || !email.trim().length || !email.includes("@")) {
            throw new Error("Expected parameter 'email' to be a non-empty string that includes the '@' sign");
        }
        if (typeof office !== "string" || !office.trim().length) {
            throw new Error("Expected parameter 'office' to be a non-empty string");
        }
        super(name, id, email);
        this.office = office;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
};

module.exports = manager;