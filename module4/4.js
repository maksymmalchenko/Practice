const countTotalSalary = function(employees) {
  const salaries = Object.values(employees);
  total = 0;
  
  for (salary of salaries) {
    total += salary;
  }
  
  return total;
};


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400