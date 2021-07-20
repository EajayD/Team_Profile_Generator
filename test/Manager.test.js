const Manager = require("../lib/Manager");

describe('Manager', () => {
    it('should display the parameters given to the object', () => {
        const person = new Manager("Rean Schwarzer", 2, "rean@thors.com", 700)
        expect(person.name).toEqual("Rean Schwarzer");
        expect(person.id).toEqual(2);
        expect(person.email).toEqual("rean@thors.com");
        expect(person.role).toEqual("Manager");
        expect(person.officeNumber).toEqual(700);
    })

    it('should display the parameters based on the function called', () => {
        const person = new Manager("Rean Schwarzer", 2, "rean@thors.com", 700)
        expect(person.getName()).toEqual("Rean Schwarzer");
        expect(person.getId()).toEqual(2);
        expect(person.getEmail()).toEqual("rean@thors.com");
        expect(person.getRole()).toEqual("Manager");
    })
})