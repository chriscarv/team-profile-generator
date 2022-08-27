const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Chris', 10, 'chris@.com', 'ZUniversity');

    expect(typeof(intern)).toBe('object');
});

test('get school', () => {
    const intern = new Intern('Sasha', 11, 'sasha@fakemail.com', 'Yale');

    expect(intern.getSchool()).toBe('Yale');
})

test('get role', () => {
    const intern = new Intern('Gary', 12, 'gary@gmail.com', 'Brown');

    expect(intern.getRole()).toBe('Intern');
})