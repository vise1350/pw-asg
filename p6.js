function countVowels(name) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
  
    for (const letter of name) {
      if (vowels.includes(letter)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const name = "john doe";
  const vowelCount = countVowels(name);
  
  console.log(vowelCount); // 2
  