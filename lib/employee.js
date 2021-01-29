class employee {
    constructor(name, id, email, sex) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }
        if (typeof email !== "string" || !email.trim().length || !email.includes("@")) {
            throw new Error("Expected parameter 'email' to be a non-empty string that includes the '@' sign");
        }
        if (typeof sex !== "string" || !sex.trim().length) {
            throw new Error("Expected parameter 'sex' to be a non-empty string");
        }
    
        this.name = name;
        this.id = id;
        this.email = email;
        this.sex = sex;
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getSex() {
        return this.sex;
    }
    
    getRole() {
        return "Employee";
    }
};

module.exports = employee;