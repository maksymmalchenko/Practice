let input;
const numbers = [];
let total = 0;

while (true) {
  // input = prompt('Введите число: ');
  if (input === null) {
    if (numbers.length > 0) {
      for (const number of numbers) {
        total += Number(number);
      }
      console.log(`Общая сумма чисел равна ${total}`)
    }
    break;
  }
  
  numbers.push(input);
} 


