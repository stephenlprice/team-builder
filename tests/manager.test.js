const { describe, expect } = require('@jest/globals');
const { default: deprecatedOptions } = require('jest-config/build/Deprecated');
const manager = require('../lib/manager.js');

describe("manager", () => {
    describe("Initialization", () => {
        it("should instantiate a manager instance", () => {
            const emp = new manager("Jim", "28B43AJ", "jim@startup.com", "Austin");
            expect(typeof(emp)).toBe("object");
        });

        it("should initialize a manager object with valid arguments name, id, email, office", () => {
            const emp = new manager("Jim", "28B43AJ", "jim@startup.com", "Austin");
            
            expect(emp.name).toEqual("Jim");
            expect(emp.id).toEqual("28B43AJ");
            expect(emp.email).toEqual("jim@startup.com");
            expect(emp.office).toEqual("Austin");
        });

        it("should throw an error if provided with no arguments", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new manager();
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no name", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new manager("", "28B43AJ", "jim@startup.com", "Austin");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined name", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new manager(undefined, "28B43AJ", "jim@startup.com", "Austin");
            };
    
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if provided with no id", () => {
            const err = new Error(
                "Expected parameter 'id' to be a non-empty string"
            );

            const cb = () => {
                const emp = new manager("Jim", "", "jim@startup.com", "Austin");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined id", () => {
            const err = new Error(
                "Expected parameter 'id' to be a non-empty string"
            );

            const cb = () => {
                const emp = new manager("Jim", undefined, "jim@startup.com", "Austin");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no email", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new manager("Jim", "28B43AJ", "", "Austin");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined email", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new manager("Jim", "28B43AJ", undefined, "Austin");
            };
    
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if the provided email lacks an '@' character", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new manager("Jim", "28B43AJ", "jimstartup.com", "Austin");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no office", () => {
            const err = new Error(
                "Expected parameter 'office' to be a non-empty string"
            );

            const cb = () => {
                const emp = new manager("Jim", "28B43AJ", "jim@startup.com", "");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined office", () => {
            const err = new Error(
                "Expected parameter 'office' to be a non-empty string"
            );

            const cb = () => {
                const emp = new manager("Jim", "28B43AJ", "jim@startup.com", undefined);
            };
    
            expect(cb).toThrowError(err);
        });
    });

    describe("getName", () => {
        it("should return the manager name via getName()", () => {
            const emp = new manager("Jim", "28B43AJ", "jim@startup.com", "Austin");

            const name = emp.getName();

            expect(name).toBe("Jim");
        });
    });

    describe("getId", () => {
        it("should return the manager id via getId()", () => {
            const emp = new manager("Jim", "28B43AJ", "jim@startup.com", "Austin");

            const id = emp.getId();

            expect(id).toBe("28B43AJ");
        });
    });

    describe("getEmail", () => {
        it("should return the manager email via getEmail()", () => {
            const emp = new manager("Jim", "28B43AJ", "jim@startup.com", "Austin");

            const email = emp.getEmail();

            expect(email).toBe("jim@startup.com");
        });
    });

    describe("getOffice", () => {
        it("should return the manager office via getOffice()", () => {
            const emp = new manager("Jim", "28B43AJ", "jim@startup.com", "Austin");

            const office = emp.getOffice();

            expect(office).toBe("Austin");
        });
    });

    describe("getRole", () => {
        it("should return the manager email via getEmail()", () => {
            const emp = new manager("Jim", "28B43AJ", "jim@startup.com", "Austin");

            const role = emp.getRole();

            expect(role).toBe("Manager");
        });
    });
});