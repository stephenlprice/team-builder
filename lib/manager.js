const employee = require('./employee');

class manager extends employee {
    constructor(office) {
        if (typeof office !== "string" || !office.trim().length) {
            throw new Error("Expected parameter 'office' to be a non-empty string");
        }
        this.office = office;

        this.prototype.getOffice() = function() {
            return office;
        }

        this.getRole() = function() {
            return "Manager";
        }
    }
};

module.exports = manager;