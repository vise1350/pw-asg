const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    return randomNumber;
  };
  
  const randomNumber = generateRandomNumber();
  
  console.log(randomNumber); // A random number between 1 and 100
  