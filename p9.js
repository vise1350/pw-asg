function Divisible(numbers) {
    for (const number of numbers) {
      if (number % 3 === 0 && number % 2 !== 0) {
        console.log(number);
      } else {
        continue;
      }
    }
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  Divisible(numbers);
  