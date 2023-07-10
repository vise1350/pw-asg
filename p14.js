function calculateFinalOrderPrice(cart) {
    const totalPrice = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  
    return totalPrice;
  }
  
  const cart = [
    {
      unitPrice: 1000,
      quantity: 2,
    },
    {
      unitPrice: 500,
      quantity: 4,
    },
    {
      unitPrice: 200,
      quantity: 1,
    },
  ];
  
  const finalOrderPrice = calculateFinalOrderPrice(cart);
  
  console.log(finalOrderPrice); // 2700
  