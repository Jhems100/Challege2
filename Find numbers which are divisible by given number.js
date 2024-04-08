function divisibleBy(numbers, divisor){
    return numbers.filter(function(number){
      return number % divisor === 0;
    })
  }