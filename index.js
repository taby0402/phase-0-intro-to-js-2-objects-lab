const employee = {
    first: "Tabitha",
    last: "Carroll",
};
const address = {
    street: {
        line1: "111 Crazy Ave",
        line2: "2nd Floor",
    },
    city: "Las Vegas",
    state: "NV",
    zipCode: "12345",
};
 
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
const hairColor = updateEmployeeWithKeyAndValue(
    employee,
    "blue",
);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
delete newEmployee[key]
return newEmployee
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
delete employee[key]
return employee
};
