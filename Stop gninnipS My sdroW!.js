function spinWords(string) {
    let words = string.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length >= 5) {
        words[i] = words[i].split('').reverse().join('');
      }
    }
  
    return words.join(' ');
  }
  
  console.log(spinWords("Hey fellow warriors")); // Output: "Hey wollef sroirraw"
  console.log(spinWords("This is a test")); // Output: "This is a test"
  console.log(spinWords("This is another test")); // Output: "This is rehtona test"
  