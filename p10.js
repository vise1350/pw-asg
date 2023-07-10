function doubleQuantity(cart) {
    for (const index in cart) {
      cart[index] *= 2;
    }
  }
  
  const cart = [1, 2, 3, 4, 5];
  doubleQuantity(cart);
  
  console.log(cart); // [2, 4, 6, 8, 10]
  