const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
  
    return discountPercentage.toFixed(2);
  };
  
  const originalPrice = 1000;
  const discountedPrice = 500;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  
  console.log(discountPercentage); // 50.00
  
