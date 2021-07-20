const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should display the parameters given to the object', () => {
        const person = new Employee("Juna Crawford", 1, "juna@thors.com")
        expect(person.name).toEqual("Juna Crawford");
        expect(person.id).toEqual(1);
        expect(person.email).toEqual("juna@thors.com");
        expect(person.role).toEqual("Employee");
    });

    it('should display the parameters based on the function called', () => {
        const person = new Employee("Juna Crawford", 1, "juna@thors.com")
        expect(person.getName()).toEqual("Juna Crawford");
        expect(person.getId()).toEqual(1);
        expect(person.getEmail()).toEqual("juna@thors.com");
        expect(person.getRole()).toEqual("Employee");
    })
});