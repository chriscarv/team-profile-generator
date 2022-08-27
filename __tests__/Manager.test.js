const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('Gareth', 15, 'gareth@mail.com', 213);

    expect(typeof(manager)).toBe('object');
});

test('get office number', () => {
    const manager = new Manager('Sam', 16, 'sam@mail.com', 311);

    expect(manager.getOfficeNumber()).toEqual(311);
});

test('get role', () => {
    const manager = new Manager('Allen', 17, 'allen@fakemail.com', 23);

    expect(manager.getRole()).toBe('Manager');
})