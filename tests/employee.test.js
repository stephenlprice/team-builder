const employee =require('../lib/employee.js');

describe("Employee", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        const child = new Child("Sarah", 3);
  
        // Verify that the new object has the correct properties
        expect(child.name).toEqual("Sarah");
        expect(child.age).toEqual(3);
      });