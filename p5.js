function capitalizeName(name) {
    const firstLetter = name[0];
    const isLowercase = firstLetter.toLowerCase() === firstLetter;
  
    return isLowercase ? name.toUpperCase() : name;
  }
  
  const name = "john doe";
  const capitalizedName = capitalizeName(name);
  
  console.log(capitalizedName); // "John Doe"
  