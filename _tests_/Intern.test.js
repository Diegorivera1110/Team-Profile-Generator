const Intern = require('../lib/Intern');

describe("Intern", () => {
    test("testing for name", () => {
        const employee = new Intern('Diego', 1, 'diegorivera1110@gmail.com', 'school');
    
        expect(employee.getName()).toBe('Diego');
        
    })
    test("testing for email", () => {
        const employee = new Intern('Diego', 1, 'diegorivera1110@gmail.com', 'school');
    
        expect(employee.getEmail()).toBe('diegorivera1110@gmail.com');
        
    })
    test("testing for id", () => {
        const employee = new Intern('Diego', 1, 'diegorivera1110@gmail.com', 'school');
    
        expect(employee.getId()).toBe(1);
        
    })
    test("testing for role", () => {
        const employee = new Intern('Diego', 1, 'diegorivera1110@gmail.com', 'school');
    
        expect(employee.getRole()).toBe('Intern');
        
    })
    test("testing for office number", () => {
        const employee = new Intern('Diego', 1, 'diegorivera1110@gmail.com', 'school');
    
        expect(employee.getSchool()).toBe('school');
        
    })
})