function calculateRentalCost(numberOfDays, carType) {
    const rentalCost = {
      economy: 4000,
      midsize: 10000,
      luxury: 20000,
    };
  
    const totalCost = rentalCost[carType] * numberOfDays;
  
    return totalCost;
  }
  
  const numberOfDays = 5;
  const carType = "luxury";
  const totalCost = calculateRentalCost(numberOfDays, carType);
  
  console.log(totalCost); // 100000
  