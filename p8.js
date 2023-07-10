function Triangle(i) {
    for (let row = i; row > 0; row--) {
      for (let column = 0; column < row; column++) {
        console.log("*");
      }
      console.log();
    }
  }
  
  Triangle(5);
  