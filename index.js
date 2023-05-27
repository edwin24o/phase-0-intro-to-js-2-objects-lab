function updateEmployeeWithKeyAndValue(Sam, key, value) {
    return {...Sam, [key]: value};
    //=> 
}
let employee = {
    name: "Sam",
    streetAddress: "123 Main St"
  };
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
