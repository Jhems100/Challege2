function deleteNth(arr, n) {
    let counts = {};
  
    let result = [];
  
    for (let num of arr) {
      if (counts[num] === undefined || counts[num] < n) {
        result.push(num);
        counts[num] = (counts[num] || 0) + 1;
      }
    }
  
    return result;
  }
  
  console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); // Output: [1, 2, 3, 1, 2]
  console.log(deleteNth([20, 37, 20, 21], 1)); // Output: [20, 37, 21]
  