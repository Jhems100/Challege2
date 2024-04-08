function toCamelCase(str) {
    let words = str.split(/[-_]/);
  
    let camelCaseStr = words[0];
  
    for (let i = 1; i < words.length; i++) {
      camelCaseStr += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    return camelCaseStr;
  }
  
  console.log(toCamelCase("the-stealth-warrior")); // Output: "theStealthWarrior"
  console.log(toCamelCase("The_Stealth_Warrior")); // Output: "TheStealthWarrior"
  console.log(toCamelCase("The_Stealth-Warrior")); // Output: "TheStealthWarrior"
  