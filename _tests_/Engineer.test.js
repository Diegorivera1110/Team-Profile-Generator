const Engineer = require('../lib/Engineer');

describe("Manager", () => {
    test("testing for name", () => {
        const employee = new Engineer('Diego', 1, 'diegorivera1110@gmail.com', 'github');
    
        expect(employee.getName()).toBe('Diego');
        
    })
    test("testing for email", () => {
        const employee = new Engineer('Diego', 1, 'diegorivera1110@gmail.com', 'github');
    
        expect(employee.getEmail()).toBe('diegorivera1110@gmail.com');
        
    })
    test("testing for id", () => {
        const employee = new Engineer('Diego', 1, 'diegorivera1110@gmail.com', 'github');
    
        expect(employee.getId()).toBe(1);
        
    })
    test("testing for role", () => {
        const employee = new Engineer('Diego', 1, 'diegorivera1110@gmail.com', 'github');
    
        expect(employee.getRole()).toBe('Engineer');
        
    })
    test("testing for office number", () => {
        const employee = new Engineer('Diego', 1, 'diegorivera1110@gmail.com', 'github');
    
        expect(employee.getGithub()).toBe('github');
        
    })
})