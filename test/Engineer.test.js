const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Kaihuan', '1', 'huangkaihuan0216@gmail.com', 'https://github.com/kaihuan-huang');

test('test if we can get the name value with the getName() method', () => {
    expect(engineer.getName()).toBe('Kaihuan')
});

test('test if we can get the id value with the getId() method', () => {
    expect(engineer.getId()).toBe('1')
});

test('test if we can get the email value with the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('huangkaihuan0216@gmail.com')
});

test('test if we can get the officeNumber value with the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('https://github.com/kaihuan-huang')
});

test('test if we can get the Role value with the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer')
});