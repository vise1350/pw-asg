
function billSplitter(dishes, people) {
    const totalBill = dishes.reduce((acc, dish) => acc + dish.cost * dish.people, 0);
    const billPerPerson = totalBill / people;
  
    return {
      totalBill,
      billPerPerson,
    };
  }
  
  const dishes = [
    {
      name: "Pizza",
      cost: 1000,
      people: 2,
    },
    {
      name: "Burger",
      cost: 500,
      people: 4,
    },
    {
      name: "Salad",
      cost: 200,
      people: 1,
    },
  ];
  
  const result = billSplitter(dishes, 4);
  
  console.log(result); // { totalBill: 2700, billPerPerson: 675 }
  