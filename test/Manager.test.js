const Manager = require('../lib/Manager');
const manager = new Manager('Kaihuan', '1', 'huangkaihuan0216@gmail.com', '123');

test('test if we can get the name value with the getName() method', () => {
    expect(manager.getName()).toBe('Kaihuan')
});

test('test if we can get the id value with the getId() method', () => {
    expect(manager.getId()).toBe('1')
});

test('test if we can get the email value with the getEmail() method', () => {
    expect(manager.getEmail()).toBe('huangkaihuan0216@gmail.com')
});


test('test if we can get the officeNumber value with the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('123')
});

test('test if we can get the Role value with the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager')
});