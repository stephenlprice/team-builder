const { describe, expect } = require('@jest/globals');
const { default: deprecatedOptions } = require('jest-config/build/Deprecated');
const engineer = require('../lib/engineer.js');

describe("engineer", () => {
    describe("Initialization", () => {
        it("should instantiate a engineer instance", () => {
            const emp = new engineer("Jim", "28B43AJ", "jim@startup.com", "https://github.com/stephenlprice");
            expect(typeof(emp)).toBe("object");
        });

        it("should initialize a engineer object with valid arguments name, id, email, github", () => {
            const emp = new engineer("Jim", "28B43AJ", "jim@startup.com", "https://github.com/stephenlprice");
            
            expect(emp.name).toEqual("Jim");
            expect(emp.id).toEqual("28B43AJ");
            expect(emp.email).toEqual("jim@startup.com");
            expect(emp.github).toEqual("https://github.com/stephenlprice");
        });

        it("should throw an error if provided with no arguments", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new engineer();
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no name", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new engineer("", "28B43AJ", "jim@startup.com", "https://github.com/stephenlprice");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined name", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new engineer(undefined, "28B43AJ", "jim@startup.com", "https://github.com/stephenlprice");
            };
    
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if provided with no id", () => {
            const err = new Error(
                "Expected parameter 'id' to be a non-empty string"
            );

            const cb = () => {
                const emp = new engineer("Jim", "", "jim@startup.com", "https://github.com/stephenlprice");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined id", () => {
            const err = new Error(
                "Expected parameter 'id' to be a non-empty string"
            );

            const cb = () => {
                const emp = new engineer("Jim", undefined, "jim@startup.com", "https://github.com/stephenlprice");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no email", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new engineer("Jim", "28B43AJ", "", "https://github.com/stephenlprice");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined email", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new engineer("Jim", "28B43AJ", undefined, "https://github.com/stephenlprice");
            };
    
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if the provided email lacks an '@' character", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new engineer("Jim", "28B43AJ", "jimstartup.com", "https://github.com/stephenlprice");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no github", () => {
            const err = new Error(
                "Expected parameter 'github' to be a non-empty string"
            );

            const cb = () => {
                const emp = new engineer("Jim", "28B43AJ", "jim@startup.com", "");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined github", () => {
            const err = new Error(
                "Expected parameter 'github' to be a non-empty string"
            );

            const cb = () => {
                const emp = new engineer("Jim", "28B43AJ", "jim@startup.com", undefined);
            };
    
            expect(cb).toThrowError(err);
        });
    });

    describe("getName", () => {
        it("should return the engineer name via getName()", () => {
            const emp = new engineer("Jim", "28B43AJ", "jim@startup.com", "https://github.com/stephenlprice");

            const name = emp.getName();

            expect(name).toBe("Jim");
        });
    });

    describe("getId", () => {
        it("should return the engineer id via getId()", () => {
            const emp = new engineer("Jim", "28B43AJ", "jim@startup.com", "https://github.com/stephenlprice");

            const id = emp.getId();

            expect(id).toBe("28B43AJ");
        });
    });

    describe("getEmail", () => {
        it("should return the engineer email via getEmail()", () => {
            const emp = new engineer("Jim", "28B43AJ", "jim@startup.com", "https://github.com/stephenlprice");

            const email = emp.getEmail();

            expect(email).toBe("jim@startup.com");
        });
    });

    describe("getGithub", () => {
        it("should return the engineer office via getGithub()", () => {
            const emp = new engineer("Jim", "28B43AJ", "jim@startup.com", "https://github.com/stephenlprice");

            const github = emp.getGithub();

            expect(github).toBe("https://github.com/stephenlprice");
        });
    });

    describe("getRole", () => {
        it("should return the engineer email via getEmail()", () => {
            const emp = new engineer("Jim", "28B43AJ", "jim@startup.com", "https://github.com/stephenlprice");

            const role = emp.getRole();

            expect(role).toBe("Engineer");
        });
    });
});