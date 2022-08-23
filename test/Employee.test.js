const Employee = require('../lib/Employee');
const employee = new Employee('Kaihuan', '1', 'huangkaihuan0216@gmail.com');

test('test if we can get the name value with the getName() method', () => {
    expect(employee.getName()).toBe('Kaihuan')
});

test('test if we can get the id value with the getId() method', () => {
    expect(employee.getId()).toBe('1')
});

test('test if we can get the email value with the getEmail() method', () => {
    expect(employee.getEmail()).toBe('huangkaihuan0216@gmail.com')
});

test('test if we can get the Role value with the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee')
});