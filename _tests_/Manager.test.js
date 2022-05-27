const Manager = require('../lib/Manager');

describe("Manager", () => {
    test("testing for name", () => {
        const employee = new Manager('Diego', 1, 'diegorivera1110@gmail.com', 5);
    
        expect(employee.getName()).toBe('Diego');
        
    })
    test("testing for email", () => {
        const employee = new Manager('Diego', 1, 'diegorivera1110@gmail.com', 5);
    
        expect(employee.getEmail()).toBe('diegorivera1110@gmail.com');
        
    })
    test("testing for id", () => {
        const employee = new Manager('Diego', 1, 'diegorivera1110@gmail.com', 5);
    
        expect(employee.getId()).toBe(1);
        
    })
    test("testing for role", () => {
        const employee = new Manager('Diego', 1, 'diegorivera1110@gmail.com', 5);
    
        expect(employee.getRole()).toBe('Manager');
        
    })
    test("testing for office number", () => {
        const employee = new Manager('Diego', 1, 'diegorivera1110@gmail.com', 5);
    
        expect(employee.getOfficeNumber()).toBe(5);
        
    })
})