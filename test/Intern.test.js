const Intern = require("../lib/Intern");

describe ("Intern", () => {
    it('should display the parameters given to the object', () => {
        const person = new Intern("Altina Orion", 4, "altina@thors.com", "Thors");
        expect(person.name).toEqual("Altina Orion");
        expect(person.id).toEqual(4);
        expect(person.email).toEqual("altina@thors.com");
        expect(person.role).toEqual("Intern");
        expect(person.school).toEqual("Thors");
    })

    it('should display the parameters based on the function called', () => {
        const person = new Intern("Altina Orion", 4, "altina@thors.com", "Thors");
        expect(person.getName()).toEqual("Altina Orion");
        expect(person.getId()).toEqual(4);
        expect(person.getEmail()).toEqual("altina@thors.com");
        expect(person.getRole()).toEqual("Intern");
        expect(person.getSchool()).toEqual("Thors");
    })
})