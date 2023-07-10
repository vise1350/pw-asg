function convertCelsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
  
    return fahrenheit;
  }
  
  const celsius = 20;
  const fahrenheit = convertCelsiusToFahrenheit(celsius);
  
  console.log(fahrenheit); // 68
  