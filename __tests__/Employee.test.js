const Employee = require('../lib/Employee');

test('creates an Employee object', () => {

    const employee = new Employee('Jeff', 1, 'jeff@fakemail.com');

    expect(employee.name).toBe('Jeff');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('jeff@fakemail.com');

});

test('get employee name', () => {
    const employee = new Employee('Steve', 2, 'steve@fakemail.com');

    expect(employee.getName()).toEqual('Steve');
});

test('get employee id', () => {
    const employee = new Employee('Mark', 3, 'mark@fakemail.com');

    expect(employee.getId()).toEqual(3);
});

test('get employee email', () => {
    const employee = new Employee('Angela', 4, 'angela@fakemail.com');

    expect(employee.getEmail()).toEqual('angela@fakemail.com');
});

test('get role', () => {
    const employee = new Employee('Idris', 5, 'idris@fakemail.com');

    expect(employee.getRole()).toBe('Employee');
})
