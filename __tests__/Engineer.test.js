const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('Dave', 8, 'dave@fakemail.com', 'davegh');

    expect(engineer.getName()).toBe('Dave');
    expect(engineer.getId()).toEqual(8);
    expect(engineer.getEmail()).toBe('dave@fakemail.com');
    expect(engineer.getGithub()).toBe('davegh');
});

test('get github', () => {
    const engineer = new Engineer('Sara', 9, 'sara@fakemail.com', 'saragh');

    expect(engineer.getGithub()).toBe('saragh');
});

test('get role', () => {
    const engineer = new Engineer('Sara', 9, 'sara@fakemail.com', 'saragh');

    expect(engineer.getRole()).toBe('Engineer');
});