const Employee = require('../lib/Employee');

// console.log(new Employee());

// jest.mock('../lib/Employee');


describe("Employee", () => {
    test("testing for name", () => {
        const employee = new Employee('Diego', 1, 'diegorivera1110@gmail.com');
    
        expect(employee.getName()).toBe('Diego');
        
    })
    test("testing for email", () => {
        const employee = new Employee('Diego', 1, 'diegorivera1110@gmail.com');
    
        expect(employee.getEmail()).toBe('diegorivera1110@gmail.com');
        
    })
    test("testing for id", () => {
        const employee = new Employee('Diego', 1, 'diegorivera1110@gmail.com');
    
        expect(employee.getId()).toBe(1);
        
    })
    test("testing for role", () => {
        const employee = new Employee('Diego', 1, 'diegorivera1110@gmail.com');
    
        expect(employee.getRole()).toBe('Employee');
        
    })
    
})