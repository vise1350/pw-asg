function removeDuplicates(cart) {
    const seenItems = new Set();
    const newCart = [];
  
    for (const item of cart) {
      if (!seenItems.has(item)) {
        newCart.push(item);
        seenItems.add(item);
      }
    }
  
    return newCart;
  }
  
  const cart = ["item1", "item2", "item3", "item1", "item2"];
  const newCart = removeDuplicates(cart);
  
  console.log(newCart); // ["item1", "item2", "item3"]
  