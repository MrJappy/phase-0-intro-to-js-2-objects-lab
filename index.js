// Write your solution in this file!
const employee = {
    name: 'Jack',
    streetAdress: '6969 booboo',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return employee[key] = value
};


