const { describe, expect } = require('@jest/globals');
const { default: deprecatedOptions } = require('jest-config/build/Deprecated');
const intern = require('../lib/intern.js');

describe("intern", () => {
    describe("Initialization", () => {
        it("should instantiate a intern instance", () => {
            const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", "male");
            expect(typeof(emp)).toBe("object");
        });

        it("should initialize a intern object with valid arguments name, id, email, school, sex", () => {
            const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", "male");
            
            expect(emp.name).toEqual("Jim");
            expect(emp.id).toEqual("28B43AJ");
            expect(emp.email).toEqual("jim@startup.com");
            expect(emp.school).toEqual("UT");
            expect(emp.sex).toEqual("male");
        });

        it("should throw an error if provided with no arguments", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new intern();
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no name", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new intern("", "28B43AJ", "jim@startup.com", "UT", "male");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined name", () => {
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            const cb = () => {
                const emp = new intern(undefined, "28B43AJ", "jim@startup.com", "UT", "male");
            };
    
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if provided with no id", () => {
            const err = new Error(
                "Expected parameter 'id' to be a non-empty string"
            );

            const cb = () => {
                const emp = new intern("Jim", "", "jim@startup.com", "UT", "male");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined id", () => {
            const err = new Error(
                "Expected parameter 'id' to be a non-empty string"
            );

            const cb = () => {
                const emp = new intern("Jim", undefined, "jim@startup.com", "UT", "male");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no email", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new intern("Jim", "28B43AJ", "", "UT", "male");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined email", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new intern("Jim", "28B43AJ", undefined, "UT", "male");
            };
    
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if the provided email lacks an '@' character", () => {
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string that includes the '@' sign"
            );

            const cb = () => {
                const emp = new intern("Jim", "28B43AJ", "jimstartup.com", "UT", "male");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no school", () => {
            const err = new Error(
                "Expected parameter 'school' to be a non-empty string"
            );

            const cb = () => {
                const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "", "male");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined school", () => {
            const err = new Error(
                "Expected parameter 'school' to be a non-empty string"
            );

            const cb = () => {
                const emp = new intern("Jim", "28B43AJ", "jim@startup.com", undefined, "male");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with no sex", () => {
            const err = new Error(
                "Expected parameter 'sex' to be a non-empty string"
            );

            const cb = () => {
                const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", "");
            };
    
            expect(cb).toThrowError(err);
        });

        it("should throw an error if provided with an undefined sex", () => {
            const err = new Error(
                "Expected parameter 'sex' to be a non-empty string"
            );

            const cb = () => {
                const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", undefined);
            };
    
            expect(cb).toThrowError(err);
        });
    });

    describe("getName", () => {
        it("should return the intern name via getName()", () => {
            const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", "male");

            const name = emp.getName();

            expect(name).toBe("Jim");
        });
    });

    describe("getId", () => {
        it("should return the intern id via getId()", () => {
            const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", "male");

            const id = emp.getId();

            expect(id).toBe("28B43AJ");
        });
    });

    describe("getEmail", () => {
        it("should return the intern email via getEmail()", () => {
            const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", "male");

            const email = emp.getEmail();

            expect(email).toBe("jim@startup.com");
        });
    });

    describe("getSchool", () => {
        it("should return the intern office via getOffice()", () => {
            const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", "male");

            const school = emp.getSchool();

            expect(school).toBe("UT");
        });
    });

    describe("getSex", () => {
        it("should return the intern email via getEmail()", () => {
            const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", "male");

            const sex = emp.getSex();

            expect(sex).toBe("male");
        });
    });

    describe("getRole", () => {
        it("should return the intern role via getRole()", () => {
            const emp = new intern("Jim", "28B43AJ", "jim@startup.com", "UT", "male");

            const role = emp.getRole();

            expect(role).toBe("Intern");
        });
    });
});