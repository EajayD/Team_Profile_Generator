const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it("should display the parameters given to the object", () => {
        const person = new Engineer("Musse Egret", 3, "musse@thors.com", "MEgret");
        expect(person.name).toEqual("Musse Egret");
        expect(person.id).toEqual(3);
        expect(person.email).toEqual("musse@thors.com");
        expect(person.role).toEqual("Engineer")
        expect(person.github).toEqual("MEgret")
    });

    it('should display the parameters based on the function called', () => {
        const person = new Engineer("Musse Egret", 3, "musse@thors.com", "MEgret");
        expect(person.getName()).toEqual("Musse Egret");
        expect(person.getId()).toEqual(3);
        expect(person.getEmail()).toEqual("musse@thors.com");
        expect(person.getRole()).toEqual("Engineer")
        expect(person.getGithub()).toEqual("MEgret")
    })
})