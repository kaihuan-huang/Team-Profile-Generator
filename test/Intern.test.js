const Intern = require('../lib/Intern');
const intern = new Intern('Kaihuan', '1', 'huangkaihuan0216@gmail.com', 'UCB');

test('test if we can get the name value with the getName() method', () => {
    expect(intern.getName()).toBe('Kaihuan')
});

test('test if we can get the id value with the getId() method', () => {
    expect(intern.getId()).toBe('1')
});

test('test if we can get the email value with the getEmail() method', () => {
    expect(intern.getEmail()).toBe('huangkaihuan0216@gmail.com')
});


test('test if we can get the github value with the getGithub() method', () => {
    expect(intern.getSchool()).toBe('UCB')
});

test('test if we can get the Role value with the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern')
});