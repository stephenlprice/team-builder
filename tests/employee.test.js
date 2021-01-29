const { describe } = require('@jest/globals');
const { default: deprecatedOptions } = require('jest-config/build/Deprecated');
const employee = require('../lib/employee.js');

describe("employee", () => {
    describe("Initialization", () => {
        it("should instantiate an employee instance", () => {
            const emp = new employee("Jim", "28B43AJ", "jim@startup.com");
            expect(typeof(emp)).toBe("object");
        });

        it("should initialize an employee object with valid arguments name, id, email", () => {
            const emp = new employee("Jim", "28B43AJ", "jim@startup.com");
            
            expect(emp.name).toEqual("Jim");
            expect(emp.id).toEqual("28B43AJ");
            expect(emp.email).toEqual("jim@startup.com");
        });

        it("should throw an error if provided with no arguments", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new employee();
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no name", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new employee("", "28B43AJ", "jim@startup.com");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined name", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new employee(undefined, "28B43AJ", "jim@startup.com");
            };
    
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if provided with no id", () => {
            const err = new Error(
                "Expected parameter 'id' to be a non-empty string"
            );

            const cb = () => {
                const emp = new employee("Jim", "", "jim@startup.com");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined id", () => {
            const err = new Error(
                "Expected parameter 'id' to be a non-empty string"
            );

            const cb = () => {
                const emp = new employee("Jim", undefined, "jim@startup.com");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no email", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new employee("Jim", "28B43AJ", "");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined email", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new employee("Jim", "28B43AJ", undefined);
            };
    
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if the provided email lacks an '@' character", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new employee("Jim", "28B43AJ", "jimstartup.com");
            };
    
            expect(cb).toThrowError(err);
        });
    });

    describe("getName", () => {
        it("should return the employee name via getName()", () => {
            const emp = new employee("Jim", "28B43AJ", "jim@startup.com");

            const name = emp.getName();

            expect(name).toBe("Jim");
        });
    });

    describe("getId", () => {
        it("should return the employee id via getId()", () => {
            const emp = new employee("Jim", "28B43AJ", "jim@startup.com");

            const id = emp.getId();

            expect(id).toBe("28B43AJ");
        });
    });

    describe("getEmail", () => {
        it("should return the employee email via getEmail()", () => {
            const emp = new employee("Jim", "28B43AJ", "jim@startup.com");

            const email = emp.getEmail();

            expect(email).toBe("jim@startup.com");
        });
    });

    describe("getRole", () => {
        it("should return the employee role via getRole()", () => {
            const emp = new employee("Jim", "28B43AJ", "jim@startup.com");

            const role = emp.getRole();

            expect(role).toBe("Employee");
        });
    });
});
