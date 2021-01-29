class employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }
        if (typeof email !== "string" || !email.trim().length || !email.includes("@")) {
            throw new Error("Expected parameter 'email' to be a non-empty string that includes the '@' sign");
        }
    
        this.name = name;
        this.id = id;
        this.email = email;

        this.prototype.getName() = function() {
            return name;
        }
        
        this.prototype.getId() = function() {
            return id;
        }
        
        this.prototype.getEmail() = function() {
            return email;
        }
        
        this.prototype.getRole() = function() {
            return "Employee";
        }
    }
};

module.exports = employee;